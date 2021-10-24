import React, { useEffect, useState } from 'react'
import { apiGetAllIklan } from '../../utils/api'
import HeaderSearch from '../organisms/HeaderSearch'
import ListPencarian from '../organisms/ListPencarian'
import PopupSearchFilter from '../organisms/PopupSearchFilter'

const PencarianContainer : React.FC = () => {
    const [dataIklan, setDataIklan] = useState<Array<any> | undefined>()

    useEffect(() => {
        const getListIklan = async () : Promise<void> => {
          const response : any = await apiGetAllIklan()
          setDataIklan(response)
        }
        getListIklan()
      }, [])

    return (
        <div className='p-4 mb-12'>
            <div className='flex flex-row flex-nowrap'>
                <div className='flex-grow flex-shrink'>
                    <HeaderSearch isRedirect={false} />
                </div>

                <div className='flex-grow-0 flex-shrink pl-3'>
                    <PopupSearchFilter />
                </div>
            </div>

            <div className='mt-4'>
                <ListPencarian dataIklan={dataIklan} totalShow={2} />
            </div>
        </div>
    )
}

export default PencarianContainer
