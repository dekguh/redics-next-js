import React from 'react'
import { IButton } from '../../../utils/types'

const ButtonPrimary : React.FC<IButton> = ({ text, onClick, type = 'button' }) => {
    return (
        <button className='button-base bg-blue-500 hover:bg-blue-600' onClick={onClick} type={type}>
            {text}
        </button>
    )
}

export default ButtonPrimary
