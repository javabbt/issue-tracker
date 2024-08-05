import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

const EditIssuePage = async ({ params }: Props) => {
  const issue = prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();

  return <div>EditIssuePage</div>;
};

export default EditIssuePage;
