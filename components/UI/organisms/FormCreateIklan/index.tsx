import React, { ChangeEvent, useState } from 'react'
import { dataListKabupaten, dataListKecamatan, dataListProvinsi } from '../../../utils/data'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import FormSelect from '../../molecules/FormGroup/FormSelect'
import FormTextarea from '../../molecules/FormGroup/FormTextarea'
import HeadingButtonBack from '../../molecules/heading/HeadingButtonback'

const FormCreateIklan : React.FC = () => {
    const [provinsi, setProvinsi] = useState<number | string>('bali')
    const [kabupaten, setKabupaten] = useState<number | string>('badung')

    return (
        <div className='p-4'>
            <HeadingButtonBack toPath='/iklan-saya' classes='mb-3' />

            <div>
                <FormInput
                    label='Judul'
                    placeholder='ex: Kursi Roda Aluminium'
                    classes='mb-3'
                />

                <div className='flex flex-row flex-nowrap mb-3'>
                    <FormSelect
                        classes='flex-grow-0 flex-shrink w-6/12 pr-1'
                        label='Provinsi'
                        list={dataListProvinsi.map(data => ({ value: data.name.toLowerCase(), text: data.name }))}
                        onChange={(e : ChangeEvent<HTMLInputElement>) => {
                            setProvinsi(e.target.value)
                        }}
                        defaultVal={{ text: 'pilih provinsi' }}
                    />

                    <FormSelect
                        classes='flex-grow-0 flex-shrink w-6/12 pl-1'
                        label='Kabupaten'
                        list={dataListKabupaten.filter(data => data.provinsiId.toLowerCase() == provinsi)
                            .map(data => ({ value: data.name, text: data.name }))
                        }
                        defaultVal={{ text: 'pilih kabupaten' }}
                        onChange={(e : ChangeEvent<HTMLInputElement>) => {
                            setKabupaten(e.target.value)
                        }}
                    />
                </div>

                <FormSelect
                    label='Kecamatan'
                    classes='mb-3'
                    list={dataListKecamatan.filter(data => data.kabupatenId == kabupaten)
                        .map(data => ({ value: data.name.toLowerCase(), text: data.name }))
                    }
                    defaultVal={{ text: 'pilih kecamatan' }}
                    onChange={(e : ChangeEvent<HTMLInputElement>) => false}
                />

                <FormInput
                    label='Harga (per-hari)'
                    placeholder='ex: 5000'
                    classes='mb-3'
                    inputType='number'
                />

                <FormInput
                    label='Thumbnail (jpeg, jpg, png)'
                    classes='mb-3'
                    inputType='file'
                />

                <FormTextarea
                    label='Deskipsi'
                    placeholder='deskripsi iklan'
                    classes='mb-3'
                />

                <FormButton text='buat iklan' type='button' />
            </div>
        </div>
    )
}

export default FormCreateIklan
