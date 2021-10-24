import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../utils/redux/store'
import HeaderSearch from '../organisms/HeaderSearch'
import IklanNearby from '../organisms/IklanNearby'
import LatestIklan from '../organisms/LatestIklan'

const mapState = (state : RootState) => ({
    billing: state.users.billing
})

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

const Beranda : React.FC<PropsFromRedux> = ({ billing }) => {
    return (
        <div className='p-4 mb-12'>
            <HeaderSearch isRedirect={true} />

            {billing && (
            <IklanNearby
                classes='mt-4 mb-4'
                billing={billing}
            />)}

            <LatestIklan
                totalShow={8}
            />
        </div>
    )
}

export default connector(Beranda)
