import { HTTPError } from "@/utils/errors";
import {
  handleError,
  makeSuccessResponse,
} from "@/utils/http";
import { NextRequest, NextResponse } from "next/server";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    const postJson = await prisma.articles.findMany({
      orderBy: {
        publishedDate: "desc",
      },
      select: { id: true },
    });
    const response = makeSuccessResponse(postJson);

    const ip = req.ip || req.headers.get("X-Forwarded-For");
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
};

export const POST = async (req: NextRequest) => {
  const json = await req.json();

  const {
    title = "",
    content = "",
    summary = "",
    avatar = "",
    publishedDate = new Date(),
  } = json;

  const article: Prisma.ArticlesCreateInput = {
    title,
    content,
    summary,
    avatar,
    publishedDate,
    views: 0,
    status: "archived",
    category: { connect: { id: 1 } },
    user: { connect: { id: 1 } },
  };
  try {
    const postJson = await prisma.articles.create({
      data: article,
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
    id = "",
    title = "",
    content = "",
    summary = "",
    publishedDate = new Date(),
  } = json;

  const article: Prisma.ArticlesUpdateInput = {
    title,
    content,
    summary,
    publishedDate,
    views: 0,
    status: "archived",
  };
  try {
    const postJson = await prisma.articles.update({
      where: { id },
      data: article,
    });
    const response = makeSuccessResponse(postJson);
    return NextResponse.json(response, { status: 200 });
  } catch (error: any) {
    return handleError(error);
  }
};
