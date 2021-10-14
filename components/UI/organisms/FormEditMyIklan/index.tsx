import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { apiUpdateIklanByJwt, getSingleIklanById } from '../../../utils/api'
import { dataListKabupaten, dataListKecamatan, dataListProvinsi } from '../../../utils/data'
import { RootState } from '../../../utils/redux/store'
import { IFormEditMyIklan } from '../../../utils/types'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import FormPreviewImage from '../../molecules/FormGroup/FormPreviewImage'
import FormSelect from '../../molecules/FormGroup/FormSelect'
import FormTextarea from '../../molecules/FormGroup/FormTextarea'
import HeadingButtonBack from '../../molecules/heading/HeadingButtonback'
import ListCalculatePricing from '../../molecules/list/ListCalculatePricing'
import BlockIconText from '../../molecules/other/BlockIconText'
import BoxAlert from '../BoxAlert'

const mapState = (state : RootState) => ({
    billing: state.users.billing
})

const mapDispatch = {
    actGetListMyIklan: () => ({ type: 'GET_LIST_MY_IKLAN' })
}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const FormEditMyIklan : React.FC<IFormEditMyIklan & PropsFromRedux> = ({ billing, idIklan, actGetListMyIklan }) => {
    const [isHaveId, setIsHaveId] = useState<boolean>(false)
    const [dataCurrent, setDataCurrent] = useState<any>(null)
    const [selectedImage, setSelectedImage] = useState<FileList | Array<any> | null>(null)

    const [provinsi, setProvinsi] = useState<number | string>('bali')
    const [kabupaten, setKabupaten] = useState<number | string>('badung')
    const [latestThumbnailId, setLatestThumbnailId] = useState<number | string>(0)

    const [validation, setValidation] = useState<any>({
        type: '',
        message: ''
    })
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const getMyIklan = async () => {
            const response : any = await getSingleIklanById(localStorage.getItem('jwt'), idIklan)
            if(!response.id) return setIsHaveId(false)
            setProvinsi(response.provinsi)
            setKabupaten(response.kabupaten)
            setLatestThumbnailId(response.thumbnail.id)
            setDataCurrent({
                id: idIklan,
                judul: response.judul,
                deskripsi: response.deskripsi,
                provinsi: response.provinsi,
                kabupaten: response.kabupaten,
                kecamatan: response.kecamatan,
                phone: billing.phone,
                pricePerDay: response.pricePerDay,
                thumbnailURL: response.thumbnail.url,
                statusIklan: response.statusIklan

            })
            setIsHaveId(true)
        }

        getMyIklan()
    }, [idIklan])

    const handleSubmitUpdate = (e : FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        if(selectedImage) {
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
        }

        const uploaded = async () => {
            const response : any = await apiUpdateIklanByJwt(localStorage.getItem('jwt'), dataCurrent, selectedImage, latestThumbnailId)
            setIsLoading(false)

            if(response.id) {
                actGetListMyIklan()
                setDataCurrent({
                    ...dataCurrent,
                    judul: response.judul,
                    deskripsi: response.deskripsi,
                    provinsi: response.provinsi,
                    kabupaten: response.kabupaten,
                    kecamatan: response.kecamatan,
                    pricePerDay: response.pricePerDay,
                    thumbnailURL: response.thumbnail.url,
                    statusIklan: response.statusIklan
                })
                return setValidation({
                    type: 'success',
                    message: 'iklan anda berhasil diperbarui'
                })
        }

            return setValidation({
                type: 'danger',
                message: 'gagal mengupdate, harap periksa kembali form'
            })
        }

        uploaded()
    }

    return (
        <div className='px-4 pt-4 pb-20'>
            <HeadingButtonBack toPath='/iklan-saya' classes='mb-3' />

            {validation.message.length >= 1 && (
                <BoxAlert
                    text={validation.message}
                    type={validation.type}
                    classes='mb-4'
                />
            )}

            {(isHaveId && dataCurrent)
            ? (<form onSubmit={handleSubmitUpdate}>
                <FormInput
                    label='Judul'
                    placeholder='ex: Kursi Roda Aluminium'
                    classes='mb-3'
                    defaultValue={dataCurrent?.judul}
                    required={true}
                    onChange={(e : ChangeEvent<HTMLInputElement>) => setDataCurrent({ ...dataCurrent, judul: e.target.value })}
                />

                <div className='flex flex-row flex-nowrap mb-3'>
                    <FormSelect
                        classes='flex-grow-0 flex-shrink w-6/12 pr-1'
                        label='Provinsi'
                        list={dataListProvinsi.map(data => ({ value: data.name.toLowerCase(), text: data.name }))}
                        onChange={(e : ChangeEvent<HTMLInputElement>) => {
                            setProvinsi(e.target.value)
                            setDataCurrent({ ...dataCurrent, provinsi: e.target.value })
                        }}
                        defaultVal={{ text: 'pilih provinsi' }}
                        isSelected={dataCurrent?.provinsi}
                        required={true}
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
                            setDataCurrent({ ...dataCurrent, kabupaten: e.target.value })
                        }}
                        isSelected={dataCurrent?.kabupaten}
                        required={true}
                    />
                </div>

                <FormSelect
                    label='Kecamatan'
                    classes='mb-3'
                    list={dataListKecamatan.filter(data => data.kabupatenId == kabupaten)
                        .map(data => ({ value: data.name.toLowerCase(), text: data.name }))
                    }
                    defaultVal={{ text: 'pilih kecamatan' }}
                    onChange={(e : ChangeEvent<HTMLInputElement>) => {
                        setDataCurrent({ ...dataCurrent, kecamatan: e.target.value })
                    }}
                    isSelected={dataCurrent?.kecamatan}
                    required={true}
                />

                <FormSelect
                    label='Status iklan'
                    required={true}
                    list={[
                        {
                            text: 'Aktif',
                            value: 1
                        },
                        {
                            text: 'Tidak Aktif',
                            value: 0
                        }
                    ]}
                    isSelected={dataCurrent.statusIklan == true ? '1' : '0'}
                    onChange={(e : ChangeEvent<HTMLInputElement>) => setDataCurrent({
                        ...dataCurrent,
                        statusIklan: e.target.value == '1' ? true : false
                    })}
                    classes='mb-4'
                />

                <FormInput
                    label='Harga (per-hari)'
                    placeholder='ex: 5000'
                    classes='mb-2'
                    inputType='number'
                    defaultValue={dataCurrent.pricePerDay}
                    required={true}
                    onChange={(e : ChangeEvent<HTMLInputElement>) => setDataCurrent({ ...dataCurrent, pricePerDay: e.target.value })}
                />
                <div className='mb-3'>
                    <ListCalculatePricing pricePerDay={dataCurrent.pricePerDay} />
                </div>

                <FormPreviewImage
                    classes='mb-2 mt-2'
                    imgSrc={dataCurrent?.thumbnailURL}
                />

                <FormInput
                    label='Thumbnail (jpeg, jpg, png)'
                    classes='mb-3'
                    inputType='file'
                    onChange={(e : ChangeEvent<HTMLInputElement>) => {
                        setSelectedImage(e.target.files)
                    }}
                />

                <FormTextarea
                    label='Deskipsi'
                    placeholder='deskripsi iklan'
                    classes='mb-3'
                    defaultValue={dataCurrent.deskripsi}
                    required={true}
                    onChange={(e : ChangeEvent<HTMLInputElement>) => setDataCurrent({ ...dataCurrent, deskripsi: e.target.value })}
                />

                <FormButton text={isLoading ? 'Proses...' : 'update iklan'} type='submit' />
            </form>)
            : (
                <BlockIconText
                    imgUrl='/icon/icon-not-found.png'
                    description='sedang mencari data'
                />
            )}
        </div>
    )
}

export default connector(FormEditMyIklan)
