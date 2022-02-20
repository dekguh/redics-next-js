import React, { useEffect, useState } from 'react'
import FormChatBox from '../organisms/FormChatBox'
import PrivateWrapper from '../../utils/wrapper/PrivateWrapper'
import { IMessageDetail } from '../../utils/types'


const MessageDetail : React.FC<IMessageDetail> = ({ messageId }) => {
    return (
        <>
            <PrivateWrapper lastCurrentPage='/pesan'>
                <FormChatBox messageId={messageId}/>
            </PrivateWrapper>
        </>
    )
}

export default MessageDetail
