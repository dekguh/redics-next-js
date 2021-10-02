import { Meta } from '@storybook/react'
import { IFormInput, IFormPassword } from '../../../utils/types'
import { default as FrmPassword } from './FormPassword'

export default {
    component: FrmPassword,
    title: 'Design System/Molecules/FormGroup/Form Password',
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
        required: {
            control: { type: 'boolean' },
            defaultValue: false
        },
    }
} as Meta

export const FormPassword = (args : IFormPassword) => <FrmPassword {...args}/>