import React, { ChangeEvent, FormEvent, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { apiCreateIklan } from '../../../utils/api'
import { dataListKabupaten, dataListKecamatan, dataListProvinsi } from '../../../utils/data'
import { RootState } from '../../../utils/redux/store'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import FormSelect from '../../molecules/FormGroup/FormSelect'
import FormTextarea from '../../molecules/FormGroup/FormTextarea'
import HeadingButtonBack from '../../molecules/heading/HeadingButtonback'
import ListCalculatePricing from '../../molecules/list/ListCalculatePricing'
import BoxAlert from '../BoxAlert'

const mapState = (state : RootState) => ({
    billing: state.users.billing
})

const mapDispatch = {
    actGetListMyIklan: () => ({ type: 'GET_LIST_MY_IKLAN' })
}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const FormCreateIklan : React.FC<PropsFromRedux> = ({ billing, actGetListMyIklan }) => {
    const [provinsi, setProvinsi] = useState<number | string>(billing?.provinsi)
    const [kabupaten, setKabupaten] = useState<number | string>(billing?.kabupaten)

    const [selectedImage, setSelectedImage] = useState<FileList | Array<any> | null>(null)
    const [validation, setValidation] = useState<any>({
        type: '',
        message: ''
    })

    const [dataCreate, setDataCreate] = useState<any>({
        judul: '',
        deskripsi: '',
        thumbnail: null,
        kecamatan: billing?.kecamatan,
        kabupaten: billing?.kabupaten,
        provinsi: billing?.provinsi,
        phone: billing?.phone,
        statusIklan: true,
        pricePerDay: 0,
        totalView: 0

    })
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = (e : FormEvent) => {
        e.preventDefault()

        setIsLoading(true)

        if(!selectedImage) {
            setIsLoading(false)
            return setValidation({
                type: 'danger',
                message: 'thumbnail tidak boleh kosong'
            })
    }

        if(selectedImage[0].type != 'image/png' && selectedImage[0].type != 'image/jpeg'
        && selectedImage[0].type != 'image/jpg') {
            setIsLoading(false)
            return setValidation({
                type: 'danger',
                message: 'format gambar hanya png, jpeg dan jpg'
            })
        }

        // kilobyte
        if((selectedImage[0].size/1024) > 1000) {
            setIsLoading(false)
            return setValidation({
                type: 'danger',
                message: 'maksimal ukuran adalah 1mb'
            })
        }

        const formData = new FormData()
        formData.append('files', selectedImage[0])

        const uploaded = async () => {
            const response : any = await apiCreateIklan(localStorage.getItem('jwt'), dataCreate, formData)
            setIsLoading(false)
            if(!response.id) return setValidation({
                type: 'danger',
                message: response
            })

            actGetListMyIklan()

            return setValidation({
                type: 'success',
                message: 'selamat iklan anda sudah tayang'
            })
        }

        uploaded()
    }
    return (
        <div className='p-4'>
            <HeadingButtonBack toPath='/iklan-saya' classes='mb-3' />

            <form onSubmit={handleSubmit} method='POST'>
                <div>
                    {validation.message.length >= 1 && (
                        <BoxAlert
                            text={validation.message}
                            type={validation.type}
                            classes='mb-4'
                        />
                    )}

                    <FormInput
                        required={true}
                        label='Judul'
                        placeholder='ex: Kursi Roda Aluminium'
                        classes='mb-3'
                        onChange={(e : ChangeEvent<HTMLInputElement>) => setDataCreate({ ...dataCreate, judul: e.target.value })}
                    />

                    <div className='flex flex-row flex-nowrap mb-3'>
                        <FormSelect
                            required={true}
                            classes='flex-grow-0 flex-shrink w-6/12 pr-1'
                            label='Provinsi'
                            list={dataListProvinsi.map(data => ({ value: data.name.toLowerCase(), text: data.name }))}
                            onChange={(e : ChangeEvent<HTMLInputElement>) => {
                                setProvinsi(e.target.value)
                                setDataCreate({ ...dataCreate, provinsi: e.target.value })
                            }}
                            defaultVal={{ text: 'pilih provinsi' }}
                            isSelected={billing?.provinsi}
                        />

                        <FormSelect
                            required={true}
                            classes='flex-grow-0 flex-shrink w-6/12 pl-1'
                            label='Kabupaten'
                            list={dataListKabupaten.filter(data => data.provinsiId.toLowerCase() == provinsi)
                                .map(data => ({ value: data.name, text: data.name }))
                            }
                            defaultVal={{ text: 'pilih kabupaten' }}
                            onChange={(e : ChangeEvent<HTMLInputElement>) => {
                                setKabupaten(e.target.value)
                                setDataCreate({ ...dataCreate, kabupaten: e.target.value })
                            }}
                            isSelected={billing?.kabupaten}
                        />
                    </div>

                    <FormSelect
                        required={true}
                        label='Kecamatan'
                        classes='mb-3'
                        list={dataListKecamatan.filter(data => data.kabupatenId == kabupaten)
                            .map(data => ({ value: data.name.toLowerCase(), text: data.name }))
                        }
                        defaultVal={{ text: 'pilih kecamatan' }}
                        onChange={(e : ChangeEvent<HTMLInputElement>) => setDataCreate({ ...dataCreate, kecamatan: e.target.value })}
                        isSelected={billing?.kecamatan}
                    />

                    <FormInput
                        required={true}
                        label='Harga (per-hari)'
                        placeholder='ex: 5000'
                        classes='mb-2'
                        inputType='number'
                        onChange={(e : ChangeEvent<HTMLInputElement>) => setDataCreate({ ...dataCreate, pricePerDay: e.target.value })}
                    />
                    <div className='mb-3'>
                        <ListCalculatePricing pricePerDay={dataCreate.pricePerDay} />
                    </div>

                    <FormInput
                        required={true}
                        label='Thumbnail (jpeg, jpg, png)'
                        classes='mb-3'
                        inputType='file'
                        onChange={(e : ChangeEvent<HTMLInputElement>) => {
                            setSelectedImage(e.target.files)
                        }}
                    />

                    <FormTextarea
                        required={true}
                        label='Deskipsi'
                        placeholder='deskripsi iklan'
                        classes='mb-3'
                        onChange={(e : ChangeEvent<HTMLInputElement>) => setDataCreate({ ...dataCreate, deskripsi: e.target.value })}
                    />

                    <FormButton
                        text={isLoading ? 'Proses...' : 'buat iklan'}
                        type='submit'
                    />
                </div>
            </form>
        </div>
    )
}

export default connector(FormCreateIklan)
