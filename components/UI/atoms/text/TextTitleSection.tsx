import React from 'react'
import { ITextTitleSection } from '../../../utils/types'

const TextTitleSection : React.FC<ITextTitleSection> = ({ text, size = 'xl', classes }) => {
    return (
        <>
            <h2 className={`text-${size} ${classes}`}>
                {text}
            </h2>
            <div className='bg-blue-500 h-3px w-6 mt-1'></div>
        </>
    )
}

export default TextTitleSection
