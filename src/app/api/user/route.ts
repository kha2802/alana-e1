import { HTTPError } from "@/utils/errors";
import { handleError, makeErrorResponse, makeSuccessResponse } from "@/utils/http";
import { NextRequest, NextResponse } from "next/server";
import IArticle from "@/interfaces/model/IArticle";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  const params = req.nextUrl.searchParams;
  const postUrl = params.get("postUrl");
  try {
    const postJson = await prisma.users.findMany();
    const response = makeSuccessResponse(postJson);

   const ip = req.ip ||  req.headers.get('X-Forwarded-For')
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
};

export const POST = async (req: NextRequest) => {
  const json = await req.json();

  const {
    userName = "",
    fullName = "",
    email = "",
    password = "",
    role = "",
  } = json;

  const user: Prisma.UsersCreateInput = {
    userName,
    email,
    fullName,
    password,
    role,
  };
  try {
    const postJson = await prisma.users.create({
      data: user,
    });
    const response = makeSuccessResponse(postJson);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
};

