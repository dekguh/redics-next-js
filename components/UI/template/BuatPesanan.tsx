import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import FormBuatPesanan from '../organisms/FormBuatPesanan'
import PrivateWrapper from '../../utils/wrapper/PrivateWrapper'
import { useSelector } from 'react-redux'
import { RootState } from '../../utils/redux/store'
import { apiGetSingleIklanNoJwt } from '../../utils/api'

const BuatPesanan : React.FC = () => {
    const Router = useRouter()
    const pesananIklanId = useSelector((state : RootState) => state.pesanan.pesananIklanId)
    const billingPenyewa = useSelector((state : RootState) => state.users.billing)
    const [dataSingleIklan, setDataSingleIklan] = useState<any>()

    const getSingleDataIklan = async (id : number) => {
        const response = await apiGetSingleIklanNoJwt(id)
        setDataSingleIklan(response)
    }

    useEffect(() => {
        if(pesananIklanId == undefined) Router.push('/')
        if(pesananIklanId) {
            getSingleDataIklan(pesananIklanId)
        }
    }, [])

    return (
        <>
            <Head>
                <title>Redics - Buat Pesanan</title>
            </Head>

            <PrivateWrapper lastCurrentPage={Router.asPath}>
                <div className='pb-16'>
                    <FormBuatPesanan
                        dataSingleIklan={dataSingleIklan}
                        billingPenyewa={billingPenyewa}
                        pesananIklanId={pesananIklanId}
                    />
                </div>
            </PrivateWrapper>
        </>
    )
}

export default BuatPesanan
