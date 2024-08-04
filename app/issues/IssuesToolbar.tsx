import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesToolbar = () => {
  return (
    <div className="mb-5">
      <Button>
        <Link className="red" href="issues/new">
          New issue
        </Link>
      </Button>
    </div>
  );
};

export default IssuesToolbar;
