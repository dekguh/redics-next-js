import React, { useEffect } from 'react'
import Head from 'next/head'
import PrivateWrapper from '../../utils/wrapper/PrivateWrapper'
import { useRouter } from 'next/router'
import { IDetailTransaksiPemilik } from '../../utils/types'
import CardDetailPemilik from '../organisms/CardDetailPemilik'
import HeadingButtonBack from '../molecules/heading/HeadingButtonback'
import CardDetailPenyewa from '../organisms/CardDetailPenyewa'

const DetailTransaksiPenyewa : React.FC<IDetailTransaksiPemilik> = ({ orderId }) => {
    const Router = useRouter()
    console.log(orderId)

    useEffect(() => {
        if(orderId === undefined) Router.push('/transaksi')
    }, [])
    return (
        <>
            <Head>
                <title>Redics - Transaksi Penyewa</title>
            </Head>

            <PrivateWrapper lastCurrentPage='/transaksi'>
                <div className='px-5 pt-5 pb-16'>
                    <HeadingButtonBack toPath='/transaksi'/>
                    <CardDetailPenyewa />
                </div>
            </PrivateWrapper>
        </>
    )
}

export default DetailTransaksiPenyewa