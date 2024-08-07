import { prisma } from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import IssueStatusBadge from "../components/IssueStatusBadge";
import Link from "../components/Link";
import IssuesToolbar from "./IssuesToolbar";
import { Issue, Status } from "@prisma/client";
import NextLink from "next/link";
import { ArrowUpIcon } from "@radix-ui/react-icons";

const IssuesPage = async ({
  searchParams,
}: {
  searchParams: {
    status: Status;
    orderBy: keyof Issue;
  };
}) => {
  const isValid = Object.values(Status).includes(searchParams.status);
  const issues = await prisma.issue.findMany({
    where: {
      status: isValid ? searchParams.status : undefined,
    },
  });
  const colums: { label: String; value: keyof Issue; className?: String }[] = [
    { value: "title", label: "Issue" },
    { value: "status", label: "Status", className: "hidden md:table-cell" },
    { value: "createdAt", label: "Created", className: "hidden md:table-cell" },
  ];
  return (
    <>
      <IssuesToolbar />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {colums.map((column) => (
              <Table.ColumnHeaderCell
                key={column.value}
                className={column.className}
              >
                <NextLink
                  href={{
                    pathname: "/issues",
                    query: { ...searchParams, orderBy: column.value },
                  }}
                >
                  {column.label}
                  {searchParams.orderBy === column.value ? (
                    <ArrowUpIcon className="inline" />
                  ) : (
                    ""
                  )}
                </NextLink>
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="block md:hidden">{issue.status}</div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default IssuesPage;
export const dynamic = "force-dynamic";
