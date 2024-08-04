import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const DetailPage = async ({ params: { id } }: Props) => {
  if (typeof id !== "number") {
    notFound();
  }
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) {
    notFound();
  }

  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>Status: {issue.status}</p>
      <p>Created At: {issue.createdAt.toDateString()}</p>
    </div>
  );
};

export default DetailPage;
