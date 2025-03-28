import busboy from "busboy";
import { Request } from "express";

export const handleMultipartFormData = (req: Request): Promise<{ fields: Record<string, any>; files: Array<any> }> => {
  return new Promise((resolve, reject) => {
    const fields: Record<string, any> = {};
    const files: Array<any> = [];

    try {
      const bb = busboy({ headers: req.headers });

      bb.on("field", (fieldname, value) => {
        console.log(`Received field: ${fieldname} = ${value}`);
        fields[fieldname] = value;
      });

      bb.on("file", (fieldname, file, info) => {
        const { filename, mimeType } = info;
        console.log(`Uploading file: ${filename}`);

        files.push({ fieldname, filename, mimeType });

        file.resume(); // Important to consume the stream to avoid memory leaks
      });

      bb.on("finish", () => {
        console.log("File upload complete.");
        resolve({ fields, files });
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
