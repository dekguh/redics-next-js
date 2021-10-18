import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import Navigation from '../../UI/organisms/Navigation'
import PopupBilling from '../../UI/template/PopupBilling'
import { RootState } from '../redux/store'
import { IAppWrapper } from '../types'
import 'react-multi-carousel/lib/styles.css'

const mapState = (state : RootState) => ({
    billing: state.users.billing,
    isLogin: state.users.isLogin
})

const mapDispatch = {
    actGetListMyIklan: () => ({ type: 'GET_LIST_MY_IKLAN' }),
    actGetIsLogin: () => ({ type: 'GET_IS_LOGIN' }),
    actGetBilling: () => ({ type: 'GET_BILLING' })
}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const AppWrapper : React.FC<IAppWrapper & PropsFromRedux> = ({ children, billing, isLogin, actGetListMyIklan, actGetIsLogin }) => {
    useEffect(() => {
        actGetIsLogin()
    }, [])

    useEffect(() => {
        if(isLogin) actGetListMyIklan()
    }, [isLogin])

    return (
        <div>
            {children}
            <Navigation />
            {(isLogin && !billing) && (<PopupBilling />)}
        </div>
    )
}

export default connector(AppWrapper)
