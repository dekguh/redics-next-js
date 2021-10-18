import React from 'react'
import { ITextBackground } from '../../../utils/types'
import { MdLocationOn } from 'react-icons/md'

const TextBackground : React.FC<ITextBackground> = ({ text, classes }) => {
    return (
        <label className={`bg-blue-500 px-3 py-1 rounded-full inline-block ${classes}`}>
            <i className='text-white inline-block mr-1 text-xs'><MdLocationOn /></i>
            <span className='text-white text-xs'>{text}</span>
        </label>
    )
}

export default TextBackground
