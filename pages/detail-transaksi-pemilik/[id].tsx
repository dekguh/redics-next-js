import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import DetailTransaksiPemilik from '../../components/UI/template/DetailTransaksiPemilik'

const DetailTransaksiPemilikPage : NextPage = () => {
    const Router = useRouter()

    return (
        <DetailTransaksiPemilik
            orderId={Router.query.id ? Router.query.id : 0}
        />
    )
}

export default DetailTransaksiPemilikPage
