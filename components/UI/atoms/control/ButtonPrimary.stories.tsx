import { Meta } from '@storybook/react'
import { IButton } from '../../../utils/types'
import { default as Btn } from './ButtonPrimary'

export default {
    component: Btn,
    title: 'Design System/Atoms/Control/Button Primary',
    argTypes: {
        text: {
            control: { type: 'text' },
            defaultValue: 'button'
        }
    }
} as Meta

export const ButtonPrimary = (args : IButton) => <Btn {...args}/>