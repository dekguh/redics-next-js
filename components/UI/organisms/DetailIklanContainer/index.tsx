import React, { MouseEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../../utils/redux/store'
import { IDetailIklanContainer } from '../../../utils/types'
import CardOwnerIklan from '../../molecules/card/CardOwnerIklan'
import HeadingButtonBack from '../../molecules/heading/HeadingButtonback'
import ListPricing from '../../molecules/list/ListPricing'
import Link from 'next/link'
import { apiCreateMessage } from '../../../utils/api'
import { useRouter } from 'next/router'
import FormButton from '../../molecules/FormGroup/FormButton'
import { updatePesananIklanIdAct } from '../../../utils/redux/pesanan/action'

const mapState = (state : RootState) => ({
    isLogin: state.users.isLogin,
})

const mapDispatch = {
    actUpdatePesananIklanId: (id: number | null) => (updatePesananIklanIdAct(id))
}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const DetailIklanContainer : React.FC<IDetailIklanContainer & PropsFromRedux> = ({ isLogin, dataSingleIklan, actUpdatePesananIklanId }) => {
    const Router = useRouter()

    const handleClickMessage = (e: MouseEvent) => {
        const createMsg = async () => {
            const res : any = await apiCreateMessage(localStorage.getItem('jwt'), dataSingleIklan?.user?.id)
            if(res) return Router.push(`/pesan/${res.id}`)
        }
        createMsg()
    }

    return (
        <div>
            <HeadingButtonBack toPath='/pencarian' />

            <div className='mt-3 pb-3 border-b border-gray-200'>
                <img src={dataSingleIklan ? dataSingleIklan?.thumbnail?.url : '/nocontentyet.jpg'} className='w-full h-36 rounded object-cover' alt="detail" />
                <h2 className='font-bold text-lg mt-3'>{dataSingleIklan?.judul}</h2>

                <ul className='flex flex-row flex-wrap'>
                    <li className='mr-3'>
                        <span className='text-xs'>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(dataSingleIklan?.pricePerDay * 30)}/bulan</span>
                    </li>

                    <li>
                       <span className='text-xs'>{dataSingleIklan?.kecamatan}, {dataSingleIklan?.kabupaten}, {dataSingleIklan?.provinsi}</span>
                    </li>
                </ul>
            </div>

            <div className='mt-3'>
                <p>
                    {dataSingleIklan?.deskripsi}
                </p>

                <ListPricing
                    pricePerDay={dataSingleIklan?.pricePerDay}
                    classes='mt-3'
                />
            </div>

            {isLogin ? (
            <>
                <div className='mt-3'>
                    <CardOwnerIklan
                        userId={dataSingleIklan?.user?.id}
                        onClick={handleClickMessage}
                    />
                </div>

                <div className='mt-4'>
                    <FormButton
                        classes='block'
                        text='pesan sekarang'
                        onClick={() => {
                            actUpdatePesananIklanId(dataSingleIklan?.id)
                            Router.push('/buat-pesanan')
                        }}
                    />
                </div>
            </>
            )
            : (
                <p className='mt-4 py-2 px-3 bg-gray-100 rounded'>
                    silahkan <Link href='/login'><a className='text-blue-500 font-bold'>login</a></Link> untuk bisa menghubungi pemilik iklan
                </p>
            )}
        </div>
    )
}

export default connector(DetailIklanContainer)
