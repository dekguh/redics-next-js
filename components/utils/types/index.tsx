import { ReactNode } from 'react'
import { IconType } from 'react-icons'

export type TDataListMenu = Array<{
    icon: IconType;
    toPath: string;
}>

export interface IButton {
    text: string;
    onClick?: React.MouseEventHandler;
    type?: "button" | "reset" | "submit" | undefined;
}

export interface IInput {
    value: string;
    onChange?: React.ChangeEventHandler;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    classes?: string;
}

export interface ISelect {
    list: Array<{
        value: number | string;
        text: string;
    }>;
    onChange?: React.ChangeEventHandler;
    classes?: string;
}

export interface ITextarea {
    value: string;
    onChange?: React.ChangeEventHandler;
    placeholder?: string;
    classes?: string;
    rows?: number;
}

export interface ILabelForm {
    text: string;
    classes?: string;
}

export interface IAppWrapper {
    children: JSX.Element | ReactNode
}

export interface INavList {
    dataListMenu: TDataListMenu;
}

export interface INavItem {
    icon: IconType;
    toPath: string;
    isActive?: boolean;
}