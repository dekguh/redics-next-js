import React, { useEffect } from 'react'
import Head from 'next/head'
import PrivateWrapper from '../../utils/wrapper/PrivateWrapper'
import { useRouter } from 'next/router'
import { IDetailTransaksiPemilik } from '../../utils/types'
import CardDetailPemilik from '../organisms/CardDetailPemilik'
import HeadingButtonBack from '../molecules/heading/HeadingButtonback'

const DetailTransaksiPemilik : React.FC<IDetailTransaksiPemilik> = ({ orderId }) => {
    const Router = useRouter()
    console.log(orderId)

    useEffect(() => {
        if(orderId === undefined) Router.push('/transaksi')
    }, [])
    return (
        <>
            <Head>
                <title>Redics - Transaksi Pemilik</title>
            </Head>

            <PrivateWrapper lastCurrentPage='/transaksi'>
                <div className='px-5 pt-5 pb-16'>
                    <HeadingButtonBack toPath='/transaksi'/>
                    <CardDetailPemilik orderId={orderId}/>
                </div>
            </PrivateWrapper>
        </>
    )
}

export default DetailTransaksiPemilik
