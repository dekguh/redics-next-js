import React from 'react'
import Head from 'next/head'
import FormCreateIklan from '../organisms/FormCreateIklan'
import PrivateWrapper from '../../utils/wrapper/PrivateWrapper'
import { useRouter } from 'next/router'

const CreateIklan : React.FC = () => {
    const Router = useRouter()

    return (
        <>
            <Head>
                <title>Redics - Buat Iklan</title>
            </Head>

            <PrivateWrapper lastCurrentPage={Router.asPath}>
                <div className='pb-14'>
                    <FormCreateIklan />
                </div>
            </PrivateWrapper>
        </>
    )
}

export default CreateIklan
