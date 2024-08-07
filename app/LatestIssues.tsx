import { prisma } from "@/prisma/client";
import { Prisma } from "@prisma/client";
import { Avatar, Card, Flex, Heading, Table } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusBadge from "./components/IssueStatusBadge";

async function getIssuesWithAssignedUsers() {
  return prisma.issue.findMany({
    include: {
      assignedToUser: true,
    },
    take: 5,
    orderBy: {
      createdAt: "desc",
    },
  });
}

type UsersWithPosts = Prisma.PromiseReturnType<
  typeof getIssuesWithAssignedUsers
>;

const LatestIssues = async () => {
  const issues: UsersWithPosts = await getIssuesWithAssignedUsers();
  return (
    <div>
      <Heading size={"4"} mb="5">
        Latest Issues
      </Heading>
      <Card>
        <Table.Root>
          <Table.Body>
            {issues.map((issue) => (
              <Table.Row key={issue.id}>
                <Table.Cell>
                  <Flex justify={"between"}>
                    <Flex direction={"column"} gap={"2"} align={"start"}>
                      <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                      <IssueStatusBadge status={issue.status} />
                    </Flex>
                    {issue.assignedToUser && (
                      <Avatar
                        src={issue.assignedToUser.image!}
                        fallback="?"
                        size={"2"}
                        radius={"full"}
                      />
                    )}
                  </Flex>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Card>
    </div>
  );
};

export default LatestIssues;
