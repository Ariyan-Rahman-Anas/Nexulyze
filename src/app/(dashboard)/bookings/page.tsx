"use client";

import { ActivityCreatePanel } from "@/components/panels/ActivityCreatePanel";
import { Button } from "@/components/ui/button";
import { Bell, ChevronsUpDown, UserCircleIcon } from "lucide-react";
import { useState } from "react";

export default function BookingsPage() {
  const [panelOpen, setPanelOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#124547]">Bookings</h1>

        <div className="flex items-center gap-4">
          <Bell className="text-primaryBg cursor-pointer" fill="#10715A" size={28} />
          
          <div className=" rounded-[15px] px-1.5 py-1 flex items-center gap-6 border-2 border-gray-100 ">
            <div className="flex items-center gap-2">
            <UserCircleIcon size={30} strokeWidth={1} className="text-gray-500" />
            <div className="text-sm font-semibold">
              <p>User Name</p>
              <p className="text-xs text-primaryBg">User Role</p>
            </div>
            </div>
            <ChevronsUpDown size={18} strokeWidth={1.2} className="cursor-pointer" />
          </div>

        </div>
      </div>
     <div className="flex justify-end">
     <Button
        onClick={() => setPanelOpen(true)}
        className="rounded-full px-6"
      >Create Activity</Button>
     </div>

      <ActivityCreatePanel open={panelOpen} onOpenChange={setPanelOpen} />
    </div>
  );
}