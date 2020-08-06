import { Request, Response, response } from "express";
import { S3Service } from "../services/S3Service";

export class FileController {
  public async fileUpload(req: Request, res: Response): Promise<AnyARecord> {
    try {
      const file = req.files && (req.files.file as any);

      if (!file) {
        throw new Error("Invalid file");
      }
      const s3Service = new S3Service();
      const result = s3Service.uploadFile({
        name: file.name,
        file: file.data,
      });

      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({
        message: error.message,
      });
    }
  }
}
