import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import PrivateWrapper from '../../utils/wrapper/PrivateWrapper'
import FormEditMyIklan from '../organisms/FormEditMyIklan'

const EditIklan : React.FC = () => {
    const Router = useRouter()

    const getId = useMemo(() => {
        return getTitle(Router.query.title?.toString())
    }, [Router.query.title])

    function getTitle(title : string | null | undefined) {
        return title?.split('-')[0]
    }

    return (
        <>
            <PrivateWrapper lastCurrentPage={'/iklan-saya'}>
                <FormEditMyIklan idIklan={getId} />
            </PrivateWrapper>
        </>
    )
}

export default EditIklan
