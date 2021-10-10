import { ReactNode } from 'react'
import { IconType } from 'react-icons'

export type TDataListMenu = Array<{
    icon: IconType;
    toPath: string;
}>

export type TDataListProvinsi = Array<{
    id: number;
    name: string;
}>

export type TDataListKabupaten = Array<{
    provinsiId: string;
    id: number;
    name: string;
}>

export type TDataListKecamatan = Array<{
    provinsiId: string;
    kabupatenId: string;
    id: number;
    name: string;
}>

export interface IButton {
    text: string;
    onClick?: React.MouseEventHandler;
    type?: "button" | "reset" | "submit" | undefined;
}

export interface IInput {
    defaultValue?: string | number | readonly string[] | undefined;
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
    defaultVal?: {
        value?: string | number | undefined;
        text: string;
    };
    isSelected?: string | number | readonly string[] | undefined;
}

export interface ITextarea {
    onChange?: React.ChangeEventHandler;
    placeholder?: string;
    classes?: string;
    rows?: number;
    required?: boolean;
    defaultValue?: string | number | readonly string[] | undefined;
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
    defaultValue?: string | number | readonly string[] | undefined;
    onChange?: React.ChangeEventHandler;
    placeholder?: string;
    required?: boolean;
}

export interface IFormTextarea {
    classes?: string;
    label?: string;
    defaultValue?: string | number | readonly string[] | undefined;
    onChange?: React.ChangeEventHandler;
    placeholder?: string;
    required?: boolean;
}

export interface IFormPassword {
    classes?: string;
    label?: string;
    defaultValue?: string | number | readonly string[] | undefined;
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
    defaultVal?: {
        value?: string | number | undefined;
        text: string;
    };
    isSelected?: string | number | readonly string[] | undefined;
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

export interface IPrivateWrapper {
    children?: JSX.Element | React.ReactNode;
    lastCurrentPage?: string;
}

export interface IPublicWrapper {
    children?: JSX.Element | React.ReactNode;
    lastCurrentPage?: string;
}

export type TUserInitState = {
    billing?: {} | null;
    isLogin?: boolean;
}

export type TDataRegister = {
    username: string;
    email: string;
    password: string;
    rePassword?: string;
    typeUser?: 'customer' | 'admin';
}

export type TDataLogin = {
    email: string;
    password: string;
}

export interface IBoxAlert {
    type?: 'danger' | 'success' | 'information';
    text: string;
    classes?: string;
}

export interface IFormProfile {
    classes?: string;
}

export interface IHeadingButtonBack {
    classes?: string;
    toPath?: string;
}