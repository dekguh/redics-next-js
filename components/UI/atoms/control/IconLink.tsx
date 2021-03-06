import React from 'react'
import { IIconLink } from '../../../utils/types'
import Link from 'next/link'

const IconLink : React.FC<IIconLink> = ({ icon : Icon, toPath = '#', onClick, classes }) => {
    return (
        <Link href={toPath}>
            <a className={`text-xl duration-100 hover:text-blue-500 ${classes}`} onClick={onClick}>
                <Icon />
            </a>
        </Link>
    )
}

export default IconLink
