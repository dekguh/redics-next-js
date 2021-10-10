import React from 'react'
import { ITextarea } from '../../../utils/types'

const Textarea : React.FC<ITextarea> = ({ defaultValue, placeholder, onChange, classes, rows = 5, required = false }) => {
    return (
        <textarea defaultValue={defaultValue} onChange={onChange} className={`input-base ${classes}`} placeholder={placeholder} rows={rows} required={required}>
            {defaultValue}
        </textarea>
    )
}

export default Textarea
