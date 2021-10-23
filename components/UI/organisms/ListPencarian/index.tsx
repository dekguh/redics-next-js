import React, { useState, useEffect } from 'react'
import { apiGetAllIklan } from '../../../utils/api'
import { IListPencarian } from '../../../utils/types'
import CardIklanFullWidth from '../../molecules/card/CardIklanFullWidth'

const ListPencarian : React.FC<IListPencarian> = ({ totalShow = 8, pageNum }) => {
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
            {dataIklan && dataIklan.filter(data => data.statusIklan == true).slice(0, totalShow)
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
                    />
                </div>
            ))}
        </div>
    )
}

export default ListPencarian
