import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Check } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { FormFieldProps, InputFieldProps, NumberInputFieldProps, PriceInputFieldProps, SelectFieldProps, SwitchFieldProps } from "@/types";
import { useEffect, useRef, useState } from "react";


function FormField({ label, required = false, children }: FormFieldProps) {
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
  placeholder = "Select an option", 
  value, 
  onValueChange, 
  options = [],
  className = ""
}: SelectFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle option selection
  const handleOptionClick = (optionValue: string) => {
    onValueChange(optionValue);
    setIsOpen(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <FormField label={label} required={required}>
      <div className="relative" ref={selectRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onKeyDown={handleKeyDown}
          className={`
            flex h-9 w-full items-center justify-between 
            whitespace-nowrap rounded-full border border-gray-200 
            bg-transparent px-3 py-5 text-sm shadow-sm 
            ring-offset-background 
            focus:outline-none ring-transparent ring-1 focus:ring-gray-950 
            disabled:cursor-not-allowed disabled:opacity-50
            ${className}
          `}
        >
          <span className={`line-clamp-1 ${selectedOption ? 'text-gray-900' : 'text-gray-500'}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown className={`h-4 w-4 opacity-50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 z-50 mt-1 min-w-full overflow-hidden rounded-md border bg-white text-gray-950 shadow-md animate-in fade-in-0 zoom-in-95">
            <div className="p-1">
              {options.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleOptionClick(option.value)}
                  className={`
                    relative flex w-full cursor-default select-none items-center 
                    rounded-md py-1.5 pl-2 pr-8 text-sm outline-none 
                    hover:bg-gray-100 focus:bg-gray-100 my-1 
                    ${value === option.value ? 'bg-gray-100' : ''}
                  `}
                >
                  <span className="block truncate">{option.label}</span>
                  {value === option.value && (
                    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
                      <Check className="h-4 w-4" />
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
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
        className="border rounded-full py-[22.1px]"
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
    <div className="flex items-center justify-between p-2.5 border rounded-full">
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
    <div className="flex items-center justify-between p-2.5 border rounded-full">
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