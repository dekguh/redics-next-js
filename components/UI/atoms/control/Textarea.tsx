import React from 'react'
import { ITextarea } from '../../../utils/types'

const Textarea : React.FC<ITextarea> = ({ value, placeholder, onChange, classes, rows = 5 }) => {
    return (
        <textarea onChange={onChange} className={`input-base ${classes}`} placeholder={placeholder} rows={rows}>
            {value}
        </textarea>
    )
}

export default Textarea
