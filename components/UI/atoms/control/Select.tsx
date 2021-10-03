import React from 'react'
import { ISelect } from '../../../utils/types'

const Select : React.FC<ISelect> = ({ list, classes, onChange, required = false }) => {
    return (
        <select
            className={`input-base ${classes}`}
            onChange={onChange}
            required={required}
        >
            {list.length >= 1 && list.map((data, i) => (
                <option key={i} value={data.text}>{data.text}</option>
            ))}
        </select>
    )
}

export default Select
