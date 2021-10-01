import React from 'react'
import Navigation from '../../UI/organisms/Navigation'
import { IAppWrapper } from '../types'

const AppWrapper : React.FC<IAppWrapper> = ({ children }) => {
    return (
        <div>
            {children}
            <Navigation />
        </div>
    )
}

export default AppWrapper
