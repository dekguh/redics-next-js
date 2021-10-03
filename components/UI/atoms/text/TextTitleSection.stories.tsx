import { Meta } from '@storybook/react'
import { ITextTitleSection } from '../../../utils/types'
import { default as TxtTitleSection } from './TextTitleSection'

export default {
    component: TxtTitleSection,
    title: 'Design System/atoms/Text/Text Title Section',
    argTypes: {
        text: {
            control: { type: 'text' },
            defaultValue: 'title'
        },
        size: {
            control: { type: 'select' },
            options: ['sm', 'lg', 'xl', '2xl', '3xl'],
            defaultValue: 'lg'
        },
        classes: {
            control: { type: 'text' },
            defaultValue: 'mt-1 mb-1'
        },
    }
} as Meta

export const TextTitleSection = (args : ITextTitleSection) => <TxtTitleSection {...args}/>