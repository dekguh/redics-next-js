import React from 'react'
import { ILabelForm } from '../../../utils/types'

const LabelForm : React.FC<ILabelForm> = ({ text, classes }) => {
    return (
        <label className={`block text-sm text-gray-700 ${classes}`}>
            {text}
        </label>
    )
}

export default LabelForm
