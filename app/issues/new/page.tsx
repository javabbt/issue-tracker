import dynamic from "next/dynamic";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";
import { Metadata } from "next";

const IssueForm = dynamic(() => import("../_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const NewIssuePage = async () => {
  return <IssueForm />;
};

export default NewIssuePage;

export const metadata: Metadata = {
  title: "New Issue",
  description: "Create a new issue",
};
