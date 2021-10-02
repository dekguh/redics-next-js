import React from 'react'
import { IInput } from '../../../utils/types'

const Input : React.FC<IInput> = ({ value, onChange, placeholder = 'placeholder', type = 'text', classes, required = false }) => {
    return (
        <input
            className={`input-base ${classes}`}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            required={required}
        />
    )
}

export default Input
