import { BookingsPageHeader } from "@/components/pages/BookingPage/BookingsPageHeader";
import { CreateActivityButton } from "@/components/pages/BookingPage/CreateActivityButton";

export default function BookingsPage() {
  return (
    <div>
      <BookingsPageHeader />
      
      <div className="flex justify-end">
        <CreateActivityButton />
      </div>
    </div>
  );
}