import React from 'react'
import TextTitleSection from '../../atoms/text/TextTitleSection'
import CardBillingPesanan from '../../molecules/card/CardBillingPesanan'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import FormSelectKurir from '../../molecules/FormGroup/FormSelectKurir'
import ListTotalPembayaranPesanan from '../../molecules/list/ListTotalPembayaranPesanan'

const MenungguPembayaranPemilik : React.FC = () => {
    return(
        <div>
            <FormButton text='batalkan pesanan' classes='mb-3'/>
        </div>
    )
}

const FormInputResiPemilik : React.FC = () => {
    return(
        <div>
            <FormInput placeholder='masukan resi' classes='mb-3' />
            <FormButton text='update resi' />
        </div>
    )
}

const CardDetailPemilik : React.FC = () => {
    return (
        <div>
            <div className='flex flex-row flex-nowrap mt-5'>
                <h2 className='border-r border-gray-300 pr-5'>#12345</h2>
                <span className='ml-5'>menunggu pembayaran</span>
            </div>

            <div className='mb-4'>
                <CardBillingPesanan />
            </div>

            <div className='border-t border-gray-300 my-5'></div>

            <div>
                <TextTitleSection text='kurir'/>
                <p className='mt-3'>JNE - YES</p>
            </div>

            <div className='border-t border-gray-300 my-5'></div>

            <div>
                <ListTotalPembayaranPesanan />
            </div>

            <div className='border-t border-gray-300 my-5'></div>

            <div>
                <MenungguPembayaranPemilik />
            </div>

            <div className='border-t border-gray-300 my-5'></div>

            <div>
                <FormInputResiPemilik />
            </div>
        </div>
    )
}

export default CardDetailPemilik
