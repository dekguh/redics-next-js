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
    const [filterDataIklan, setFilterDataIklan] = useState<Array<any> | undefined | null>()
    const [filterDataPaged, setFilterDataPaged] = useState<Array<any> | undefined | null>()
    const [pageNum, setPageNum] = useState<number| undefined>()
    const [currentPage, setCurrentPage] = useState<number | null>(null)

    useEffect(() => {
        const filtered = dataIklan && dataIklan.filter(data => {
            return data.statusIklan == true
            && data.provinsi.toLowerCase().indexOf(searchProvinsi.toLowerCase()) > -1
            && data.kabupaten.toLowerCase().indexOf(searchKabupaten.toLowerCase()) > -1
            && data.kecamatan.toLowerCase().indexOf(searchKecamatan.toLowerCase()) > -1
            && data.judul.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        })
        console.log('effect 1')
        setPageNum(1)
        setFilterDataIklan(filtered)
        setCurrentPage(0)
    }, [dataIklan, searchProvinsi, searchKabupaten, searchKecamatan, searchText])

    useEffect(() => {
        const filteredPagination = (filterDataIklan && currentPage != null) ? filterDataIklan.slice(currentPage * totalShow, currentPage <= 0 ? totalShow : (totalShow * currentPage) + totalShow) : null
        const totalPage = filterDataIklan ? Math.ceil(filterDataIklan.length/totalShow) : 1
        console.log({currentPage, filteredPagination, filterDataIklan})
        console.log('effect 2')
        setPageNum(totalPage)
        setFilterDataPaged(filteredPagination)
    }, [currentPage, filterDataIklan])

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
