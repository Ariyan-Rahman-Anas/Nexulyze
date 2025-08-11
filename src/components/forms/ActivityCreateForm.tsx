"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SelectField, InputField, SwitchField, AddPlayersField, NumberInputField, PriceInputField } from "./FormFields";
import { X } from "lucide-react";
import { activityOptions, courtOptions, timeOptions, userOptions } from "@/constant/Constants";

const ActivityCreateForm = ({ onOpenChange }: { onOpenChange: (open: boolean) => void }) => {

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

  const hanldeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onOpenChange(false);
  }

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

      <form
        onSubmit={hanldeSubmit}
        className="space-y-4">
        {/* created by */}
        <SelectField
          label="Created By"
          required
          placeholder="Select user"
          value={formData.createdBy}
          onValueChange={updateField('createdBy')}
          options={userOptions}
        />

        {/* times */}
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

        {/* Activity */}
        <SelectField
          label="Choose Activity"
          required
          placeholder="Select Activity"
          value={formData.activity}
          onValueChange={updateField('activity')}
          options={activityOptions}
        />

        {/* add players */}
        <AddPlayersField
          label="Add Players"
          onAdd={() => { }}
        />


        {/* recurrent? */}
        <SwitchField
          id="recurrent-activity"
          label="Recurrent Activity?"
          checked={formData.isRecurrent}
          onCheckedChange={updateField('isRecurrent')}
        />


        {/* Courts */}
        <SelectField
          label="Choose Multiple Courts"
          required
          placeholder="Select Courts"
          value={formData.courts}
          onValueChange={updateField('courts')}
          options={courtOptions}
        />

        {/* booking check in */}
        <SwitchField
          id="booking-check-in"
          label="Booking Check In"
          checked={formData.isBookingCheckIn}
          onCheckedChange={updateField('isBookingCheckIn')}
        />

        {/* cancellation times */}
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

        {/* Price */}
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

        {/* Action btns */}
        <div className="flex justify-between items-center gap-2 pt-8">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="rounded-full px-8 bg-gray-200 hover:bg-gray-300 duration-200"
          >
            Cancel
          </Button>

          <Button
            type="submit"
            className="bg-primaryBgLight hover:bg-primaryBgLight/80 text-black rounded-full px-6"
          >
            Book Court
          </Button>
        </div>
      </form>
    </div>
  )
}
export default ActivityCreateForm