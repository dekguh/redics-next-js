import React, { useState, useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../../utils/redux/store'
import { IListPencarian } from '../../../utils/types'
import CardIklanFullWidth from '../../molecules/card/CardIklanFullWidth'
import BlockIconText from '../../molecules/other/BlockIconText'
import Pagination from '../../molecules/other/Pagination'

const mapState = (state : RootState) => ({
    billing: state.users.billing,
    searchProvinsi: state.search.provinsi,
    searchKabupaten: state.search.kabupaten,
    searchKecamatan: state.search.kecamatan,
    searchText: state.search.text
})


const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

const ListPencarian : React.FC<IListPencarian & PropsFromRedux> = ({ totalShow = 1, searchText, searchProvinsi, searchKabupaten, searchKecamatan, dataIklan }) => {
    const [filterDataIklan, setFilterDataIklan] = useState<Array<any> | undefined>()
    const [filterDataPaged, setFilterDataPaged] = useState<Array<any> | undefined>()
    const [pageNum, setPageNum] = useState<number| undefined>(1)
    const [currentPage, setCurrentPage] = useState<number>(0)

    return (
        <div>
            {filterDataPaged && filterDataPaged
            .sort((a, b) => b.id - a.id).map(data => (
                <div className='mb-3' key={data.id}>
                    <CardIklanFullWidth
                        title={data.judul}
                        image={data.thumbnail.url}
                        pricePerDay={data.pricePerDay}
                        location={{
                            kabupaten: data.kabupaten,
                            provinsi: data.provinsi
                        }}
                        id={data.id}
                    />
                </div>
            ))}
            {(!filterDataPaged || filterDataPaged.length <= 0) && (
            <BlockIconText
                imgUrl='/icon/icon-not-found.png'
                description='sepertinya iklan tidak ditemukan'
            />)}

            {(filterDataPaged && filterDataPaged.length >= 1 && pageNum != 0) && (<div className='mt-4'>
                <Pagination
                    pageCount={pageNum || 1}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    onPageChange={curr => setCurrentPage(curr.selected)}
                />
            </div>)}
        </div>
    )
}

export default connector(ListPencarian)
