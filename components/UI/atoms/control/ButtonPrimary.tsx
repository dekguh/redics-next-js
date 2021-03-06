import React from 'react'
import { IButton } from '../../../utils/types'

const ButtonPrimary : React.FC<IButton> = ({ text, onClick, type = 'button' }) => {
    return (
        <button className='w-full button-base bg-blue-500 hover:bg-blue-600 lowercase' onClick={onClick} type={type}>
            {text}
        </button>
    )
}

export default ButtonPrimary
