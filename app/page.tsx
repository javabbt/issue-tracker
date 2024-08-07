import Image from "next/image";
import "./theme-config.css";
import Pagination from "./components/Pagination";
import LatestIssues from "./LatestIssues";
import IssueSummary from "./IssueSummary";
import { prisma } from "@/prisma/client";

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const openedIssues = await prisma.issue.count({ where: { status: "OPEN" } });
  const closedIssues = await prisma.issue.count({
    where: { status: "CLOSED" },
  });
  const inProgressIssues = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  return (
    <IssueSummary
      open={openedIssues}
      closed={closedIssues}
      inProgress={inProgressIssues}
    />
  );
}
