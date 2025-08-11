
import { DashboardSidebarItemsI } from "@/types";
import { CalendarDays } from "lucide-react";

export const dashboardSidebarItems: DashboardSidebarItemsI[] = [
  {
      title: "Bookings",
      route: "/bookings",
      icon: <CalendarDays className="w-5 h-5" />
  },
];


export const timeOptions = [
    { value: "09:00", label: "09:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "13:00", label: "01:00 PM" },
    { value: "14:00", label: "02:00 PM" },
  ];

 export const activityOptions = [
    { value: "padel", label: "Padel" },
    { value: "tennis", label: "Tennis" },
    { value: "squash", label: "Squash" },
  ];

 export const courtOptions = [
    { value: "court1", label: "Court 1" },
    { value: "court2", label: "Court 2" },
    { value: "court3", label: "Court 3" },
  ];

export  const userOptions = [
    { value: "john@example.com", label: "John Doe" },
    { value: "jane@example.com", label: "Jane Smith" },
    { value: "admin@example.com", label: "Admin" },
  ];