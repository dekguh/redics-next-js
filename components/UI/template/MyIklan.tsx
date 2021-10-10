import { useRouter } from 'next/router'
import React from 'react'
import PrivateWrapper from '../../utils/wrapper/PrivateWrapper'
import ListMyIklan from '../organisms/ListMyIklan'

const MyIklan : React.FC = () => {
    const Router = useRouter()

    return (
        <PrivateWrapper lastCurrentPage={Router.asPath}>
            <ListMyIklan />
        </PrivateWrapper>
    )
}

export default MyIklan
