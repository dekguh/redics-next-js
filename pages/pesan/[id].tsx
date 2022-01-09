import { NextPage } from 'next'
import React from 'react'
import MessageDetail from '../../components/UI/template/MessageDetail'
import { useRouter } from 'next/router'

const MessageDetailPage : NextPage = () => {
    const Router = useRouter()

    return (
        <MessageDetail
            messageId={Router.query.id ? Router.query.id : 0}
        />
    )
}

export default MessageDetailPage
