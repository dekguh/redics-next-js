import React, { useState, useEffect } from 'react'
import { ConnectedProps, connect } from 'react-redux'
import { apiGetAllListMessage } from '../../../utils/api'
import { RootState } from '../../../utils/redux/store'
import CardListPesan from '../../molecules/card/CardListPesan'
import HeadingWithUrl from '../../molecules/heading/HeadingWithUrl'

const mapState = (state : RootState) => ({
    billing: state.users.billing
})
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

const ListPesan : React.FC<PropsFromRedux> = ({ billing }) => {
    const [dataPesan, setDataPesan] = useState<Array<any> | undefined | null>()
    useEffect(() => {
        const getDataPesan = async () => {
            const res : any = await apiGetAllListMessage(localStorage.getItem('jwt'))
            setDataPesan(res)
        }
        getDataPesan()
    }, [])
    return (
        <div className='p-4 mb-12'>
            <HeadingWithUrl
                title='Pesan Saya'
                classes='mb-3'
            />

            <ul>
                {dataPesan && dataPesan.map((data, i) => (
                    <li key={i} className='mb-2'>
                        <CardListPesan
                            name={data.user1.id == billing.user.id ? data.user2.username : data.user1.username}
                            message={data.text_messages.length ? data.text_messages[data.text_messages.length-1].content : 'tidak ada pesan'}
                            url={`/pesan/${data.id}`}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default connector(ListPesan)
