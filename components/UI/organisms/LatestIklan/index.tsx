import React from 'react'
import { ILatestIklan } from '../../../utils/types'
import CardIklanFullWidth from '../../molecules/card/CardIklanFullWidth'
import HeadingWithUrl from '../../molecules/heading/HeadingWithUrl'

const LatestIklan : React.FC<ILatestIklan> = ({ totalShow = 8, dataIklan }) => {
    return (
        <div>
            <HeadingWithUrl
                title='Penawaran terbaru'
                classes='mb-3'
            />

            {dataIklan && dataIklan.filter(data => data.statusIklan == true).sort((a, b) => b.id - a.id).slice(0, totalShow)
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
        </div>
    )
}

export default LatestIklan
