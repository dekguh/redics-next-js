import React from 'react'
import { Meta, Story } from '@storybook/react'
import FormBuatPesanan from '.'

export default {
    title: 'Design System/organisms/Form Buat Pesanan',
    component: FormBuatPesanan
} as Meta

const template : Story = () => (
    <FormBuatPesanan />
)

export const Default = template.bind({})