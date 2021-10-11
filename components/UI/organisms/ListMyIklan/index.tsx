import React from 'react'
import { dataListMyIklan } from '../../../utils/data'
import CardMyIklan from '../../molecules/card/CardMyIklan'
import HeadingWithUrl from '../../molecules/heading/HeadingWithUrl'

const ListMyIklan = () => {
    return (
        <div className='p-4'>
            <HeadingWithUrl
                title='Iklan'
                textLink='buat iklan'
                toPath='/buat-iklan'
                classes='mb-4'
            />

            <ul>
                {dataListMyIklan.length && dataListMyIklan.map((data, i) => (
                    <li className='mb-3' key={i}>
                        <CardMyIklan
                            name={data.nama}
                            toPath={'/iklan-saya/dekguh-13-kursi-roda-aluminium'}
                            totalView={data.totalView}
                            date={data.date}
                            status={data.status}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListMyIklan
