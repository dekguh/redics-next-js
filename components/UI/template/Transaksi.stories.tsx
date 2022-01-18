import react from 'react'
import { Meta, Story } from '@storybook/react'
import Transaksi from './Transaksi'

export default {
    title: 'Design System/Template/Transaksi',
    component: Transaksi
} as Meta

const Template : Story = () => (
    <Transaksi />
)

export const Default = Template.bind({})