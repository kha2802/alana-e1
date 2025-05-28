import { HTTPError } from "@/utils/errors";
import { handleError, makeErrorResponse, makeSuccessResponse } from "@/utils/http";
import { NextRequest, NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const GET = async (req: NextRequest) => {
  try {
    const json = await prisma.categories.findMany();
    const response = makeSuccessResponse(json);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
};

export const POST = async (req: NextRequest) => {
  const json = await req.json();

  const {
    name = "",
    description = ""
  } = json;

  const category: Prisma.CategoriesCreateInput = {
    name,
    description
  };
  try {
    const postJson = await prisma.categories.create({
      data: category,
    });
    const response = makeSuccessResponse(postJson);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
};

export const PUT = async (req: NextRequest) => {
  const json = await req.json();

  const {
    id = 0,
    name = "",
    description = ""
  } = json;

  const category: Prisma.CategoriesUpdateInput = {
    name,
    description
  };
  try {
    const json = await prisma.categories.update({
      where: { id },
      data: category,
    });
    const response = makeSuccessResponse(json);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
};
