import React from 'react'
import { Meta, Story } from '@storybook/react'
import TransaksiSaldo from '.'

export default {
    title: 'Design System/Organisms/Transaksi Saldo',
    component: TransaksiSaldo
} as Meta

const Template : Story = () => (
    <TransaksiSaldo />
)

export const Default = Template.bind({})