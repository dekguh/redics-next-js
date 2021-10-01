import { Meta } from '@storybook/react'
import { IInput } from '../../../utils/types'
import { default as Inpt } from './Input'

export default {
    component: Inpt,
    title: 'Design System/Atoms/Control/Input',
    argTypes: {
        placeholder: {
            control: { type: 'text' },
            defaultValue: 'placeholder'
        },
        value: {
            control: { type: 'text' },
            defaultValue: 'value'
        },
        classes: {
            control: { type: 'text' },
            defaultValue: 'mb-1 mt-1'
        },
        type: {
            options: ['text', 'password', 'email'],
            control: { type: 'select' },
            defaultValue: 'mb-1 mt-1'
        }
    }
} as Meta

export const Input = (args : IInput) => <Inpt {...args}/>