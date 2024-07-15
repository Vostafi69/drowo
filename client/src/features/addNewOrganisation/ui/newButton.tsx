"use client";

import { FC } from "react";

import { Plus } from "lucide-react";

import { Dialog, DialogTrigger, DialogContent } from "@/src/shared/ui/dialog";
import { Button } from "@/src/shared/ui/button";

export const NewButton: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Button className="bg-white/25 h-full w-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition p-0">
            <Plus className="text-white" />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent>Добавление новой организации</DialogContent>
    </Dialog>
  );
};
