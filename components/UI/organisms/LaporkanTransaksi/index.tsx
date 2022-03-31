import React, { ChangeEventHandler, MouseEventHandler } from 'react'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import FormTextarea from '../../molecules/FormGroup/FormTextarea'

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
            <FormButton text='kembali' onClick={onClickKembali}/>
          </div>
        </div>
    )
}

const LaporkanTransaksi = () => {
  return (
  <>
    <FormLaporan />

    <div className='relative'>
        <p className='text-gray-500'>
          mengalami masalah saat transaksi? anda dapat membuat laporan kepada kami <a href="#" className='text-blue-500'>disini</a>
        </p> 
    </div>
  </>
  )
}

export default LaporkanTransaksi