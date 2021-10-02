import { Meta } from '@storybook/react'
import { IFormInput } from '../../../utils/types'
import { default as FrmInput } from './FormInput'

export default {
    component: FrmInput,
    title: 'Design System/Molecules/FormGroup/Form Input',
    argTypes: {
        label: {
            control: { type: 'text' },
            defaultValue: 'label'
        },
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
        },
        required: {
            control: { type: 'boolean' },
            defaultValue: false
        },
    }
} as Meta

export const FormInput = (args : IFormInput) => <FrmInput {...args}/>