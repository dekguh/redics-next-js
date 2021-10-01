import React from 'react'
import { ISelect } from '../../../utils/types'

const Select : React.FC<ISelect> = ({ list, classes, onChange }) => {
    return (
        <select
            className={`input-base ${classes}`}
            onChange={onChange}
        >
            {list.length >= 1 && list.map((data, i) => (
                <option value={data.text}>{data.text}</option>
            ))}
        </select>
    )
}

export default Select
