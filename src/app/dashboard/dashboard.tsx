"use client";
import React from "react";
import UploadButton from "./uploadButton";
import { trpc } from "../_trpc/client";
import { Ghost, MessageSquare, Plus, Trash } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const { data: files, isLoading } = trpc.getUserFiles.useQuery();

  return (
    <div className="container mt-[60px] flex flex-grow flex-col">
      <div className="flex items-center justify-between">
        <h1 className="text-[64px] font-bold text-primary">My Files</h1>
        <UploadButton />
      </div>
      <Separator className="mt-[20px] bg-primary/30" orientation="horizontal" />
      <div className="mb-[32px] mt-[20px] flex-grow rounded-md p-[20px]">
        {files && files.length !== 0 ? (
          <ul className="grid w-full grid-cols-3 gap-[20px]">
            {files
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime(),
              )
              .map((i) => {
                return (
                  <li
                    key={i.id}
                    className="flex w-full flex-col rounded-md bg-popover shadow-sm"
                  >
                    <div className="flex items-center justify-start gap-[20px] px-[15px] py-[20px]">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>

                      <h3 className="text-lg font-medium text-primary/90">
                        {i.name}
                      </h3>
                    </div>
                    <Separator orientation="horizontal" />
                    <div className="grid grid-cols-3 px-[15px] py-[10px] text-xs text-primary/70">
                      <div className="flex items-center justify-center gap-2">
                        <Plus className="h-4 w-4" />
                        <p>{format(new Date(i.createdAt), "MMM yyyy")}</p>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        <p>{i.uploadStatus}</p>
                      </div>
                      <Button
                        size={"sm"}
                        className="w-full"
                        variant={"destructive"}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </li>
                );
              })}
          </ul>
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
