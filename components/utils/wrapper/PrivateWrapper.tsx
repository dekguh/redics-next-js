import React from 'react'
import { IPrivateWrapper } from '../types'

const PrivateWrapper : React.FC<IPrivateWrapper> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default PrivateWrapper
