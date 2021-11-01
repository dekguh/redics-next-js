import { useRouter } from 'next/router'
import React from 'react'
import PrivateWrapper from '../../utils/wrapper/PrivateWrapper'
import ListPesan from '../organisms/ListPesan'

const Pesan : React.FC = () => {
    const Router = useRouter()

    return (
        <PrivateWrapper lastCurrentPage={Router.asPath}>
            <ListPesan />
        </PrivateWrapper>
    )
}

export default Pesan
