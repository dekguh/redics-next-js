import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import DetailTransaksiPenyewa from '../../components/UI/template/DetailTransaksiPenyewa'

const DetailTransaksiPenyewaPage : NextPage = () => {
    const Router = useRouter()

    return (
        <DetailTransaksiPenyewa
            orderId={Router.query.id ? Router.query.id : 0}
        />
    )
}

export default DetailTransaksiPenyewaPage
