"use client";

import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const statuses: { label: string; value?: Status }[] = [
  { value: "OPEN", label: "Open" },
  { value: "CLOSED", label: "Closed" },
  { value: "IN_PROGRESS", label: "In Progress" },
];

const IssueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <>
      <Select.Root
        defaultValue={searchParams.get("status") || "All"}
        onValueChange={(value) => {
          const params = new URLSearchParams();
          if (value) params.append("status", value);
          if (searchParams.get("orderBy"))
            params.append("orderBy", searchParams.get("orderBy")!);
          const query = params.size ? `?${params.toString()}` : "";
          router.push("/issues" + query);
        }}
      >
        <Select.Trigger placeholder="Filter by status" />
        <Select.Content>
          <Select.Item key="all" value="All">
            All
          </Select.Item>
          {statuses.map((status) => (
            <Select.Item key={status.value} value={status.value || ""}>
              {status.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
    </>
  );
};

export default IssueStatusFilter;
