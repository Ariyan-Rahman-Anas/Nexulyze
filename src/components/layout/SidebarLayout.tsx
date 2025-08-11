"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {  LogOut } from "lucide-react";
import { DashboardSidebarItemsI } from "@/types";
import { dashboardSidebarItems } from "@/constant/Constants";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4 flex flex-col">
          <Link href="/" className="text-2xl font-bold text-primaryBg w-fit mx-auto mb-8">Nexulyze</Link>
        
        {/* sidebar items */}
        <nav className="space-y-1 flex flex-col">
          {
            dashboardSidebarItems?.map((item:DashboardSidebarItemsI, idx:number)=> <NavLink 
            key={idx}
            href={item.route}>
            {item.icon && item.icon}
            {item.title}
          </NavLink>)
          }
        </nav>
        
       {/* sidebar footer */}
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