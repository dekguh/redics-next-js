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
    value?: string | number | undefined;
    onChange?: React.ChangeEventHandler;
    placeholder?: string;
    type?: React.HTMLInputTypeAttribute;
    classes?: string;
    required?: boolean;
}

export interface ISelect {
    list: Array<{
        value: number | string;
        text: string;
    }>;
    onChange?: React.ChangeEventHandler;
    classes?: string;
    required?: boolean;
}

export interface ITextarea {
    value: string;
    onChange?: React.ChangeEventHandler;
    placeholder?: string;
    classes?: string;
    rows?: number;
    required?: boolean;
}

export interface ILabelForm {
    text?: string;
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

export interface IFormInput {
    classes?: string;
    label?: string;
    inputType?: React.HTMLInputTypeAttribute;
    value?: string | number | undefined;
    onChange?: React.ChangeEventHandler;
    placeholder?: string;
    required?: boolean;
}

export interface IFormPassword {
    classes?: string;
    label?: string;
    value?: string | number | undefined;
    onChange?: React.ChangeEventHandler;
    placeholder?: string;
    required?: boolean;
}

export interface IFormSelect {
    classes?: string;
    label?: string;
    onChange?: React.ChangeEventHandler;
    required?: boolean;
    list: Array<{
        value: number | string;
        text: string;
    }>;
}

export interface ITextLink {
    text?: string;
    isActive?: boolean;
    toPath: string;
}

export interface IHeadingAuth {
    isLogin?: boolean;
    isRegister?: boolean;
}

export interface IFormButton extends IButton {
    classes?: string;
}

export interface IIconLink {
    icon: IconType;
    toPath: string;
}

export interface ITextTitleSection {
    text: string;
    size?: 'sm' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
    classes?: string;
}

export interface IHeadingWithUrl {
    title: string;
    textLink?: string;
    toPath?: string;
    classes?: string;
}