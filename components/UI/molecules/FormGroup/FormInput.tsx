import React from 'react'
import { IFormInput } from '../../../utils/types'
import Input from '../../atoms/control/Input'
import LabelForm from '../../atoms/text/LabelForm'

const FormInput : React.FC<IFormInput> = ({ id, ref, classes, label, inputType = 'text', defaultValue, onChange, placeholder, required, classesInput }) => {
    return (
        <div className={classes}>
            {label && (<LabelForm text={label} classes='mb-1 capitalize' />)}
            <Input
                ref={ref}
                defaultValue={defaultValue}
                onChange={onChange}
                placeholder={placeholder}
                type={inputType}
                required={required}
                classes={classesInput}
                id={id}
            />
        </div>
    )
}

export default FormInput
