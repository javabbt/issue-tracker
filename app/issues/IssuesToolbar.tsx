import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueStatusFilter from "./IssueStatusFilter";

const IssuesToolbar = () => {
  return (
    <Flex mb="5" justify="between" className="mb-5">
      <IssueStatusFilter />
      <Button>
        <Link className="red" href="issues/new">
          New issue
        </Link>
      </Button>
    </Flex>
  );
};

export default IssuesToolbar;
