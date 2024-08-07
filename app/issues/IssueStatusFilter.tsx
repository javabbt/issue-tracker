import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import React from "react";

const statuses: { label: string; value?: Status }[] = [
  { value: "OPEN", label: "Open" },
  { value: "CLOSED", label: "Closed" },
  { value: "IN_PROGRESS", label: "In Progress" },
];

const IssueStatusFilter = () => {
  return (
    <Select.Root defaultValue="All">
      <Select.Trigger>Filter by status</Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Item key="all" value="All">
            All
          </Select.Item>
          {statuses.map((status) => (
            <Select.Item key={status.value} value={status.value || ""}>
              {status.label}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
