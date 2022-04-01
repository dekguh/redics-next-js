import React, { ChangeEvent, ChangeEventHandler, MouseEventHandler, useState } from 'react'
import { createLaporanPesanan } from '../../../utils/api'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import FormTextarea from '../../molecules/FormGroup/FormTextarea'
import BoxAlert from '../BoxAlert'

const FormLaporan : React.FC<{
  onChangeJudul?: ChangeEventHandler;
  onChangePermasalahan?: ChangeEventHandler;
  onClickKirim?: MouseEventHandler;
  onClickKembali?: MouseEventHandler;
}> = ({ onChangeJudul, onChangePermasalahan, onClickKembali, onClickKirim }) => {
    return(
        <div className='bg-black-transparent-0.7 fixed top-0 left-0 right-0 bottom-0 z-50 p-8'>
          <div className='w-64 bg-white p-4 rounded-lg mt-20 mx-auto'>
            <FormInput label='judul' placeholder='judul' onChange={onChangeJudul}/>

            <div className='my-3'></div>

            <FormTextarea label='permasalahan' placeholder='permasalahan' onChange={onChangePermasalahan}/>

            <div className='my-3'></div>

            <FormButton text='kirim' onClick={onClickKirim}/>

            <div className='my-2'></div>

            <FormButton text='kembali' onClick={onClickKembali}/>
          </div>
        </div>
    )
}

const LaporkanTransaksi : React.FC<{
  emailPelapor?: string;
  emailTerlapor?: string;
  usernamePelapor?: string;
  usernameTerlapor?: string;
  transaksiId?: number | string;
}> = ({
  emailPelapor,
  emailTerlapor,
  usernamePelapor,
  usernameTerlapor,
  transaksiId
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [dataLaporan, setDataLaporan] = useState({
    judul: '',
    permasalahan: ''
  })

  const [message, setMessage] = useState('')

  const handleCreateLaporan = () => {
    const create = async () => {
      const response = await createLaporanPesanan({
        emailPelapor,
        emailTerlapor,
        usernamePelapor,
        usernameTerlapor,
        transaksiId,
        judul: `[${transaksiId}] ${dataLaporan.judul}`,
        permasalahan: `
          pesanan ID: ${transaksiId}<br />
          email Pelapor: ${emailPelapor}<br />
          email Terlapor: ${emailTerlapor}<br />
          permasalahan: ${dataLaporan.permasalahan}
        `
      })

      setMessage(response && response.message)
      setIsOpen(false)
    }

    create()
  }

  return (
  <>
    {isOpen && (<FormLaporan
      onClickKembali={() => setIsOpen(false)}
      onChangeJudul={(e : ChangeEvent<HTMLInputElement>) => setDataLaporan({ ...dataLaporan, judul: e.target.value })}
      onChangePermasalahan={(e : ChangeEvent<HTMLInputElement>) => setDataLaporan({ ...dataLaporan, permasalahan: e.target.value })}
      onClickKirim={handleCreateLaporan}
    />)}

    <div className='relative'>
      {message.length >= 1 && (
        <BoxAlert type='information' text={message} classes='mb-4'/>
      )}

      <p className='text-gray-500'>
        mengalami masalah saat transaksi? anda dapat membuat laporan kepada kami <a href="#" className='text-blue-500' onClick={() => setIsOpen(true)}>disini</a>
      </p>
    </div>
  </>
  )
}

export default LaporkanTransaksi