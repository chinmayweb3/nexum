"use client";
import React from "react";
import UploadButton from "./uploadButton";
import { trpc } from "../_trpc/client";
import { Ghost } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const Dashboard = () => {
  const { data: files, isLoading } = trpc.getUserFiles.useQuery();

  return (
    <div className="container mt-[60px] flex flex-grow flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-[64px] font-bold text-primary">My Files</h1>
        <UploadButton />
      </div>
      <div className="mb-[32px] mt-[40px] flex-grow rounded-md border border-border bg-background p-[20px]">
        {files && files.length !== 0 ? (
          <div className="grid grid-cols-3 gap-[20px]">
            {/* {
              // files.sort((a,b) => a.)
            } */}
          </div>
        ) : isLoading ? (
          <div className="flex flex-wrap justify-between gap-[30px]">
            <Skeleton className="h-[250px] basis-[30%]" />
            <Skeleton className="h-[250px] basis-[30%]" />
            <Skeleton className="h-[250px] basis-[30%]" />
            <Skeleton className="h-[250px] basis-[30%]" />
          </div>
        ) : (
          <div className="mt-[50px] flex w-full flex-col items-center justify-center gap-2 text-center">
            <Ghost className="h-8 w-8" />
            <h2 className="text-xl font-semibold">Pretty empty here </h2>
            <p>Let's upload your first PDF.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
