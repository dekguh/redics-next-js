import React, { ChangeEvent, useState, useEffect } from 'react'
import { apigetBookedDateIklan, apiGetOwnIklanBilling } from '../../../utils/api'
import CardBillingPesanan from '../../molecules/card/CardBillingPesanan'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormSelectDate from '../../molecules/FormGroup/FormSelectDate'
import FormSelectKurir from '../../molecules/FormGroup/FormSelectKurir'
import HeadingButtonBack from '../../molecules/heading/HeadingButtonback'
import ListTotalPembayaranPesanan from '../../molecules/list/ListTotalPembayaranPesanan'
import CalendarBooked from '../../molecules/other/CalendarBooked'

const FormBuatPesanan : React.FC<{
    dataSingleIklan?: any;
    billingPenyewa?: any;
    pesananIklanId?: any;
}> = ({ dataSingleIklan, billingPenyewa, pesananIklanId }) => {
    const [billingPemilik, setBillingPemilik] = useState<any>()
    const [listBookedDate, setListBookedDate] = useState<any>()

    const getOwnIklanBilling = async (id : number) => {
        const response = await apiGetOwnIklanBilling(id)
        setBillingPemilik(response)
    }

    const getBookedDate = async (id : number) => {
        const response : any = await apigetBookedDateIklan(id)
        const getDateOnly = response.map((data : any) => new Date(`${data.mulai}T00:00:00.000Z`))
        setListBookedDate(getDateOnly)
    }

    useEffect(() => {
        dataSingleIklan && getOwnIklanBilling(dataSingleIklan.user.id)
        dataSingleIklan && getBookedDate(pesananIklanId)
    }, [dataSingleIklan])

    return (
        <div className='p-4'>
            <HeadingButtonBack
                toPath='/'
            />

            <CardBillingPesanan
                billingPenyewa={billingPenyewa}
                billingPemilik={billingPemilik}
            />

            <div className='border-t border-gray-300 my-5'></div>

            <div className='mb-3'>
                <CalendarBooked
                    dateBooked={listBookedDate}
                />
            </div>

            <FormSelectDate
                onChangeMulai={(e : ChangeEvent<HTMLInputElement>) => {
                    console.log(e.target.value) // example result: 2022-01-21
                }}
                onChangeAkhir={(e : ChangeEvent<HTMLInputElement>) => {
                    console.log(e.target.value) // example result: 2022-01-21
                }}
            />

            <div className='border-t border-gray-300 my-5'></div>

            <FormSelectKurir
                billingPemilik={billingPemilik}
                billingPenyewa={billingPenyewa}
            />

            <div className='border-t border-gray-300 my-5'></div>

            <ListTotalPembayaranPesanan />

            <div className='border-t border-gray-300 my-5'></div>

            <FormButton text='buat pesanan'/>
        </div>
    )
}

export default FormBuatPesanan
