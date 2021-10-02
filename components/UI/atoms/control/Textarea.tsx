import React from 'react'
import { ITextarea } from '../../../utils/types'

const Textarea : React.FC<ITextarea> = ({ value, placeholder, onChange, classes, rows = 5, required = false }) => {
    return (
        <textarea onChange={onChange} className={`input-base ${classes}`} placeholder={placeholder} rows={rows} required={required}>
            {value}
        </textarea>
    )
}

export default Textarea
