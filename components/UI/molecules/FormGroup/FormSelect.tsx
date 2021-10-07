import React from 'react'
import { IFormSelect } from '../../../utils/types'
import Select from '../../atoms/control/Select'
import LabelForm from '../../atoms/text/LabelForm'

const FormSelect : React.FC<IFormSelect> = ({ classes, label, list, onChange, required, defaultVal, isSelected }) => {
    return (
        <div className={classes}>
            {label && (<LabelForm text={label} classes='mb-1' />)}
            <Select
                onChange={onChange}
                required={required}
                list={list}
                defaultVal={defaultVal}
                isSelected={isSelected}
            />
        </div>
    )
}

export default FormSelect
