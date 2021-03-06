import { useRouter } from 'next/router'
import React, { ChangeEvent, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { apiGetBillingUser, apigetBookedDateIklan, apiGetOwnIklanBilling, checkDateHadBooked, checkExpiredPesananByIklanid, createPesananByUser } from '../../../utils/api'
import { RootState } from '../../../utils/redux/store'
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
    pesananIklanId?: any;
}> = ({ dataSingleIklan, pesananIklanId }) => {
    const [billingPenyewa, setBillingPenyewa] = useState<any>()
    const Router = useRouter()
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
    const [isLoadingBuat, setIsLoadingBuat] = useState<boolean>(false)


    const getOwnIklanBilling = async (id : number) => {
        const response = await apiGetOwnIklanBilling(id)
        setBillingPemilik(response)
    }

    const getBookedDate = async (id : number) => {
        const checkExpiredPesanan = await checkExpiredPesananByIklanid(pesananIklanId)
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
        setMessageTanggal(response)
    }

    const createPesanan = async (data : any) => {
        setIsLoadingBuat(true)
        const response = await createPesananByUser(data)
        setIsLoadingBuat(false)
        Router.push(`/detail-transaksi-penyewa/${response.id}`)
    }

    const handleBuatPesanan = () => {
        createPesanan(dataPesanan)
    }

    const getBillingUserId = async () => {
        const response = await apiGetBillingUser(localStorage.getItem('jwt'))
        setBillingPenyewa(response)
        console.log(response)
    }

    useEffect(() => {
        dataSingleIklan && getOwnIklanBilling(dataSingleIklan.user.id)
        dataSingleIklan && getBookedDate(pesananIklanId)
        dataSingleIklan && getBillingUserId()
    }, [dataSingleIklan])

    useEffect(() => {
        setDataPesanan(({
            ...dataPesanan,
            iklan: dataSingleIklan && dataSingleIklan.id, // id
            userPemilik: dataSingleIklan && dataSingleIklan.user.id, // id
            billingPemilik: billingPemilik && billingPemilik.id, // id
            hargaPerHari: dataSingleIklan && Number(dataSingleIklan.pricePerDay),
        }))
    }, [dataSingleIklan, billingPemilik])

    useEffect(() => {
        setDataPesanan(({
            ...dataPesanan,
            userPenyewa: billingPenyewa && billingPenyewa.user.id, // id
            billingPenyewa: billingPenyewa && billingPenyewa.id, // id
        }))
    }, [billingPenyewa])

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

    console.log('data pesanan', dataPesanan)
    console.log("billing penyewa", billingPenyewa)
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
                    setDataPesanan({
                        ...dataPesanan,
                        tanggalMulai: e.target.value
                    })
                }}
                onChangeAkhir={(e : ChangeEvent<HTMLInputElement>) => {
                    setTanggalAkhir(e.target.value) // example result: 2022-01-21
                    setDataPesanan({
                        ...dataPesanan,
                        tanggalAkhir: e.target.value
                    })
                }}
            />

            <p className='mt-2 text-xs text-gray-700'>catatan: pilih tanggal yang sesuai karena pengiriman barang membutuhkan waktu beberapa hari.</p>

            <div className='border-t border-gray-300 my-5'></div>

            <FormSelectKurir
                billingPemilik={billingPemilik}
                billingPenyewa={billingPenyewa}
                dataSingleIklan={dataSingleIklan}
                onChangeLayanan={(e : ChangeEvent<HTMLSelectElement>) => {
                    const splitValue = e.target.value.split(' ')
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

            {(dataPesanan.tanggalMulai && dataPesanan.tanggalAkhir && dataPesanan.hargaKurir)
            ? (
                <FormButton text={isLoadingBuat ? 'proses...' : 'buat pesanan'} onClick={handleBuatPesanan}/>
            )
            : (
                <BoxAlert
                    text='isi semua form untuk membuat pesanan'
                    type='danger'
                />
            )}
        </div>
    )
}

export default FormBuatPesanan
