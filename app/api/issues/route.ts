import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";
import { issueSchema } from "@/app/schemaValidations";
import { getServerSession } from "next-auth";
import authOptions from "@/app/auth/authOptions";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const res = await req.json();
  const isSafe = issueSchema.safeParse(res);
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
