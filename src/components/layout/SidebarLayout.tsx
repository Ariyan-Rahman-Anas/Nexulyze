"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CalendarDays, LogOut } from "lucide-react";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-primaryBg text-center">Nexulyze</h1>
        </div>
        
        <nav className="space-y-1">
          <NavLink href="/bookings">
            <CalendarDays />
            Bookings
          </NavLink>
        </nav>
        
        <div className="mt-auto">
          <Button variant="ghost" className="w-full justify-start bg-dangerBg hover:bg-dangerBg/90 text-white hover:text-white">
            <LogOut />
            Logout
          </Button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  );
}


function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {

  return (
    <Link href={href}>
      <Button
        className="w-full justify-start"
      >
        {children}
      </Button>
    </Link>
  );
}