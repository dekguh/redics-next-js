import React from 'react'
import TextTitleSection from '../../atoms/text/TextTitleSection'
import CardTransaksi from '../../molecules/card/CardTransaksi'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import FormSelect from '../../molecules/FormGroup/FormSelect'

const TransaksiSaldo : React.FC = () => {
    return (
    <>
        <div className='flex flex-row flex-nowrap'>
            <div className='bg-green-100 flex-grow-0 flex-shrink w-2/4 mr-2 rounded p-5 text-center'>
                <span className='block mb-1'>saldo</span>
                <span className='block text-xs font-bold'>
                    {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(120000)}
                </span>
            </div>

            <div className='bg-yellow-100 flex-grow-0 flex-shrink w-2/4 ml-2 rounded p-5 text-center'>
                <span className='block mb-1'>ditahan</span>
                <span className='block text-xs font-bold'>
                    {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(420000)}
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
            />

            <FormInput
                inputType={'number'}
                placeholder='nomor rekening'
            />

            <FormButton
                text='update rekening'
                classes='mt-3'
            />
        </div>

        <div className='mt-4'>
            <FormInput
                inputType={'number'}
                placeholder='120000'
            />

            <p className='mt-2'>
                note: minimal pencairan saldo adalah Rp.200,000 dan dikenakan biaya Rp.6,500 untuk setiap penarikan.
            </p>

            <FormButton
                text='tarik saldo'
                classes='mt-3'
            />
        </div>

        <div className='mt-5'>
            <TextTitleSection text='list penarikan' />

            <ul className='list-none mt-4'>
                <li className='mb-3'>
                    <CardTransaksi
                        orderId={12345}
                        statusTransaksi='sedang diproses'
                        totalPembayaran={400000}
                    />
                </li>

                <li className='mb-3'>
                    <CardTransaksi
                        orderId={12345}
                        statusTransaksi='berhasil'
                        totalPembayaran={400000}
                    />
                </li>
            </ul>
        </div>
    </>
    )
}

export default TransaksiSaldo