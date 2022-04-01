import React, { ChangeEvent, ChangeEventHandler, MouseEventHandler, useEffect, useState } from 'react'
import { batalkanPesananById, buatPembayaran, detailPembayaran, getSingleDataPesananById, updateReferencePayment, updateResiPengembalian, updateStatusPesananByid } from '../../../utils/api'
import TextTitleSection from '../../atoms/text/TextTitleSection'
import CardBillingPesanan from '../../molecules/card/CardBillingPesanan'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import FormSelect from '../../molecules/FormGroup/FormSelect'
import ListTotalPembayaranPesanan from '../../molecules/list/ListTotalPembayaranPesanan'
import CustomCountdown from '../../molecules/other/CustomCountdown'
import BoxAlert from '../BoxAlert'
import LaporkanTransaksi from '../LaporkanTransaksi'

const MenungguPembayaranPenyewa : React.FC<{
    onClickBayar?: MouseEventHandler;
    onClickBatalkan?: MouseEventHandler;
    dateCreated?: any;
    onComplete?: any;
    onChangeListPembayaran?: ChangeEventHandler;
    dataPesanan?: any;
    isLoadingBayar?: boolean;
}> = ({ onClickBayar, onClickBatalkan, dateCreated, onComplete, onChangeListPembayaran, dataPesanan, isLoadingBayar }) => {
    const [dataPembayaran, setDatapembayaran] = useState<any>()

    useEffect(() => {
        const getDetailPembayaran = async () => {
            const response = await detailPembayaran(dataPesanan.payment_reference)
            setDatapembayaran(response.data)
        }

        if(dataPesanan.payment_reference) {
            getDetailPembayaran()
        }
    }, [dataPesanan])

    return(
        <div>
            {dataPesanan && (
            <>
                <div className='mb-3'>
                    <CustomCountdown
                        dateCreated={dateCreated}
                        onComplete={onComplete}
                    />
                </div>
                {!dataPesanan.payment_reference && (
                <>
                    <FormSelect
                        onChange={onChangeListPembayaran}
                        classes='mb-3'
                        list={[
                            {
                                text: 'BRI',
                                value: 'BRIVA'
                            },
                            {
                                text: 'Mandiri',
                                value: 'MANDIRIVA'
                            },
                            {
                                text: 'BCA',
                                value: 'BCAVA'
                            },
                            {
                                text: 'Cimb Niaga',
                                value: 'CIMBVA'
                            },
                            {
                                text: 'Alfamart',
                                value: 'ALFAMART'
                            },
                            {
                                text: 'Indomaret',
                                value: 'INDOMARET'
                            },
                            {
                                text: 'OVO',
                                value: 'OVO'
                            },
                            {
                                text: 'QRIS - Shopee',
                                value: 'QRIS'
                            }
                        ]}
                        defaultVal={{
                            text: 'Pilih Pembayaran',
                            value: '-'
                        }}
                    />
                    <FormButton text={isLoadingBayar ? 'proses...' : 'bayar sekarang'} classes='mb-3' onClick={onClickBayar}/>
                </>
                )}

                {dataPembayaran && (
                <div>
                    <a href={dataPembayaran.checkout_url}>
                        <FormButton text='bayar disini' classes='mb-3'/>
                    </a>
                </div>)}

                <FormButton text='batalkan pesanan' classes='mb-3' onClick={onClickBatalkan}/>
            </>
        )}
        </div>
    )
}

const FormInputResiPengembalian : React.FC<{
    onClickResi?: MouseEventHandler;
    onChangeResi?: ChangeEventHandler;
    isLoading?: boolean;
}> = ({ onClickResi, onChangeResi, isLoading }) => {
    return(
        <div>
            <FormInput placeholder='masukan resi' classes='mb-3' onChange={onChangeResi}/>
            <FormButton text={isLoading ? 'proses...' : 'update resi'} onClick={onClickResi}/>
        </div>
    )
}

const BarangDikirim : React.FC<{
    resi?: string;
    onClickKonfirmasi?: MouseEventHandler;
    isLoading?: boolean;
}> = ({ resi, onClickKonfirmasi, isLoading }) => {
    return(
        <div>
            <TextTitleSection text='Pengiriman'/>

            <div className='border border-gray-200 rounded flex flex-row flex-nowrap items-center p-2 mt-3'>
                <span className='flex-grow flex-shrink pr-5 text-lg'>{resi ? resi : '-'}</span>
                <div>
                    <FormButton text='salin' onClick={() => {
                        navigator.clipboard.writeText(resi ? resi : '')
                    }}/>
                </div>
            </div>

            <div className='mt-4'>
                <FormButton text={isLoading ? 'proses....' : 'barang sampai'} onClick={onClickKonfirmasi}/>
            </div>
        </div>
    )
}

