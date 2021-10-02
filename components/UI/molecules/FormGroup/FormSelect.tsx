import React from 'react'
import { IFormSelect } from '../../../utils/types'
import Select from '../../atoms/control/Select'
import LabelForm from '../../atoms/text/LabelForm'

const FormSelect : React.FC<IFormSelect> = ({ classes, label, list, onChange, required }) => {
    return (
        <div className={classes}>
            {label && (<LabelForm text={label} classes='mb-1' />)}
            <Select
                onChange={onChange}
                required={required}
                list={list}
            />
        </div>
    )
}

export default FormSelect
