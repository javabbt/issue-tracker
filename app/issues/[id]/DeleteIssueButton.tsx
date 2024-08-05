import { TrashIcon } from "@radix-ui/react-icons";
import { Button, Text } from "@radix-ui/themes";
import React from "react";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button color="red">
      <TrashIcon />
      <Text>Delete Issue</Text>
    </Button>
  );
};

export default DeleteIssueButton;