const BarangDikembalikan : React.FC<{
    resi?: string;
}> = ({ resi }) => {
    return(
        <div>
            <TextTitleSection text='Pengembalian'/>

            <div className='border border-gray-200 rounded flex flex-row flex-nowrap items-center p-2 mt-3'>
                <span className='flex-grow flex-shrink pr-5 text-lg'>{resi ? resi : '-'}</span>
                <div>
                    <FormButton text='salin' onClick={() => {
                        navigator.clipboard.writeText(resi ? resi : '')
                    }}/>
                </div>
            </div>


            <BoxAlert
                classes='mt-2'
                text='anda berhasil menginput no resi pengembalian, barang sedang dalam proses.'
            />
        </div>
    )
}

const TanggalMulaiAhir : React.FC<{
    mulai : string;
    akhir: string;
}> = ({ mulai, akhir }) => {
    return (
        <div>
            <div className='flex flex-row flex-nowrap'>
                <div className='flex-grow flex-shrink w-2/4 pr-2'>
                    <TextTitleSection text='mulai'/>
                    <span className='block mt-3'>{mulai}</span>
                </div>

                <div className='flex-grow flex-shrink w-2/4 pl-2'>
                    <TextTitleSection text='akhir'/>
                    <span className='block mt-3'>{akhir}</span>
                </div>
            </div>
        </div>
    )
}

