import { Meta } from '@storybook/react'
import { ISelect } from '../../../utils/types'
import { default as Slct } from './Select'

export default {
    component: Slct,
    title: 'Design System/Atoms/Control/Select',
    argTypes: {
        classes: {
            control: { type: 'text' },
            defaultValue: 'mb-1 mt-1'
        },
        list: {
            defaultValue: [{ value: 'tes', text: 'tes' }]
        }
    }
} as Meta

export const Select = (args : ISelect) => <Slct {...args}/>