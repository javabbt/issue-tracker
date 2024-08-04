import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { prisma } from "@/prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const DetailPage = async ({ params: { id } }: Props) => {
  if (typeof id !== "number") {
    // notFound();
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
      <Heading>{issue.title}</Heading>
      <Flex className="space-x-3 mt-5">
        <IssueStatusBadge status={issue.status} />
        <Text>Created At: {issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="mt-5">
        <p>{issue.description}</p>
      </Card>
    </div>
  );
};

export default DetailPage;
