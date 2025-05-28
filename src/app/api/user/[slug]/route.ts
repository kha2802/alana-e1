import { HTTPError } from "@/utils/errors";
import { handleError, makeErrorResponse, makeSuccessResponse } from "@/utils/http";
import { NextRequest, NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const PUT = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const json = await req.json();
  const id = parseInt(params.slug);
  if (!id) handleError("id not found");
  const {
    userName = "",
    fullName = "",
    email = "",
    password = "",
    role = "",
  } = json;

  const data: Prisma.UsersUpdateInput = {
    userName,
    email,
    fullName,
    password,
    role,
  };
  try {
    const json = await prisma.users.update({
      where: { id },
      data: data,
    });
    const response = makeSuccessResponse(json);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const id = parseInt(params.slug);
  if (!id) handleError("id not found");

  try {
    const json = await prisma.users.delete({
      where: { id },
    });
    const response = makeSuccessResponse(json);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
};
