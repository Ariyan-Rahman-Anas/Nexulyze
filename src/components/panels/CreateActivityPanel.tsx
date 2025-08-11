"use client";

import { Drawer, DrawerContent, DrawerHeader } from "@/components/ui/drawer";
import ActivityCreateForm from "../forms/ActivityCreateForm";

interface CreateActivityPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateActivityPanel({
  open,
  onOpenChange,
}: CreateActivityPanelProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
        <DrawerContent className="h-full max-w-md ml-auto mr-0 mt-0 rounded-l-lg rounded-r-none border-l border-t-0 border-r-0 border-b-0 fixed right-0 top-0 data-[state=open]:animate-slide-in-from-right data-[state=closed]:animate-slide-out-to-right">
          <div className="p-6 pt-0 overflow-y-auto h-full">
            <DrawerHeader className="px-0">
            </DrawerHeader>
            <ActivityCreateForm onOpenChange={onOpenChange} />
          </div>
        </DrawerContent>
    </Drawer>
  );
}