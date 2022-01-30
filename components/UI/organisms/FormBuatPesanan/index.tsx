import React, { ChangeEvent, useState, useEffect } from 'react'
import { apigetBookedDateIklan, apiGetOwnIklanBilling, checkDateHadBooked } from '../../../utils/api'
import CardBillingPesanan from '../../molecules/card/CardBillingPesanan'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormSelectDate from '../../molecules/FormGroup/FormSelectDate'
import FormSelectKurir from '../../molecules/FormGroup/FormSelectKurir'
import HeadingButtonBack from '../../molecules/heading/HeadingButtonback'
import ListTotalPembayaranPesanan from '../../molecules/list/ListTotalPembayaranPesanan'
import CalendarBooked from '../../molecules/other/CalendarBooked'
import BoxAlert from '../BoxAlert'

const FormBuatPesanan : React.FC<{
    dataSingleIklan?: any;
    billingPenyewa?: any;
    pesananIklanId?: any;
}> = ({ dataSingleIklan, billingPenyewa, pesananIklanId }) => {
    const [billingPemilik, setBillingPemilik] = useState<any>()
    const [listBookedDate, setListBookedDate] = useState<any>()
    const [tanggalMulai, setTanggalMulai] = useState<string | null>(null)
    const [tanggalAkhir, setTanggalAkhir] = useState<string | null>(null)
    const [messageTanggal, setMessageTanggal] = useState<any>({
        message: '',
        status: false
    })
    const [dataPesanan, setDataPesanan] = useState<any>({
        iklan: null, // id
        kurir: '-',
        resiKirim: null,
        resiPengembalian: null,
        statusPemesanan: 'menunggu pembayaran',
        hargaPerHari: 0,
        hargaTotalDurasi: 0,
        hargaKurir: 0,
        totalDenda: 0,
        userPenyewa: null, // id
        userPemilik: null, // id
        billingPenyewa: null, // id
        billingPemilik: null, // id
        tanggalMulai: '',
        tanggalAkhir: ''
    })
    const [totalHari, setTotalhari] = useState<number>(0)

    console.log(dataPesanan)

    useEffect(() => {
        setDataPesanan(({
            ...dataPesanan,
            iklan: dataSingleIklan && dataSingleIklan.id, // id
            userPenyewa: billingPenyewa.user.id, // id
            userPemilik: dataSingleIklan && dataSingleIklan.user.id, // id
            billingPenyewa: billingPenyewa.id, // id
            billingPemilik: billingPemilik && billingPemilik.id, // id
            hargaPerHari: dataSingleIklan && Number(dataSingleIklan.pricePerDay),
        }))
    }, [dataSingleIklan, billingPemilik])

    const getOwnIklanBilling = async (id : number) => {
        const response = await apiGetOwnIklanBilling(id)
        setBillingPemilik(response)
    }

    const getBookedDate = async (id : number) => {
        const response : any = await apigetBookedDateIklan(id)
        const getDateOnly = response.map((data : any) => new Date(`${data.mulai}T00:00:00.000Z`))
        setListBookedDate(getDateOnly)
    }

    const checkDateIsBooked = async (
        mulai: string,
        akhir: string
    ) => { /// diubah yang kedua tidak work (bug)
        const response = await checkDateHadBooked(
            mulai,
            akhir,
            pesananIklanId
        )
        console.log(response)
        setMessageTanggal(response)
    }

    useEffect(() => {
        dataSingleIklan && getOwnIklanBilling(dataSingleIklan.user.id)
        dataSingleIklan && getBookedDate(pesananIklanId)
    }, [dataSingleIklan])

    useEffect(() => {
        (tanggalMulai && tanggalAkhir) && checkDateIsBooked(
            tanggalMulai,
            tanggalAkhir
        )

        if(tanggalMulai && tanggalAkhir) {
            const mulaiStamp = new Date(`${tanggalMulai}T00:00:00.000Z`).getTime()/1000
            const akhirStamp = new Date(`${tanggalAkhir}T00:00:00.000Z`).getTime()/1000

            const total = ((akhirStamp - mulaiStamp) + 86400) / 86400
            setTotalhari(total)
            setDataPesanan({
                ...dataPesanan,
                hargaTotalDurasi: dataSingleIklan.pricePerDay * total
            })
        }
    }, [tanggalMulai, tanggalAkhir])

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

            {(messageTanggal.status == false && messageTanggal.message.length >= 1) && (
                <BoxAlert
                    text={messageTanggal.message}
                    type='danger'
                    classes='my-3'
                />
            )}

            {messageTanggal.status && (
                <BoxAlert
                    text={messageTanggal.message}
                    type='success'
                    classes='my-3'
                />
            )}

            <FormSelectDate
                onChangeMulai={(e : ChangeEvent<HTMLInputElement>) => {
                    setTanggalMulai(e.target.value) // example result: 2022-01-21
                }}
                onChangeAkhir={(e : ChangeEvent<HTMLInputElement>) => {
                    setTanggalAkhir(e.target.value) // example result: 2022-01-21
                }}
            />

            <div className='border-t border-gray-300 my-5'></div>

            <FormSelectKurir
                billingPemilik={billingPemilik}
                billingPenyewa={billingPenyewa}
                dataSingleIklan={dataSingleIklan}
                onChangeLayanan={(e : ChangeEvent<HTMLSelectElement>) => {
                    const splitValue = e.target.value.split(' ')
                    console.log(splitValue[splitValue.length-1])
                    setDataPesanan({
                        ...dataPesanan,
                        kurir: e.target.value,
                        hargaKurir: splitValue[splitValue.length-1]
                    })
                }}
            />

            <div className='border-t border-gray-300 my-5'></div>

            <ListTotalPembayaranPesanan
                namaBarang={dataSingleIklan && dataSingleIklan.judul}
                ongkosKirim={dataPesanan.hargaKurir}
                totalHari={totalHari}
                totalBayar={(dataPesanan.hargaKurir > 0 && dataPesanan.hargaTotalDurasi > 0)
                    ? Number(dataPesanan.hargaKurir) + Number(dataPesanan.hargaTotalDurasi)
                    : 0
                }
                hargaTotalDurasi={dataPesanan.hargaTotalDurasi}
            />

            <div className='border-t border-gray-300 my-5'></div>

            <FormButton text='buat pesanan'/>
        </div>
    )
}

export default FormBuatPesanan
