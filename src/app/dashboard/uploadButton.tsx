"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

const UploadButton = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={(v) => !v && setOpen(v)}>
      <DialogTrigger onClick={() => setOpen(true)} asChild>
        <Button>Upload File</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle />
        <DialogDescription>
          <p>Uploadinng a file</p>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default UploadButton;