const CardDetailPenyewa : React.FC<{
    orderId?: string | number | string[] }> = ({ orderId }) => {
    const [dataPesanan, setDataPesanan] = useState<any>()
    const [paymentMethod, setPaymentMethod] = useState<any>()
    const [isLoadingBayar, setIsLoadingBayar] = useState<boolean>(false)
    const [inputResiPengembalian, setInputResiPengembalian] = useState<string>()

    const getSingleData = async (id : string | number | string[]) => {
        const response = await getSingleDataPesananById(id)
        setDataPesanan(response)
    }

    const batalkanPesanan = async () => {
        const response = orderId && await batalkanPesananById(orderId)
        setDataPesanan(response)
    }

    useEffect(() => {
        if(orderId) {
            getSingleData(orderId)
        }
    }, [orderId])

    useEffect(() => {
        if(dataPesanan && dataPesanan.statusPemesanan == 'menunggu pembayaran') {
            const datePlus2Hour = (new Date(dataPesanan.created_at).getTime()+7200000)/1000
            const currentTime = Date.now()/1000

            if(datePlus2Hour <= currentTime) { // waktu sekarang melewati waktu pembuat + 2 jam
                batalkanPesanan()
            }
        }
    }, [dataPesanan])
    return (
        <div>
            <div className='flex flex-row flex-nowrap mt-5'>
                <h2 className='border-r border-gray-300 pr-5'>#{dataPesanan ? dataPesanan.id : '-'}</h2>
                <span className='ml-5'>{dataPesanan && dataPesanan.statusPemesanan}</span>
            </div>

            <div className='mb-4'>
                <CardBillingPesanan
                    billingPemilik={dataPesanan && dataPesanan.billingPemilik}
                    billingPenyewa={dataPesanan && dataPesanan.billingPenyewa}
                />
            </div>

            <div className='border-t border-gray-300 my-5'></div>

            <div>
                <TextTitleSection text='kurir'/>
                <p className='mt-3'>{dataPesanan && dataPesanan.kurir}</p>
            </div>

            {(dataPesanan && dataPesanan.tanggalSewa.length >= 1) && (
            <>
                <div className='border-t border-gray-300 my-5'></div>

                <div>
                    <TanggalMulaiAhir
                        mulai={dataPesanan && dataPesanan.tanggalSewa[0].mulai}
                        akhir={dataPesanan && dataPesanan.tanggalSewa[0].akhir}
                    />
                </div>
            </>)}

            <div className='border-t border-gray-300 my-5'></div>

            <div>
                <ListTotalPembayaranPesanan
                    namaBarang={dataPesanan && dataPesanan.iklan.judul}
                    ongkosKirim={dataPesanan && dataPesanan.hargaKurir}
                    totalHari={dataPesanan && dataPesanan.hargaTotalDurasi/dataPesanan.hargaPerHari}
                    totalBayar={dataPesanan && Number(dataPesanan.hargaKurir) + Number(dataPesanan.hargaTotalDurasi)}
                    hargaTotalDurasi={dataPesanan && dataPesanan.hargaTotalDurasi}
                />
            </div>


            {(dataPesanan && dataPesanan.statusPemesanan) == 'menunggu pembayaran' && (
            <>
            <div className='border-t border-gray-300 my-5'></div>

            <div>
                <MenungguPembayaranPenyewa
                    onClickBatalkan={() => {
                        batalkanPesanan()
                    }}
                    dateCreated={dataPesanan && dataPesanan.created_at}
                    onComplete={() => {
                        batalkanPesanan()
                    }}
                    onChangeListPembayaran={(e : ChangeEvent<HTMLSelectElement>) => {
                        setPaymentMethod(e.target.value)
                    }}
                    onClickBayar={() => {
                        setIsLoadingBayar(true)
                        const pembayaran = async () => {
                            const response = await buatPembayaran({
                                method: paymentMethod,
                                merchant_ref: dataPesanan.id,
                                amount: Number(dataPesanan.hargaKurir) + Number(dataPesanan.hargaTotalDurasi),
                                customer_name: dataPesanan.billingPenyewa.nama,
                                customer_email: dataPesanan.userPenyewa.email,
                                customer_phone: dataPesanan.billingPenyewa.phone,
                                order_items: {
                                    sku: '',
                                    name: dataPesanan.iklan.judul,
                                    price: Number(dataPesanan.hargaKurir) + Number(dataPesanan.hargaTotalDurasi),
                                    quantity: '1',
                                    product_url: '',
                                    image_url: ''
                                },
                                return_url: ''
                            })
                            const updateReference = await updateReferencePayment(orderId, response.data.reference)
                            setIsLoadingBayar(true)
                            setDataPesanan(updateReference)
                        }
                        pembayaran()
                    }}
                    dataPesanan={dataPesanan}
                    isLoadingBayar={isLoadingBayar}
                />
            </div>
            </>)}

            {(dataPesanan && dataPesanan.statusPemesanan == 'menunggu dikirim') && (
            <>
                <div className='border-t border-gray-300 my-5'></div>

                <div>
                    <BoxAlert
                        type='information'
                        text='barang sedang disiapkan untuk dikirim segera, mohon ditunggu.'
                    />
                </div>
            </>)}

            {(dataPesanan && dataPesanan.statusPemesanan == 'barang dikirim') && (
            <>
                <div className='border-t border-gray-300 my-5'></div>

                <div>
                    <BarangDikirim
                        resi={dataPesanan.resiKirim}
                        onClickKonfirmasi={() => {
                            const updateKonfirmasiStatus = async () => {
                                setIsLoadingBayar(true)
                                const response = await updateStatusPesananByid(dataPesanan.id, 'telah sampai')
                                setIsLoadingBayar(false)
                                setDataPesanan(response)
                            }
                            updateKonfirmasiStatus()
                        }}
                        isLoading={isLoadingBayar}
                    />
                </div>
            </>)}

            {(dataPesanan && dataPesanan.statusPemesanan == 'telah sampai') && (
            <>
                <div className='border-t border-gray-300 my-5'></div>

                <div>
                    <BoxAlert
                        type='information'
                        text={`barang telah sampai, batas tanggal pengembalian adalah ${new Date(new Date(`${dataPesanan.tanggalSewa[0].akhir}T00:00:00.000Z`).getTime() + (86400000 * 2)).toISOString().substring(0, 10)}`}
                    />
                </div>
            </>)}

            {(dataPesanan && dataPesanan.statusPemesanan == 'menunggu dikembalikan') && (
            <>
                <div className='border-t border-gray-300 my-5'></div>

                <div>
                    <FormInputResiPengembalian
                        onChangeResi={(e : ChangeEvent<HTMLInputElement>) => {
                            setInputResiPengembalian(e.target.value)
                        }}
                        onClickResi={() => {
                            const updateResi = async () => {
                                setIsLoadingBayar(true)
                                const res = await updateResiPengembalian(dataPesanan.id, inputResiPengembalian)
                                setIsLoadingBayar(false)
                                setDataPesanan(res)
                            }
                            updateResi()
                        }}
                        isLoading={isLoadingBayar}
                    />

                    <div className='mt-2'>
                        <BoxAlert
                            type='information'
                            text={`batas tanggal pengembalian adalah ${new Date(new Date(`${dataPesanan.tanggalSewa[0].akhir}T00:00:00.000Z`).getTime() + (86400000 * 2)).toISOString().substring(0, 10)}, kami menyarankan untuk menggunakan ekspedisi yang sama.`}
                        />
                    </div>
                </div>
            </>)}

            {(dataPesanan && dataPesanan.statusPemesanan == 'dikembalikan') && (
            <>
                <div className='border-t border-gray-300 my-5'></div>

                <BarangDikembalikan resi={dataPesanan.resiPengembalian}/>
            </>)}

            {(dataPesanan && dataPesanan.statusPemesanan == 'selesai') && (
            <>
                <div className='border-t border-gray-300 my-5'></div>

                <BoxAlert
                    type='information'
                    text='barang telah dikembalikan dan pesanan telah selesai.'
                />
            </>)}

            {(dataPesanan && dataPesanan.statusPemesanan == 'dibatalkan') && (
            <>
                <div className='border-t border-gray-300 my-5'></div>

                <div>
                    <BoxAlert
                        type='danger'
                        text='pesananan anda sudah dibatalkan'
                    />
                </div>
            </>)}

            <div className='border-t border-gray-300 my-5'></div>

            <LaporkanTransaksi
                emailPelapor={dataPesanan && dataPesanan.userPemilik.email}
                emailTerlapor={dataPesanan && dataPesanan.userPenyewa.email}
                usernamePelapor={dataPesanan && dataPesanan.userPemilik.username}
                usernameTerlapor={dataPesanan && dataPesanan.userPenyewa.username}
                transaksiId={dataPesanan && dataPesanan.id}
            />
        </div>
    )
}

export default CardDetailPenyewa