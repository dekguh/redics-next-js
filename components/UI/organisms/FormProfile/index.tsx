import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react'
import { connect, ConnectedProps, useDispatch } from 'react-redux'
import { apiUpdateBillingUser, apiUpdatePasswordUser } from '../../../utils/api'
import { dataListKabupaten, dataListKecamatan, dataListProvinsi } from '../../../utils/data'
import { RootState } from '../../../utils/redux/store'
import { IFormProfile } from '../../../utils/types'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import FormPassword from '../../molecules/FormGroup/FormPassword'
import FormSelect from '../../molecules/FormGroup/FormSelect'
import HeadingWithUrl from '../../molecules/heading/HeadingWithUrl'
import BoxAlert from '../BoxAlert'
import { updateBillingAction, updateIsLoginAction } from '../../../utils/redux/user/action'
import { useRouter } from 'next/router'
import { toCapitalizeCase } from '../../../utils/other'

const mapState = (state: RootState) => ({
    billing: state.users.billing
})

const mapDispatch = {
    updateBillingAct: (data : {}) => (updateBillingAction(data))
}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const FormProfile : React.FC<IFormProfile & PropsFromRedux> = ({ classes, billing, updateBillingAct }) => {
    const Router = useRouter()
    const [dataUpdate, setDataUpdate] = useState<any>({
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

    const [dataPassword, setDataPassword] = useState<any>({ newPassword: '', oldPassword: '' })
    const [validationPassword, setValidationPassword] = useState<any>({ type: '', message: '' })
    const [isLoadingPassword, setIsLoadingPassword] = useState<boolean>(false)
    const dispatch = useDispatch()

    useEffect(() => {
        billing && setDataUpdate({
            nama: billing?.nama,
            kecamatan: billing?.kecamatan,
            kabupaten: billing?.kabupaten,
            provinsi: billing?.provinsi,
            alamat: billing?.alamat,
            phone: billing?.phone
        })
    }, [billing])

    const handleClickUpdateProfile = (e : MouseEvent<HTMLButtonElement>) : void => {
        setIsLoadingProfile(true)
        const updateBilling = async () : Promise<void> => {
            const response : any = await apiUpdateBillingUser(localStorage.getItem('jwt'), dataUpdate)
            setIsLoadingProfile(false)
            if(response.id) {
                setValidationProfile({ type: 'success', message: 'berhasil update profile' })
                updateBillingAct(response)
            }

            return setValidationProfile({ type: 'danger', message: response })
        }
        updateBilling()
    }

    const handleClickUpdatePassword = (e : MouseEvent<HTMLInputElement>) : void => {
        setIsLoadingPassword(true)
        const updatePassword = async () => {
            const response : any = await apiUpdatePasswordUser(localStorage.getItem('jwt'), {
                newPassword: dataPassword.newPassword,
                oldPassword: dataPassword.oldPassword,
            })

            setIsLoadingPassword(false)
            if(response?.id) {
                return setValidationPassword({ type: 'success', message: 'berhasil mengubah password anda' })
            }

            return setValidationPassword({ type: 'danger', message: response })
        }

        updatePassword()
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
                        list={dataListProvinsi.map(data => ({ value: data.name.toLowerCase(), text: toCapitalizeCase(data.name) }))}
                        onChange={(e : ChangeEvent<HTMLInputElement>) => {
                            setProvinsi(e.target.value)
                            setDataUpdate({ ...dataUpdate, provinsi: e.target.value })
                        }}
                        defaultVal={{ text: 'pilih provinsi' }}
                        isSelected={dataUpdate?.provinsi}
                    />

                    <FormSelect
                        classes='flex-grow-0 flex-shrink w-6/12 pl-1'
                        label='Kabupaten'
                        list={dataListKabupaten.filter(data => data.provinsiId.toLowerCase() == provinsi)
                            .map(data => ({ value: data.name, text: toCapitalizeCase(data.name) }))
                        }
                        onChange={(e : ChangeEvent<HTMLInputElement>) => {
                            setKabupaten(e.target.value)
                            setDataUpdate({ ...dataUpdate, kabupaten: e.target.value })
                        }}
                        defaultVal={{ text: 'pilih kabupaten' }}
                        isSelected={dataUpdate?.kabupaten}
                    />
                </div>

                <FormSelect
                    label='Kecamatan'
                    classes='mb-3'
                    list={dataListKecamatan.filter(data => data.kabupatenId == kabupaten)
                        .map(data => ({ value: data.name.toLowerCase(), text: toCapitalizeCase(data.name) }))
                    }
                    defaultVal={{ text: 'pilih kecamatan' }}
                    isSelected={dataUpdate?.kecamatan}
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
                <FormButton
                    text='logout'
                    classes='mb-3'
                    onClick={() => {
                        localStorage.removeItem('jwt')
                        dispatch(updateIsLoginAction(false))
                        dispatch(updateBillingAction(null))
                        Router.push('/login')
                    }}
                />

                <p className='leading-tight mb-3 text-gray-500'>catatan: biarkan kosong jika tidak ingin mengganti password</p>

                {validationPassword.message.length >= 1 && (
                    <BoxAlert
                        text={validationPassword.message}
                        type={validationPassword.type}
                        classes='mb-4'
                    />
                )}

                <FormPassword
                    label='New Password'
                    classes='mb-3'
                    placeholder='new password'
                    onChange={(e : ChangeEvent<HTMLInputElement>) => setDataPassword({ ...dataPassword, newPassword: e.target.value })}
                />

                <FormPassword
                    label='Old Password'
                    classes='mb-3'
                    placeholder='old password'
                    onChange={(e : ChangeEvent<HTMLInputElement>) => setDataPassword({ ...dataPassword, oldPassword: e.target.value })}
                />

                <FormButton
                    text={isLoadingPassword ? 'Proses...' : 'Update Password'}
                    onClick={handleClickUpdatePassword}
                />
            </div>
        </div>
    )
}

export default connector(FormProfile)
