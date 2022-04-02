import React, { useState } from 'react'
import { IFormPassword } from '../../../utils/types'
import Input from '../../atoms/control/Input'
import LabelForm from '../../atoms/text/LabelForm'
import { BiShow, BiHide } from 'react-icons/bi'

const FormPassword : React.FC<IFormPassword> = ({ classes, label, defaultValue, onChange, placeholder, required }) => {
    const [isShow, setIsShow] = useState<boolean>(false)

    return (
        <div className={`relative ${classes}`}>
            {label && (<LabelForm text={label} classes='mb-1 capitalize' />)}
            <div className='relative'>
                <Input
                    defaultValue={defaultValue}
                    onChange={onChange}
                    placeholder={placeholder}
                    type={isShow ? 'text' : 'password'}
                    required={required}
                />

                <span className='absolute right-3 top-2/4 transform -translate-y-2/4'>
                    <button onClick={e => setIsShow(!isShow)}>
                        <i className='text-blue-500 text-lg'>
                            {isShow
                            ? <BiShow />
                            : <BiHide />}
                        </i>
                    </button>
                </span>
            </div>
        </div>
    )
}

export default FormPassword
