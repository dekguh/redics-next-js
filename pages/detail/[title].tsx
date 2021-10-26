import { NextPage } from 'next'
import React from 'react'
import DetailIklan from '../../components/UI/template/DetailIklan'
import { useRouter } from 'next/router'

const DetailPage : NextPage = () => {
    const Router = useRouter()
    return (
        <DetailIklan title={Router.query.title?.toString()} />
    )
}

export default DetailPage
