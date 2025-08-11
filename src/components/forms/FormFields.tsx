import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { FormFieldProps, InputFieldProps, NumberInputFieldProps, PriceInputFieldProps, SelectFieldProps, SwitchFieldProps } from "@/types";


export function FormField({ label, required = false, children }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label required={required}>{label}</Label>
      {children}
    </div>
  );
}


export function SelectField({ 
  label, 
  required = false, 
  placeholder, 
  value, 
  onValueChange, 
  options = [] 
}:  SelectFieldProps) {
  return (
    <FormField label={label} required={required}>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-full py-5 rounded-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </FormField>
  );
}


export function InputField({
  label,
  required = false,
  placeholder,
  value,
  onChange,
  type = "text"
}: InputFieldProps) {
  return (
    <FormField label={label} required={required}>
      <Input 
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border rounded-full bg--500 py-2 h-11"
      />
    </FormField>
  );
}


export function SwitchField({
  id,
  label,
  checked,
  onCheckedChange
}: SwitchFieldProps) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-full">
      <Label htmlFor={id} className="text-gray-800 font-medium">{label}</Label>
      <Switch 
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className="data-[state=checked]:bg-green-500"
      />
    </div>
  );
}


export function AddPlayersField({ label, onAdd }: { label: string; onAdd: () => void }) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-full">
      <Label className="text-gray-800 font-medium">{label}</Label>
      <Button
        type="button"
        onClick={onAdd}
        size="sm"
        className="rounded-full w-6 h-6 bg-primaryBgLight hover:bg-primaryBgLight/90"
      >
        <Plus size={10} color="black" />
      </Button>
    </div>
  );
}


export function NumberInputField({
  label,
  required = false,
  value,
  onChange,
}: NumberInputFieldProps  ) {
  const increment = () => {
    const newValue = Number(value) + 1;
    onChange(newValue.toString());
  };

  const decrement = () => {
    const newValue = Number(value) - 1;
    onChange(newValue.toString());
  };

  return (
    <FormField label={label} required={required}>
      <div className="flex items-center justify-between px-3 py-2.5 border rounded-full ">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={decrement}
          className="rounded-full w-6 h-6 p-0 border-gray-300"
        >
          <Minus size={12} />
        </Button>
        <p>{Number(value) > 0 ? value : "0"}</p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={increment}
          className="rounded-full w-6 h-6 p-0 border-gray-300"
        >
          <Plus size={12} />
        </Button>
      </div>
    </FormField>
  );
}


export function PriceInputField({
  label,
  required = false,
  value,
  onChange,
  currency = "$",
  type = "amount" 
}: PriceInputFieldProps ) {
  return (
    <FormField label={label} required={required}>
      <div className="flex items-center rounded-full border">
        <div className="flex items-center p-3  border-r">
          <span className="text-gray-600 text-sm">{type === "percentage" ? "%" : currency}</span>
          <ChevronDown size={16} className="ml-1 text-gray-500" />
        </div>
        <Input 
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="0"
          className="p-3 border-none outline-none shadow-none"
        />
      </div>
    </FormField>
  );
}