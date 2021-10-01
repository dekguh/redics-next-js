import { useRouter } from 'next/router'
import React from 'react'
import { INavList } from '../../../utils/types'
import NavItem from '../../atoms/item/NavItem'

const NavList : React.FC<INavList> = ({ dataListMenu }) => {
    const Router = useRouter()

    return (
        <ul className='flex flex-row flex-nowrap items-center py-3 bg-white border-t border-gray-100'>
            {dataListMenu.length >=1 && dataListMenu.map((data, i) => (
                <NavItem
                    key={i}
                    icon={data.icon}
                    isActive={Router ? Router.pathname === data.toPath : false}
                    toPath={data.toPath}
                />
            ))}
        </ul>
    )
}

export default NavList
