import { useRouter } from 'next/router'
import React from 'react'
import PrivateWrapper from '../../utils/wrapper/PrivateWrapper'
import FormProfile from '../organisms/FormProfile'

const Akun : React.FC = () => {
    const Router = useRouter()

    return (
        <PrivateWrapper lastCurrentPage={Router.asPath}>
            <div className='p-4'>
                <FormProfile />
            </div>
        </PrivateWrapper>
    )
}

export default Akun