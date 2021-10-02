import React from 'react'
import { IFormInput } from '../../../utils/types'
import Input from '../../atoms/control/Input'
import LabelForm from '../../atoms/text/LabelForm'

const FormInput : React.FC<IFormInput> = ({ classes, label, inputType = 'text', value, onChange, placeholder, required }) => {
    return (
        <div className={classes}>
            {label && (<LabelForm text={label} classes='mb-1' />)}
            <Input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={inputType}
                required={required}
            />
        </div>
    )
}

export default FormInput
