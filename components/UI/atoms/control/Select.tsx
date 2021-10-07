import React from 'react'
import { ISelect } from '../../../utils/types'

const Select : React.FC<ISelect> = ({ list, classes, onChange, required = false, defaultVal, isSelected }) => {
    return (
        <select
            className={`input-base ${classes}`}
            onChange={onChange}
            required={required}
            defaultValue={isSelected}
        >
            {defaultVal && <option>{defaultVal.text}</option>}
            {list.length >= 1 && list.map((data, i) => (
                <option key={i} value={data.value}>{data.text}</option>
            ))}
        </select>
    )
}

export default Select
