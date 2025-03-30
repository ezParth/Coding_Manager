import { S3Client, PutObjectCommand, GetObjectCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../config/.env") });

const MAX_BUCKET_SIZE = 4.5 * 1024 * 1024 * 1024; // 4.5 GB in bytes

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY as string,
    secretAccessKey: process.env.SECRET_ACCESS_KEY as string,
  },
});

// function to get the current size of the S3 bucket
const getBucketSize = async (bucketName: string) => {
  let totalSize = 0;
  let continuationToken: string | undefined;

  try {
    do {
      const command = new ListObjectsV2Command({
        Bucket: bucketName,
        ContinuationToken: continuationToken,
      });

      const response = await s3Client.send(command);
      if (response.Contents) {
        totalSize += response.Contents.reduce((acc, obj) => acc + (obj.Size || 0), 0);
      }

      continuationToken = response.NextContinuationToken;
    } while (continuationToken);
  } catch (error) {
    console.error("Error fetching S3 bucket size:", error);
    throw new Error("Unable to fetch bucket size.");
  }

  return totalSize;
};

const uploadToS3 = async (
  fileContent: Buffer | string,
  filename: string,
  contentType: string,
  username: string,
  projectTitle: string,
) => {
  try {
    const bucketName = process.env.S3_BUCKET;
    if (!bucketName) {
      throw new Error("Please provide a bucket name");
    }

    const currentSize = await getBucketSize(bucketName);

    // if size exceeds 4.5 GB
    if (currentSize >= MAX_BUCKET_SIZE) {
      return { success: false, message: "S3 is full. Cannot upload new images." };
    }

    const fileKey = `images/projects/${username}/${projectTitle}/${Date.now()}-${filename}`;

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileKey,
      ContentType: contentType || "image/png",
      Body: fileContent,
    });

    await s3Client.send(command);

    // Generating signed url
    const signedUrl = await getSignedUrl(
      s3Client,
      new GetObjectCommand({ Bucket: bucketName, Key: fileKey })
    );

    console.log("Upload successful:", signedUrl);
    return { success: true, message: "Upload successful", url: signedUrl };
  } catch (error) {
    console.error("Error during AWS file upload:", error);
    return { success: false, message: "Error during file upload", error };
  }
};

export default uploadToS3;
