import React from 'react'
import TextTitleSection from '../../atoms/text/TextTitleSection'

const CardBillingPesanan : React.FC<{
    billingPenyewa?: any;
    billingPemilik?: any;
}> = ({ billingPenyewa, billingPemilik }) => {
    console.log(billingPemilik)
    return (
        <div className='mt-4'>
            <TextTitleSection text='billing Penyewa'/>
            {billingPenyewa && (<p className='mt-3'>
            {billingPenyewa.nama}, {billingPenyewa.alamat}, {billingPenyewa.kecamatan}, {billingPenyewa.kabupaten}, {billingPenyewa.provinsi}, {billingPenyewa.phone}
            </p>)}

            <div className='mt-4'></div>

            <TextTitleSection text='billing pemilik'/>
            {billingPemilik && (<p className='mt-3'>
            {billingPemilik.nama}, {billingPemilik.alamat}, {billingPemilik.kecamatan}, {billingPemilik.kabupaten}, {billingPemilik.provinsi}, {billingPemilik.phone}
            </p>)}
        </div>
    )
}

export default CardBillingPesanan
