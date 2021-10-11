import { useRouter } from 'next/router'
import React from 'react'
import PrivateWrapper from '../../utils/wrapper/PrivateWrapper'
import EditMyIklan from '../organisms/EditMyIklan'

const EditIklan : React.FC = () => {
    const Router = useRouter()

    return (
        <>
            <PrivateWrapper lastCurrentPage={Router.asPath}>
                <EditMyIklan />
            </PrivateWrapper>
        </>
    )
}

export default EditIklan
