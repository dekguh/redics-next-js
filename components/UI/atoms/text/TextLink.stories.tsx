import { Meta } from '@storybook/react'
import { ITextLink } from '../../../utils/types'
import { default as TxtLink } from './TextLink'

export default {
    component: TxtLink,
    title: 'Design System/Atoms/Text/Text Link',
    argTypes: {
        text: {
            control: { type: 'text' },
            defaultValue: 'label'
        },
        toPath: {
            control: { type: 'text' },
            defaultValue: '-'
        },
        isActive: {
            control: { type: 'boolean' },
            defaultValue: false
        },
    }
} as Meta

export const TextLink = (args : ITextLink) => <TxtLink {...args}/>