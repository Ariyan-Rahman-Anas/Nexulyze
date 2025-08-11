import { ReactNode } from "react"

export interface DashboardSidebarItemsI{
    title: string
    route: string
    icon?: ReactNode
}

export interface FormFieldProps {
    label: string,
    required: boolean,
    children: React.ReactNode
}

export interface SelectFieldProps {
    label: string,
    required: boolean,
    placeholder: string,
    value: string,
    onValueChange: (value: string) => void,
    options: { value: string, label: string }[]
}

export interface SwitchFieldProps {
    id: string,
    label: string,
    checked: boolean,
    onCheckedChange: (checked: boolean) => void
}

export interface AddPlayersFieldProps {
    label: string,
    onAdd: () => void
}

export interface InputFieldProps {
    label: string,
    required: boolean,
    placeholder: string,
    value: string,
    onChange: (value: string) => void,
    type: string
}

export interface NumberInputFieldProps {
    label: string,
    required: boolean,
    placeholder: string,
    value: string,
    onChange: (value: string) => void,
    type: string
}

export interface PriceInputFieldProps {
    label: string,
    required: boolean,
    value: string,
    onChange: (value: string) => void,
    currency: string,
    type: "amount" | "percentage"
}