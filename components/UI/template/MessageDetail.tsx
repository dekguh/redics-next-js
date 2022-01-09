import React, { useEffect, useState } from 'react'
import FormChatBox from '../organisms/FormChatBox'
import PrivateWrapper from '../../utils/wrapper/PrivateWrapper'
import { IMessageDetail } from '../../utils/types'
import { RootState } from '../../utils/redux/store'
import { connect, ConnectedProps } from 'react-redux'
import { apiGetMessageDetail } from '../../utils/api'

const mapState = (state : RootState) => ({
    billing: state.users.billing
})

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

const MessageDetail : React.FC<IMessageDetail & PropsFromRedux> = ({ messageId, billing }) => {
    const [dataMessage, setDataMessage] = useState<{} | undefined | any>({})

    useEffect(() => {
        // get message detail
        const getDataMessage = async () => {
            const response : any = await apiGetMessageDetail(messageId, localStorage.getItem('jwt'))
            setDataMessage(response)
        }

        getDataMessage()
    }, [])
    return (
        <>
            <PrivateWrapper lastCurrentPage='/pesan'>
                <FormChatBox
                    messageWithId={dataMessage?.user1?.id == billing?.user?.id
                        ? dataMessage?.user2?.id
                        : dataMessage?.user1?.id
                    } // user id people who chat with you (get message detail)
                    userId={billing?.user?.id} // your id (login user)
                    messageId={messageId}
                    billing={billing}
                />
            </PrivateWrapper>
        </>
    )
}

export default connector(MessageDetail)
