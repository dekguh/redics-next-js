import React from 'react'
import { IFormProfile } from '../../../utils/types'
import FormButton from '../../molecules/FormGroup/FormButton'
import FormInput from '../../molecules/FormGroup/FormInput'
import FormPassword from '../../molecules/FormGroup/FormPassword'
import FormSelect from '../../molecules/FormGroup/FormSelect'
import HeadingWithUrl from '../../molecules/heading/HeadingWithUrl'

const FormProfile : React.FC<IFormProfile> = ({ classes }) => {
    return (
        <div className={classes}>
            <HeadingWithUrl
                title='Akun Saya'
                classes='mb-4'
            />

            <div className='pb-12'>
                <FormInput
                    label='Nama Lengkap'
                    placeholder='nama lengkap'
                    classes='mb-3'
                />

                <div className='flex flex-row flex-nowrap mb-3'>
                    <FormSelect
                        classes='flex-grow-0 flex-shrink w-6/12 pr-1'
                        label='Kabupaten'
                        list={[
                            {
                                value: 'badung',
                                text: 'Badung'
                            }
                        ]}
                    />

                    <FormSelect
                        classes='flex-grow-0 flex-shrink w-6/12 pl-1'
                        label='Provinsi'
                        list={[
                            {
                                value: 'bali',
                                text: 'Bali'
                            }
                        ]}
                    />
                </div>

                <FormSelect
                    label='Kecamatan'
                    classes='mb-3'
                    list={[
                        {
                            value: 'kuta selatan',
                            text: 'Kuta Selatan'
                        }
                    ]}
                />

                <FormInput
                    label='Alamat Lengkap'
                    placeholder='ex; Jl. Bypass Ngurah Rai'
                    classes='mb-3'
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
                    text='Update Profile'
                />
            </div>
        </div>
    )
}

export default FormProfile
