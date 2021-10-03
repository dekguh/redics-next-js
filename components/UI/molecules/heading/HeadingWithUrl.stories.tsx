import { Meta } from '@storybook/react'
import { IHeadingWithUrl } from '../../../utils/types'
import HeadingWithUrl from './HeadingWithUrl'

export default {
    component: HeadingWithUrl,
    title: 'Design System/Molecules/Heading/Heading With URL',
    argTypes: {
        title: {
            control: { type: 'text' },
            defaultValue: 'title'
        },
        textLink: {
            control: { type: 'text' },
            defaultValue: 'buat iklan'
        },
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

export const HeadingWithURL = (args : IHeadingWithUrl) => <HeadingWithUrl {...args}/>