import React from 'react'
import PrivateWrapper from '../../utils/wrapper/PrivateWrapper'
import FormProfile from '../organisms/FormProfile'

const Akun : React.FC = () => {
    return (
        <PrivateWrapper>
            <div className='p-4'>
                <FormProfile />
            </div>
        </PrivateWrapper>
    )
}

export default Akun