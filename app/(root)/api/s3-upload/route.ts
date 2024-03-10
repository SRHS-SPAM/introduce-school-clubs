import { S3Client } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY as string,
  },
});

async function uploadFileToS3(file: Buffer, fileName: any) {
  const fileBuffer = file;
  console.log(fileName);
}

export async function GET(request: Request) {
  try {
    const formData = (await request.formData()) as any;
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "file is required." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = await uploadFileToS3(buffer, file.name);

    return NextResponse.json({ succes: true, fileName });
  } catch (error) {
    return NextResponse.json({ error: "Error uploading file" });
  }
}
