import React from 'react'
import TextTitleSection from '../../atoms/text/TextTitleSection'
import CardBillingPesanan from '../../molecules/card/CardBillingPesanan'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import ListTotalPembayaranPesanan from '../../molecules/list/ListTotalPembayaranPesanan'
import CustomCountdown from '../../molecules/other/CustomCountdown'

const MenungguPembayaranPenyewa : React.FC = () => {
    return(
        <div>
            <div className='mb-3'>
                <CustomCountdown />
            </div>
            <FormButton text='bayar sekarang' classes='mb-3'/>
            <FormButton text='batalkan pesanan' classes='mb-3'/>
        </div>
    )
}

const FormInputResiPengembalian : React.FC = () => {
    return(
        <div>
            <FormInput placeholder='masukan resi' classes='mb-3' />
            <FormButton text='update resi' />
        </div>
    )
}

const MenungguDikirim : React.FC = () => {
    return(
        <div>
            <TextTitleSection text='Pengiriman'/>

            <div className='border border-gray-200 rounded flex flex-row flex-nowrap items-center p-2 mt-3'>
                <span className='flex-grow flex-shrink pr-5 text-lg'>TRX12345667890</span>
                <div>
                    <FormButton text='copy' onClick={() => {
                        navigator.clipboard.writeText('TRX12345667890')
                    }}/>
                </div>
            </div>

            <div className='mt-4'>
                <FormButton text='barang sampai'/>
            </div>
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

const CardDetailPenyewa : React.FC = () => {
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
                <MenungguPembayaranPenyewa />
            </div>

            <div className='border-t border-gray-300 my-5'></div>

            <div>
                <MenungguDikirim />
            </div>

            <div className='border-t border-gray-300 my-5'></div>

            <div>
                <TanggalMulaiAhir
                    mulai='22'
                    akhir='23'
                />
            </div>

            <div className='border-t border-gray-300 my-5'></div>

            <div>
                <FormInputResiPengembalian />
            </div>
        </div>
    )
}

export default CardDetailPenyewa