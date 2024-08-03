import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import { createIssueSchema } from "@/app/schemaValidations";

export async function POST(req: NextRequest) {
  const res = await req.json();
  const isSafe = createIssueSchema.safeParse(res);
  if (!isSafe.success) {
    return NextResponse.json({ error: isSafe.error.errors }, { status: 400 });
  }
  const newIssue = await prisma.issue.create({
    data: {
      title: res.title,
      description: res.description,
    },
  });
  return NextResponse.json(newIssue, { status: 201 });
}
