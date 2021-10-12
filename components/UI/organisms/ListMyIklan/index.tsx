import React, { useMemo, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../../utils/redux/store'
import CardMyIklan from '../../molecules/card/CardMyIklan'
import HeadingWithUrl from '../../molecules/heading/HeadingWithUrl'

const mapState = (state : RootState) => ({
    dataMyIklan: state.users.dataMyIklan
})

const mapDispatch = {
    actGetListMyIklan: () => ({ type: 'GET_LIST_MY_IKLAN' })
}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const ListMyIklan : React.FC<PropsFromRedux> = ({ actGetListMyIklan, dataMyIklan }) => {
    useEffect(() => {
        actGetListMyIklan()
    }, [])

    const dataList = useMemo(() => {
        return dataMyIklan
    }, [dataMyIklan])

    return (
        <div className='p-4'>
            <HeadingWithUrl
                title='Iklan'
                textLink='buat iklan'
                toPath='/buat-iklan'
                classes='mb-4'
            />

            <ul>
                {dataMyIklan?.length && dataMyIklan.map((data : any, i : number) => (
                    <li className='mb-3' key={i}>
                        <CardMyIklan
                            name={data.judul}
                            toPath={'/iklan-saya/dekguh-13-kursi-roda-aluminium'}
                            totalView={data.totalView}
                            date={data.created_at.substring(0, 10)}
                            status={data.statusIklan}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default connector(ListMyIklan)
