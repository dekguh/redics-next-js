import { Meta } from '@storybook/react'
import { IHeadingAuth } from '../../../utils/types'
import { default as HdngAuth } from './HeadingAuth'

export default {
    component: HdngAuth,
    title: 'Design System/Molecules/Heading/Heading Auth',
    argTypes: {
        isLogin: {
            control: { type: 'boolean' },
            defaultValue: true
        },
        isRegister: {
            control: { type: 'boolean' },
            defaultValue: false
        }
    }
} as Meta

export const HeadingAuth = (args : IHeadingAuth) => <HdngAuth {...args}/>