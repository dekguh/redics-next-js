import { Meta } from '@storybook/react'
import { IFormButton } from '../../../utils/types'
import { default as FrmButton } from './FormButton'

export default {
    component: FrmButton,
    title: 'Design System/Molecules/FormGroup/Form Button',
    argTypes: {
        text: {
            control: { type: 'text' },
            defaultValue: 'button'
        },
        classes: {
            control: { type: 'text' },
            defaultValue: 'mb-1 mt-1'
        },
        type: {
            options: ['button', 'reset', 'submit'],
            control: { type: 'select' },
            defaultValue: 'mb-1 mt-1'
        },
    }
} as Meta

export const FormButton = (args : IFormButton) => <FrmButton {...args}/>