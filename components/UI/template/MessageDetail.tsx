import React from 'react'
import FormChatBox from '../organisms/FormChatBox'
import PrivateWrapper from '../../utils/wrapper/PrivateWrapper'

const MessageDetail : React.FC = () => {
    return (
        <>
            <PrivateWrapper lastCurrentPage='/pesan'>
                <FormChatBox
                    ownIklanId={1}
                    userId={8}
                    messageId={1}
                />
            </PrivateWrapper>
        </>
    )
}

export default MessageDetail
