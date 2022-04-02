import React from 'react'
import { IFormTextarea } from '../../../utils/types'
import Textarea from '../../atoms/control/Textarea'
import LabelForm from '../../atoms/text/LabelForm'

const FormTextarea : React.FC<IFormTextarea> = ({ classes, label, defaultValue, onChange, placeholder, required }) => {
    return (
        <div className={classes}>
            {label && (<LabelForm text={label} classes='mb-1 capitalize' />)}
            <Textarea
                defaultValue={defaultValue}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}

export default FormTextarea
