import React from 'react'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs'
import ReactPaginate, { ReactPaginateProps } from 'react-paginate'
import { IPagination } from '../../../utils/types'

const Pagination : React.FC<IPagination & ReactPaginateProps> = ({ pageCount, pageRangeDisplayed, marginPagesDisplayed, ...restProps }) => {
    return (
        <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={pageRangeDisplayed}
            marginPagesDisplayed={marginPagesDisplayed}
            containerClassName='flex flex-row flex-wrap items-center justify-center'
            pageClassName='px-1'
            pageLinkClassName='bg-white px-2 py-1 border-b-2 border-white'
            activeLinkClassName='text-blue-500 border-blue-500'
            nextLabel={<i><BsChevronDoubleRight /></i>}
            previousLabel={<i><BsChevronDoubleLeft /></i>}
            previousClassName='pr-2'
            nextClassName='pl-2'
            nextLinkClassName='text-blue-500 hover:text-blue-600'
            previousLinkClassName='text-blue-500 hover:text-blue-600'
            {...restProps}
        />
    )
}

export default Pagination
