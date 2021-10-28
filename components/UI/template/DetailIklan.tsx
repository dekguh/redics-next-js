import React, { useEffect, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { apiGetAllIklan, apiGetSingleIklanNoJwt } from '../../utils/api'
import { RootState } from '../../utils/redux/store'
import { IDetailIklan } from '../../utils/types'
import DetailIklanContainer from '../organisms/DetailIklanContainer'
import IklanNearby from '../organisms/IklanNearby'

const mapState = (state : RootState) => ({
    billing: state.users.billing
})

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

const DetailIklan : React.FC<IDetailIklan & PropsFromRedux> = ({ title, billing }) => {
    const [dataIklan, setDataIklan] = useState<Array<any> | undefined>()
    const [dataSingleIklan, setDataSingleIklan] = useState<{} | undefined>()

    useEffect(() => {
        const getListIklan = async () : Promise<void> => {
          const response : any = await apiGetAllIklan()
          setDataIklan(response)
        }
        getListIklan()
      }, [])

    useEffect(() => {
        const getSingleData = async (id : number | string) => {
            const response : any = await apiGetSingleIklanNoJwt(id)
            setDataSingleIklan(response)
        }

        const splitTitle = title && title.split('-')
        if(Array.isArray(splitTitle)) {
            getSingleData(splitTitle[0])
        }
    }, [title])

    console.log(dataSingleIklan)

    return (
        <div className='p-4 mb-12'>
            <DetailIklanContainer dataSingleIklan={dataSingleIklan} />

            <div className='mt-5'>
                {billing && (
                <IklanNearby
                    classes='mt-4 mb-4'
                    billing={billing}
                    dataIklan={dataIklan}
                />)}
            </div>
        </div>
    )
}

export default connector(DetailIklan)
