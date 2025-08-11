"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SelectField, InputField, SwitchField, AddPlayersField, NumberInputField, PriceInputField } from "./FormFields";
import { X } from "lucide-react";

export function CreateActivityForm({ onOpenChange }: { onOpenChange: (open: boolean) => void }) {
  const [formData, setFormData] = useState({
    createdBy: "",
    startTime: "",
    endTime: "",
    activity: "",
    courts: "",
    isRecurrent: false,
    cancellationTime: "",
    isBookingCheckIn: false,
    doorCode: "",
    totalPrice: "",
    discount: ""
  });

  const updateField = (field: keyof typeof formData) => (value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Sample options for dropdowns
  const timeOptions = [
    { value: "09:00", label: "09:00 AM" },
    { value: "10:00", label: "10:00 AM" },
    { value: "11:00", label: "11:00 AM" },
    { value: "12:00", label: "12:00 PM" },
    { value: "13:00", label: "01:00 PM" },
    { value: "14:00", label: "02:00 PM" },
  ];

  const activityOptions = [
    { value: "padel", label: "Padel" },
    { value: "tennis", label: "Tennis" },
    { value: "squash", label: "Squash" },
  ];

  const courtOptions = [
    { value: "court1", label: "Court 1" },
    { value: "court2", label: "Court 2" },
    { value: "court3", label: "Court 3" },
  ];

  const userOptions = [
    { value: "john@example.com", label: "John Doe" },
    { value: "jane@example.com", label: "Jane Smith" },
    { value: "admin@example.com", label: "Admin" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-primaryBg">
          Book Court,
          <span className="ml-2 text-sm text-primaryBg">Wed Jul 30, 2025</span>
        </h2>
        <div className="rounded-md flex items-center justify-center h-7 w-7 border bg-gray-200 hover:bg-gray-300 duration-200 cursor-pointer">
          <X size={20} className="text-primaryBg" onClick={() => onOpenChange(false)} />
        </div>
      </div>

      <div className="space-y-4">
        {/* Basic Select Field */}
        <SelectField
          label="Created By"
          required
          placeholder="Select user"
          value={formData.createdBy}
          onValueChange={updateField('createdBy')}
          options={userOptions}
        />

        {/* Grid with two selects */}
        <div className="grid grid-cols-2 gap-4">
          <SelectField
            label="Start Time"
            required
            placeholder="Select Start Time"
            value={formData.startTime}
            onValueChange={updateField('startTime')}
            options={timeOptions}
          />
          <SelectField
            label="End Time"
            required
            placeholder="Select End Time"
            value={formData.endTime}
            onValueChange={updateField('endTime')}
            options={timeOptions}
          />
        </div>

        {/* Activity Selection */}
        <SelectField
          label="Choose Activity"
          required
          placeholder="Select Activity"
          value={formData.activity}
          onValueChange={updateField('activity')}
          options={activityOptions}
        />

        <AddPlayersField
          label="Add Players"
          onAdd={() => { }}
        />


        {/* Switch Field */}
        <div>
          <SwitchField
            id="recurrent-activity"
            label="Recurrent Activity?"
            checked={formData.isRecurrent}
            onCheckedChange={updateField('isRecurrent')}
          />
        </div>


        {/* Courts Selection */}
        <SelectField
          label="Choose Multiple Courts"
          required
          placeholder="Select Courts"
          value={formData.courts}
          onValueChange={updateField('courts')}
          options={courtOptions}
        />

        <SwitchField
            id="booking-check-in"
            label="Booking Check In"
            checked={formData.isBookingCheckIn}
            onCheckedChange={updateField('isBookingCheckIn')}
          />

        {/* Input Fields Section */}
        <div className="space-y-2">
            <div className="grid grid-cols-2 gap-4">
              <NumberInputField
                required={false}
                label="Cancellation Time (Hours)"
                placeholder="24"
                value={formData.cancellationTime}
                onChange={updateField('cancellationTime')}
                type="number"
              />
              
              <InputField
                required={false}
                label="Door Code"
                placeholder="Door Code"
                value={formData.doorCode}
                onChange={updateField('doorCode')}
                type="number"
              />
            </div>
        </div>

        {/* Price Fields */}
        <div className="grid grid-cols-2 gap-4">
          <PriceInputField
            label="Total Price"
            required
            value={formData.totalPrice}
            onChange={updateField('totalPrice')}
            type="amount"
            currency="$"
          />
          <PriceInputField
            label="Discount"
            required
            value={formData.discount}
            onChange={updateField('discount')}
            type="percentage"
            currency="%"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center gap-2">
        <Button
          variant="outline"
          onClick={() => onOpenChange(false)}
          className="rounded-full px-8 bg-gray-200 hover:bg-gray-300 duration-200"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            console.log('Form Data:', formData);
            onOpenChange(false);
          }}
          className="bg-primaryBgLight hover:bg-primaryBgLight/80 text-black rounded-full px-6"
        >
          Create Activity
        </Button>
      </div>
    </div>
  );
}