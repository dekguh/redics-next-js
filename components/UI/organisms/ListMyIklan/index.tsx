import React from 'react'
import HeadingWithUrl from '../../molecules/heading/HeadingWithUrl'

const ListMyIklan = () => {
    return (
        <div className='p-4'>
            <HeadingWithUrl
                title='Iklan'
                textLink='buat iklan'
                toPath='/buat-iklan'
            />
        </div>
    )
}

export default ListMyIklan
