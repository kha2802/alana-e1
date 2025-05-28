import { HTTPError } from "@/utils/errors";
import {
  handleError,
  makeErrorResponse,
  makeSuccessResponse,
} from "@/utils/http";
import { NextRequest, NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  if(params.slug === 'get-all'){
  return await getAll(req)
  }
  const id = parseInt(params.slug);
  try {
    const json = await prisma.articles.findFirst({
      where: { id },
    });

    const postJson = await prisma.articles.findMany({
      where: {
        id: {
          not: id,
        },
      },
      orderBy: {
        publishedDate: "desc",
      },
    });
    const newJson = { ...json, relatedPosts: postJson };
    const response = makeSuccessResponse(newJson);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
};

export const PUT = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const id = parseInt(params.slug);
  if (!id) handleError("id not found");

  const json = await req.json();
  const {
    title = "",
    content = "",
    summary = "",
    avatar = "",
    status = "archived",
  } = json;

  const category: Prisma.ArticlesUpdateInput = {
    title,
    content,
    summary,
    avatar,
    status: status,
  };
  try {
    const json = await prisma.articles.update({
      where: { id },
      data: category,
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
    const json = await prisma.articles.delete({
      where: { id },
    });
    const response = makeSuccessResponse(json);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
};


const getAll = async (req: NextRequest) => {
  try {
    const postJson = await prisma.articles.findMany({
      orderBy: {
        publishedDate: "desc",
      },
    });
    const response = makeSuccessResponse(postJson);

    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
};