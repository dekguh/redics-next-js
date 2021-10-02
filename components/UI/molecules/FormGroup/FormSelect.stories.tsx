import { Meta } from '@storybook/react'
import { IFormSelect } from '../../../utils/types'
import { default as FrmSelect } from './FormSelect'

export default {
    component: FrmSelect,
    title: 'Design System/Molecules/FormGroup/Form Select',
    argTypes: {
        label: {
            control: { type: 'text' },
            defaultValue: 'label'
        },
        classes: {
            control: { type: 'text' },
            defaultValue: 'mb-1 mt-1'
        },
        required: {
            control: { type: 'boolean' },
            defaultValue: false
        },
        list: {
            defaultValue: [{ value: 'tes', text: 'tes' }]
        },
    }
} as Meta

export const FormSelect = (args : IFormSelect) => <FrmSelect {...args}/>