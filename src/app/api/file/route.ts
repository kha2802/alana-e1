import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }
  //@ts-ignore
  const buffer = Buffer.from(await file.arrayBuffer());
  //@ts-ignore
  const pathImage = formData.get("path").replaceAll(" ", "_");
  try {
    await writeFile(
      path.join(process.cwd(), "public/" + pathImage),
      buffer
    );
    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      return NextResponse.json({ Message: error.message, status: 500 });
    } else {
      return NextResponse.json({ Message: error, status: 500 });
    }
  }
};
