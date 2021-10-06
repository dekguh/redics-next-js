import { Meta } from '@storybook/react'
import { default as BxAlert } from '.'
import { IBoxAlert } from '../../../utils/types'

export default {
    component: BxAlert,
    title: 'Design System/Molecules/Alert/Box Alert'
} as Meta

export const BoxAlert = (args : IBoxAlert) => <BxAlert {...args}/>