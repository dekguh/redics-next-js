import React from 'react'
import { INavItem } from '../../../utils/types'
import Link from 'next/link'

const NavItem : React.FC<INavItem> = ({ icon: Icon, toPath, isActive }) => {
    return (
        <li className={`flex-grow-0 flex-shrink w-2.4/12 px-1 text-center ${isActive ? 'text-blue-500' : 'text-gray-400'}`}>
            <Link href={toPath}>
                <a>
                    <i className='text-2xl'>
                        <Icon className='mx-auto'/>
                    </i>
                </a>
            </Link>
        </li>
    )
}

export default NavItem
