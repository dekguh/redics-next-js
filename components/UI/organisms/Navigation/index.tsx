import React from 'react'
import { dataListMenu } from '../../../utils/data'
import NavList from '../../molecules/navigation/NavList'

const Navigation : React.FC = () => {
    return (
        <div className='fixed bottom-0 right-0 left-0 z-40'>
            <NavList
                dataListMenu={dataListMenu}
            />
        </div>
    )
}

export default Navigation
