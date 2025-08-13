"use client";

import { ActivityCreatePanel } from "@/components/panels/ActivityCreatePanel";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function CreateActivityButton() {
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setPanelOpen(true)}
        className="rounded-full px-6"
      >
        Create Activity
      </Button>
      
      <ActivityCreatePanel open={panelOpen} onOpenChange={setPanelOpen} />
    </>
  );
}