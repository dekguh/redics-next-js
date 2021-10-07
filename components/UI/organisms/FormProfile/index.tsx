import React, { ChangeEvent, MouseEvent, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { apiUpdateBillingUser } from '../../../utils/api'
import { dataListKabupaten, dataListKecamatan, dataListProvinsi } from '../../../utils/data'
import { RootState } from '../../../utils/redux/store'
import { IFormProfile } from '../../../utils/types'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import FormPassword from '../../molecules/FormGroup/FormPassword'
import FormSelect from '../../molecules/FormGroup/FormSelect'
import HeadingWithUrl from '../../molecules/heading/HeadingWithUrl'
import BoxAlert from '../BoxAlert'
import { updateBillingAction } from '../../../utils/redux/user/action'

const mapState = (state: RootState) => ({
    billing: state.users.billing
})

const mapDispatch = {
    updateBillingAct: (data : {}) => (updateBillingAction(data))
}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const FormProfile : React.FC<IFormProfile & PropsFromRedux> = ({ classes, billing, updateBillingAct }) => {
    const [dataUpdate, setDataUpdate] = useState<{}>({
        nama: billing?.nama,
        kecamatan: billing?.kecamatan,
        kabupaten: billing?.kabupaten,
        provinsi: billing?.provinsi,
        alamat: billing?.alamat,
        phone: billing?.phone
    })
    const [provinsi, setProvinsi] = useState<number | string>(billing?.provinsi)
    const [kabupaten, setKabupaten] = useState<number | string>(billing?.kabupaten)
    const [validationProfile, setValidationProfile] = useState<any>({ type: '', message: '' })
    const [isLoadingProfile, setIsLoadingProfile] = useState<boolean>(false)

    const handleClickUpdateProfile = (e : MouseEvent<HTMLButtonElement>) : void => {
        setIsLoadingProfile(true)
        const updateBilling = async () : Promise<void> => {
            const response : any = await apiUpdateBillingUser(localStorage.getItem('jwt'), dataUpdate)
            setIsLoadingProfile(false)
            if(response.id) {
                updateBillingAct(response)
                return setValidationProfile({ type: 'success', message: 'berhasil update profile' })
            }

            return setValidationProfile({ type: 'danger', message: response })
        }
        updateBilling()
    }

    return (
        <div className={classes}>
            <HeadingWithUrl
                title='Akun Saya'
                classes='mb-4'
            />

            <div className='pb-12'>
                {validationProfile.message.length >= 1 && (
                    <BoxAlert
                        text={validationProfile.message}
                        type={validationProfile.type}
                        classes='mb-4'
                    />
                )}

                <FormInput
                    label='Nama Lengkap'
                    placeholder='nama lengkap'
                    classes='mb-3'
                    defaultValue={billing?.nama}
                    onChange={(e : ChangeEvent<HTMLInputElement>) => setDataUpdate({ ...dataUpdate, nama: e.target.value })}
                />

                <div className='flex flex-row flex-nowrap mb-3'>
                    <FormSelect
                        classes='flex-grow-0 flex-shrink w-6/12 pr-1'
                        label='Provinsi'
                        list={dataListProvinsi.map(data => ({ value: data.name.toLowerCase(), text: data.name }))}
                        onChange={(e : ChangeEvent<HTMLInputElement>) => {
                            setProvinsi(e.target.value)
                            setDataUpdate({ ...dataUpdate, provinsi: e.target.value })
                        }}
                        defaultVal={{ text: 'pilih provinsi' }}
                        isSelected={billing?.provinsi}
                    />

                    <FormSelect
                        classes='flex-grow-0 flex-shrink w-6/12 pl-1'
                        label='Kabupaten'
                        list={dataListKabupaten.filter(data => data.provinsiId.toLowerCase() == provinsi)
                            .map(data => ({ value: data.name, text: data.name }))
                        }
                        onChange={(e : ChangeEvent<HTMLInputElement>) => {
                            setKabupaten(e.target.value)
                            setDataUpdate({ ...dataUpdate, kabupaten: e.target.value })
                        }}
                        defaultVal={{ text: 'pilih kabupaten' }}
                        isSelected={billing?.kabupaten}
                    />
                </div>

                <FormSelect
                    label='Kecamatan'
                    classes='mb-3'
                    list={dataListKecamatan.filter(data => data.kabupatenId == kabupaten)
                        .map(data => ({ value: data.name.toLowerCase(), text: data.name }))
                    }
                    defaultVal={{ text: 'pilih kecamatan' }}
                    isSelected={billing?.kecamatan}
                    onChange={(e : ChangeEvent<HTMLInputElement>) => setDataUpdate({ ...dataUpdate, kecamatan: e.target.value })}
                />

                <FormInput
                    label='Alamat Lengkap'
                    placeholder='ex; Jl. Bypass Ngurah Rai'
                    classes='mb-3'
                    defaultValue={billing?.alamat}
                    onChange={(e : ChangeEvent<HTMLInputElement>) => setDataUpdate({ ...dataUpdate, alamat: e.target.value })}
                />

                <FormInput
                    label='Phone'
                    placeholder='+6212356789'
                    classes='mb-3'
                    defaultValue={billing?.phone}
                    onChange={(e : ChangeEvent<HTMLInputElement>) => setDataUpdate({ ...dataUpdate, phone: e.target.value })}
                />

                <FormButton
                    text={isLoadingProfile ? 'Proses...' : 'Update Profile'}
                    classes='mb-3'
                    onClick={handleClickUpdateProfile}
                />

                <p className='leading-tight mb-3 text-gray-500'>catatan: biarkan kosong jika tidak ingin mengganti password</p>

                <FormPassword
                    label='Password'
                    classes='mb-3'
                />

                <FormPassword
                    label='Re-Password'
                    classes='mb-3'
                />

                <FormButton
                    text='Update Password'
                />
            </div>
        </div>
    )
}

export default connector(FormProfile)
