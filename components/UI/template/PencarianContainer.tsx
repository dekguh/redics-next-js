import React from 'react'
import Pagination from '../molecules/other/Pagination'
import { HeaderSearch } from '../organisms/HeaderSearch/HeaderSearch.stories'
import ListPencarian from '../organisms/ListPencarian'
import PopupSearchFilter from '../organisms/PopupSearchFilter'

const PencarianContainer : React.FC = () => {
    return (
        <div className='p-4 mb-12'>
            <div className='flex flex-row flex-nowrap'>
                <div className='flex-grow flex-shrink'>
                    <HeaderSearch />
                </div>

                <div className='flex-grow-0 flex-shrink pl-3'>
                    <PopupSearchFilter />
                </div>
            </div>

            <div className='mt-4'>
                <ListPencarian />
            </div>

            <div className='mt-4'>
                <Pagination
                    pageCount={10}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                />
            </div>
        </div>
    )
}

export default PencarianContainer
