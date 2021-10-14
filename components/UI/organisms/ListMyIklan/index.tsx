import React, { useState, useEffect, useMemo, ChangeEvent } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../../utils/redux/store'
import CardMyIklan from '../../molecules/card/CardMyIklan'
import FormSelect from '../../molecules/FormGroup/FormSelect'
import HeadingWithUrl from '../../molecules/heading/HeadingWithUrl'
import BlockIconText from '../../molecules/other/BlockIconText'
import Pagination from '../../molecules/other/Pagination'

const mapState = (state : RootState) => ({
    dataMyIklan: state.users.dataMyIklan
})

const mapDispatch = {
    actGetListMyIklan: () => ({ type: 'GET_LIST_MY_IKLAN' })
}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const ListMyIklan : React.FC<PropsFromRedux> = ({ dataMyIklan }) => {
    const [filterStatus, setFilterStatus] = useState<number | string>(1)
    const [currentPage, setCurrentPage] = useState<number>(0)
    const perPage = 8

    const dataFiltered : typeof dataMyIklan | null = useMemo(() => {
        return getListData(dataMyIklan)
    }, [dataMyIklan, filterStatus, currentPage])

    function getListData(data : typeof dataMyIklan | null) {
        if(!data) return null
        return data
        .filter((data : any) => data.statusIklan == filterStatus)
        .slice(currentPage * perPage, currentPage <= 0 ? perPage : perPage * currentPage * 2)
    }

    return (
        <div className='p-4'>
            <HeadingWithUrl
                title='Iklan'
                textLink='buat iklan'
                toPath='/buat-iklan'
                classes='mb-4'
            />

            <div>
                <FormSelect
                    label='status iklan'
                    list={[
                        {value: 1, text: 'aktif'},
                        {value: 0, text: 'tidak aktif'},
                    ]}
                    isSelected={filterStatus}
                    classes='mb-4'
                    onChange={(e : ChangeEvent<HTMLSelectElement>) => {
                        setFilterStatus(e.target.value)
                        setCurrentPage(0)
                    }}
                />
            </div>

            <ul>
                {dataFiltered
                ? dataFiltered.sort((a : any, b : any) => b.id - a.id).map((data : any, i : number) => (
                    <li className='mb-3' key={i}>
                        <CardMyIklan
                            name={data.judul}
                            toPath={`/iklan-saya/${data.id}-${data.judul.replaceAll(' ', '-')}`}
                            totalView={data.totalView}
                            date={data.created_at.substring(0, 10)}
                            status={data.statusIklan}
                        />
                    </li>
                ))
            : (
                <BlockIconText
                    imgUrl='/icon/icon-not-found.png'
                    description='buat iklan gratis'
                />
            )}
            </ul>

            {dataMyIklan != null && (
                <div className='mt-4'>
                    <Pagination
                        pageCount={dataMyIklan.filter((data : any) => data.statusIklan == filterStatus).length
                            && Math.ceil(dataMyIklan.filter((data : any) => data.statusIklan == filterStatus).length/perPage) || 0}
                        pageRangeDisplayed={perPage}
                        marginPagesDisplayed={perPage}
                        onPageChange={num => setCurrentPage(num.selected)} // 0 = 1
                    />
                </div>
            )}
        </div>
    )
}

export default connector(ListMyIklan)
