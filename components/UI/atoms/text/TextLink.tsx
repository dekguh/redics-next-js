import React from 'react'
import { ITextLink } from '../../../utils/types'
import Link from 'next/link'

const TextLink : React.FC<ITextLink> = ({ text, toPath, isActive, onClick }) => {
    return (
        <Link href={toPath}>
            <a className={`text-link ${isActive && 'active'}`} onClick={onClick}>{text}</a>
        </Link>
    )
}

export default TextLink
