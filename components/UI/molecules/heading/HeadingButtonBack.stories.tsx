import { Meta } from '@storybook/react'
import { IHeadingButtonBack } from '../../../utils/types'
import { default as HdingButtonBack } from './HeadingButtonback'

export default {
    component: HdingButtonBack,
    title: 'Design System/Molecules/Heading/Heading Back Button',
    argTypes: {
        toPath: {
            control: { type: 'text' },
            defaultValue: '/iklan'
        },
        classes: {
            control: { type: 'text' },
            defaultValue: 'mt-1 mb-1'
        }
    }
} as Meta

export const HeadingBackButton = (args : IHeadingButtonBack) => <HdingButtonBack {...args}/>