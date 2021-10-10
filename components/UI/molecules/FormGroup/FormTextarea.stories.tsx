import { Meta } from '@storybook/react'
import { IFormTextarea } from '../../../utils/types'
import { default as FrmTextarea } from './FormTextarea'

export default {
    component: FrmTextarea,
    title: 'Design System/Molecules/FormGroup/Form Textarea',
    argTypes: {
        label: {
            control: { type: 'text' },
            defaultValue: 'label'
        },
        placeholder: {
            control: { type: 'text' },
            defaultValue: 'placeholder'
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

export const FormTextarea = (args : IFormTextarea) => <FrmTextarea {...args}/>