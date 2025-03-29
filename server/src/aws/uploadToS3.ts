import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(__dirname, "../config/.env") });

var signedUrl;

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY as string,
    secretAccessKey: process.env.SECRET_ACCESS_KEY as string,
  },
});

const uploadToS3 = async (
  fileContent: Buffer | string,
  filename: string,
  contentType: string
) => {
  try {
    const bucketName = process.env.S3_BUCKET;
    if (!bucketName) {
      throw new Error("Please provide a bucket name");
    }

    const fileKey = `upload/user-uploads/${Date.now()}-${filename}`;

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileKey,
      ContentType: contentType || "image/png",
      Body: fileContent,
    });

    await s3Client.send(command);

    try{
     signedUrl = await getSignedUrl(
      s3Client,
      new GetObjectCommand({ Bucket: bucketName, Key: fileKey }),
    );
    }catch(error: any){
        throw new Error(`UNABLE TO CREATE THE PRE_SIGNED URL FOR SOME REASON ONLY GOD AND JEFF BEZOS KNOW: ${error}`)
    }
    console.log("Upload successful:", signedUrl);

    return { success: true, message: "Upload successful", url: signedUrl };
  } catch (error) {
    console.error("Error during AWS file upload:", error);
    return { success: false, message: "Error during file upload", error };
  }
};

export default uploadToS3;
