import { Meta } from '@storybook/react'
import { ILabelForm } from '../../../utils/types'
import { default as LblForm } from './LabelForm'

export default {
    component: LblForm,
    title: 'Design System/Atoms/Text/Label Form',
    argTypes: {
        text: {
            control: { type: 'text' },
            defaultValue: 'label'
        },
        classes: {
            control: { type: 'text' },
            defaultValue: 'mb-1 mt-1'
        },
    }
} as Meta

export const LabelForm = (args : ILabelForm) => <LblForm {...args}/>