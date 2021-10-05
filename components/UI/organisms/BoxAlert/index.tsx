import React from 'react'
import { IBoxAlert } from '../../../utils/types'

const BoxAlert : React.FC<IBoxAlert> = ({ type = 'information', text, classes }) => {
    return (
        <div className={`p-3 rounded text-white
            ${classes}
            ${
                type === 'danger' && 'bg-red-400'
                || type === 'success' && 'bg-green-400'
                || type === 'information' && 'bg-blue-400'
            }
        `}>
            <p className='leading-normal'>{text}</p>
        </div>
    )
}

export default BoxAlert
