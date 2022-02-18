import React, { ChangeEvent, useEffect, useState } from 'react'
import { createPencairanSaldo, getListPencairanSaldo, getRekeningUser, getSaldoAccount, updateRekeningUser } from '../../../utils/api'
import TextTitleSection from '../../atoms/text/TextTitleSection'
import CardTransaksi from '../../molecules/card/CardTransaksi'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import FormSelect from '../../molecules/FormGroup/FormSelect'
import BoxAlert from '../BoxAlert'

const ListTransaksi : React.FC<{
    listData: any;
}> = ({ listData }) => {
    return(
        <div className='mt-5'>
            <TextTitleSection text='list penarikan' />

            <ul className='list-none mt-4'>
                {listData && listData.map((data : any, i : any) => (
                    <li className='mb-3' key={i}>
                        <CardTransaksi
                            orderId={data.id}
                            statusTransaksi={data.status.replace('_', ' ')}
                            totalPembayaran={data.totalPenarikan - data.totalBiaya}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

const TransaksiSaldo : React.FC = () => {
    const [dataSaldo, setDataSaldo] = useState<any>()
    const [isLoadingproses, setisLoadingProses] = useState<boolean>(false)
    const [dataRekening, setDataRekening] = useState<any>({
        namaBank: '',
        nomorRekening: ''
    })
    const [updateRekening, setUpdateRekening] = useState<any>({
        namaBank: '',
        nomorRekening: ''
    })
    const [listPencairan, setListPencairan] = useState<any>()
    const [message, setMessage] = useState<string>('')

    const getSaldo = async () => {
        const res = await getSaldoAccount()
        setDataSaldo(res)
    }

    const getRekeningData = async () => {
        const res = await getRekeningUser()
        setDataRekening(res)
    }

    const updateRekeningData = async () => {
        setisLoadingProses(true)
        const res = await updateRekeningUser(updateRekening.namaBank, updateRekening.nomorRekening)
        getRekeningData()
        setisLoadingProses(false)
    }

    const getListPencairan = async () => {
        const res = await getListPencairanSaldo()
        setListPencairan(res)
    }

    const buatPencairanSaldo = async (data : any) => {
        const res = await createPencairanSaldo(data)
        if(res.message) return setMessage(res.message)
        getListPencairan()
        getSaldo()
        return setMessage('')
    }

    useEffect(() => {
        getSaldo()
        getRekeningData()
        getListPencairan()
    }, [])

    useEffect(() => {
        setUpdateRekening({
            namaBank: dataRekening.namaBank,
            nomorRekening: dataRekening.nomorRekening
        })
    }, [dataRekening])
    return (
    <>
        <div className='flex flex-row flex-nowrap'>
            <div className='bg-green-100 flex-grow-0 flex-shrink w-2/4 mr-2 rounded p-5 text-center'>
                <span className='block mb-1'>saldo</span>
                <span className='block text-xs font-bold'>
                    {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(dataSaldo ? dataSaldo.totalReady : 0)}
                </span>
            </div>

            <div className='bg-yellow-100 flex-grow-0 flex-shrink w-2/4 ml-2 rounded p-5 text-center'>
                <span className='block mb-1'>ditahan</span>
                <span className='block text-xs font-bold'>
                    {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(dataSaldo ? dataSaldo.totalPending : 0)}
                </span>
            </div>
        </div>

        <div className='mt-4'>
            <FormSelect
                classes='mb-3'
                list={[
                    {
                        text: 'BCA',
                        value: 'BCA'
                    },
                    {
                        text: 'Mandiri',
                        value: 'mandiri'
                    }
                ]}
                isSelected={updateRekening.namaBank}
                onChange={(e : ChangeEvent<HTMLSelectElement>) => {
                    setUpdateRekening({
                        ...updateRekening,
                        namaBank: e.target.value
                    })
                }}
                defaultVal={{
                    text: 'pilih rekening',
                    value: ''
                }}
            />

            <FormInput
                placeholder='nomor rekening'
                defaultValue={dataRekening ? dataRekening.nomorRekening : ''}
                onChange={(e : ChangeEvent<HTMLInputElement>) => {
                    setUpdateRekening({
                        ...updateRekening,
                        nomorRekening: e.target.value
                    })
                }}
            />

            <FormButton
                text={isLoadingproses ? 'proses...' : 'update rekening'}
                classes='mt-3'
                onClick={() => {
                    updateRekeningData()
                }}
            />
        </div>

        <div className='mt-4 border-t border-gray-300'>
            {message && (<BoxAlert
                classes='mt-3'
                text={message}
            />)}

            <p className='mt-2'>
                note: minimal pencairan saldo adalah Rp.200,000 dan dikenakan biaya Rp.7,000 untuk setiap penarikan.
            </p>

            <FormButton
                text={`tarik ${Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format((dataSaldo && dataSaldo.totalReady) ? dataSaldo.totalReady - 7000 : 0)}`}
                classes='mt-3'
                onClick={() => {
                    buatPencairanSaldo({
                        totalPenarikan: dataSaldo.totalReady - 7000,
                        atasNama: dataRekening.atasNama,
                        namaBank: dataRekening.namaBank,
                        nomorRekening: dataRekening.nomorRekening,
                        status: 'sedang_diproses',
                        totalBiaya: 7000
                    })
                }}
            />
        </div>

        <ListTransaksi
            listData={listPencairan}
        />
    </>
    )
}

export default TransaksiSaldo
