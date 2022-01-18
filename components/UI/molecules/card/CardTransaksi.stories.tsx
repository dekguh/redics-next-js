import React from 'react'
import { Meta, Story } from '@storybook/react'
import CardTransaksi from './CardTransaksi'
import { ICardTransaksi } from '../../../utils/types'

export default {
    title: 'Design System/Molecules/Card/Card Transaksi',
    component: CardTransaksi
} as Meta

const Template : Story<ICardTransaksi> = (args) => (
    <CardTransaksi {...args}/>
)

export const Default = Template.bind({})

Default.args = {
    totalPembayaran: 140000,
    statusTransaksi: 'menunggu pembayaran',
    orderId: 12345,
    urlDetail: '/detail-pesanan/12345'
}