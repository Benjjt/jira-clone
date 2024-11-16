import { redirect } from "next/navigation";

import { CreateWorkspaceForm } from "@/features/workspaces/components/create-workspace-form";
import { getCurrent } from "@/features/auth/actions";
import React from "react";

const WorkspaceCreatePage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");
  return (
    <div className="w-full lg:max-w-xl">
      <CreateWorkspaceForm />
    </div>
  );
};

export default WorkspaceCreatePage;