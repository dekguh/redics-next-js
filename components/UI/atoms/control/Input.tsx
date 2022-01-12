import React from 'react'
import { IInput } from '../../../utils/types'

const Input : React.FC<IInput> = ({ id, ref, defaultValue, onChange, placeholder = 'placeholder', type = 'text', classes, required = false }) => {
    return (
        <input
            className={`input-base ${classes}`}
            defaultValue={defaultValue}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            required={required}
            ref={ref}
            id={id}
        />
    )
}

export default Input
