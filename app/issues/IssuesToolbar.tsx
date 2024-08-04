import { Button, Link } from "@radix-ui/themes";
import React from "react";

const IssuesToolbar = () => {
  return (
    <div className="mb-5">
      <Button>
        <Link href="issues/new">New issue</Link>
      </Button>
    </div>
  );
};

export default IssuesToolbar;
