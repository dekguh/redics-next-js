import React from 'react'
import { IBlockIconText } from '../../../utils/types'

const BlockIconText : React.FC<IBlockIconText> = ({ imgUrl, description }) => {
    return (
        <div>
            <img src={imgUrl} alt="icon" className='w-48 mx-auto' />
            <span className='mt-3 text-center block text-gray-500'>{description}</span>
        </div>
    )
}

export default BlockIconText
