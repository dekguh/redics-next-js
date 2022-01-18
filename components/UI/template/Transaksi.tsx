import React, { ChangeEvent, useState } from 'react'
import Head from 'next/head'
import PrivateWrapper from '../../utils/wrapper/PrivateWrapper'
import { useRouter } from 'next/router'
import TextTitleSection from '../atoms/text/TextTitleSection'
import FormSelect from '../molecules/FormGroup/FormSelect'
import TransaksiSaldo from '../organisms/TransaksiSaldo'
import TransaksiPenyewa from '../organisms/TransaksiPenyewa'
import TransaksiPemilik from '../organisms/TransaksiPemilik'

const Transaksi : React.FC = () => {
    const Router = useRouter()
    const [currentPage, setCurrentPage] = useState<string>('transaksi-penyewa')

    return (
        <>
            <Head>
                <title>Redics - Buat Pesanan</title>
            </Head>

            <PrivateWrapper lastCurrentPage={Router.asPath}>
                <div className='px-5 pt-5 pb-16'>
                    <TextTitleSection text='Transaksi'/>

                    <div className='mt-4 mb-4'>
                        <FormSelect
                            list={[
                                {
                                    text: 'transaksi penyewa',
                                    value: 'transaksi-penyewa'
                                },
                                {
                                    text: 'transaksi pemilik',
                                    value: 'transaksi-pemilik'
                                },
                                {
                                    text: 'saldo',
                                    value: 'saldo'
                                },
                            ]}
                            onChange={(e : ChangeEvent<HTMLSelectElement>) => setCurrentPage(e.target.value)}
                        />
                    </div>

                    <div>
                        {currentPage === 'saldo' && (
                            <TransaksiSaldo />
                        )}
                        {currentPage === 'transaksi-penyewa' && (
                            <TransaksiPenyewa />
                        )}
                        {currentPage === 'transaksi-pemilik' && (
                            <TransaksiPemilik />
                        )}
                    </div>
                </div>
            </PrivateWrapper>
        </>
    )
}

export default Transaksi
