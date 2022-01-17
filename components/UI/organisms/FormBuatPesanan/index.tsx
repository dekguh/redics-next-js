import React from 'react'
import Input from '../../atoms/control/Input'
import TextTitleSection from '../../atoms/text/TextTitleSection'
import CardBillingPesanan from '../../molecules/card/CardBillingPesanan'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormSelect from '../../molecules/FormGroup/FormSelect'
import FormSelectDate from '../../molecules/FormGroup/FormSelectDate'
import FormSelectKurir from '../../molecules/FormGroup/FormSelectKurir'
import { HeadingBackButton } from '../../molecules/heading/HeadingButtonBack.stories'
import ListTotalPembayaranPesanan from '../../molecules/list/ListTotalPembayaranPesanan'

const FormBuatPesanan = () => {
    return (
        <div className='p-4'>
            <HeadingBackButton
                toPath='/'
            />

            <CardBillingPesanan />

            <div className='border-t border-gray-300 my-5'></div>

            <FormSelectDate />

            <div className='border-t border-gray-300 my-5'></div>

            <FormSelectKurir />

            <div className='border-t border-gray-300 my-5'></div>

            <ListTotalPembayaranPesanan />

            <div className='border-t border-gray-300 my-5'></div>

            <FormButton text='buat pesanan'/>
        </div>
    )
}

export default FormBuatPesanan
