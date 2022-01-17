import { useRouter } from 'next/router'
import React from 'react'
import Head from 'next/head'
import FormBuatPesanan from '../organisms/FormBuatPesanan'
import PrivateWrapper from '../../utils/wrapper/PrivateWrapper'

const BuatPesanan : React.FC = () => {
    const Router = useRouter()

    return (
        <>
            <Head>
                <title>Redics - Buat Pesanan</title>
            </Head>

            <PrivateWrapper lastCurrentPage={Router.asPath}>
                <div className='pb-16'>
                    <FormBuatPesanan />
                </div>
            </PrivateWrapper>
        </>
    )
}

export default BuatPesanan
