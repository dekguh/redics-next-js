import { Meta } from '@storybook/react'
import { ITextarea } from '../../../utils/types'
import { default as Txtarea } from './Textarea'

export default {
    component: Txtarea,
    title: 'Design System/Atoms/Control/Textarea',
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
        rows: {
            control: { type: 'number' },
            defaultValue: 8
        },
        required: {
            control: { type: 'boolean' },
            defaultValue: false
        },
    }
} as Meta

export const Textarea = (args : ITextarea) => <Txtarea {...args}/>