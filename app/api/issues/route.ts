import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1).max(255),
});

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
