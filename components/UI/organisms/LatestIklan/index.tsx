import React, { useState, useEffect } from 'react'
import { apiGetAllIklan } from '../../../utils/api'
import { ILatestIklan } from '../../../utils/types'
import CardIklanFullWidth from '../../molecules/card/CardIklanFullWidth'
import HeadingWithUrl from '../../molecules/heading/HeadingWithUrl'

const LatestIklan : React.FC<ILatestIklan> = ({ totalShow = 8 }) => {
    const [dataIklan, setDataIklan] = useState<Array<any> | undefined>()

  useEffect(() => {
    const getListIklan = async () : Promise<void> => {
      const response : any = await apiGetAllIklan()
      setDataIklan(response)
    }
    getListIklan()
  }, [])

    return (
        <div>
            <HeadingWithUrl
                title='Iklan terbaru'
                classes='mb-3'
            />

            {dataIklan && dataIklan.slice(0, totalShow).sort((a, b) => b.id - a.id).map(data => (
                <div className='mb-3' key={data.id}>
                    <CardIklanFullWidth
                        title={data.judul}
                        image={data.thumbnail.url}
                        pricePerDay={data.pricePerDay}
                        location={{
                            kabupaten: data.kabupaten,
                            provinsi: data.provinsi
                        }}
                    />
                </div>
            ))}
        </div>
    )
}

export default LatestIklan
