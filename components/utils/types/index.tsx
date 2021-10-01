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