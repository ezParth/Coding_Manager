import busboy from "busboy";
import { promises } from "dns";
import { Request } from "express";

export const handleMultipartFormData = (req: Request): Promise<{ fields: Record<string, any>; fileData: Record<string, {data: Buffer; mimeType: string}> }> => {
  return new Promise((resolve, reject) => {
    const fields: Record<string, any> = {};
    const files: Array<any> = [];
    const fileData: Record<string, {data: Buffer; mimeType: string}> = {};
    const fileUrls: string[] = [];
    const uploadPromises: Promise<void>[] = [];

    console.log("filename");

    try {
      const bb = busboy({ headers: req.headers });

      bb.on("field", (fieldname, value) => {
        // console.log(`Received field: ${fieldname} = ${value}`);
        fields[fieldname] = value;
      });

      bb.on("file", (fieldname, file, info) => {
        const { filename, mimeType } = info;
        console.log("filename: ",filename)

        const chunks: Uint8Array[] = []

        file.on("data", (chunk) => {
          chunks.push(chunk)
        })
        const dataProcessing = new Promise<void>((resolveFile) => {
          file.on("end", () => {
            const fileBuffer = Buffer.concat(chunks);
            fileData[filename] = {data: fileBuffer, mimeType: mimeType};
            resolveFile()
          })
        })
        uploadPromises.push(dataProcessing)
      });

      bb.on("finish", async () => {
        await Promise.all(uploadPromises);
        console.log("File upload complete.");
        files.push(fileUrls);
        resolve({ fields, fileData});
      });

      bb.on("error", (error) => {
        console.error("Busboy error:", error);
        reject(error);
      });

      req.pipe(bb); // Start processing the request

    } catch (error) {
      console.log("Error in handleMultipartFormData:", error);
      reject(error);
    }
  });
};
