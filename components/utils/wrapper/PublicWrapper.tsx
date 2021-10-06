import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import LoadingFullScreen from '../../UI/organisms/Loading/LoadingFullScreen'
import { RootState } from '../redux/store'
import { IPublicWrapper } from '../types'
import { useRouter } from 'next/router'

const mapState = (state : RootState) => ({
    isLogin: state.users.isLogin
})

const mapDispatch = {
    actGetIsLogin: () => ({ type: 'GET_IS_LOGIN' }),
    actGetBilling: () => ({ type: 'GET_BILLING' })
}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const PublicWrapper : React.FC<IPublicWrapper & PropsFromRedux> = ({ children, isLogin, actGetIsLogin, actGetBilling }) => {
    const Router = useRouter()

    useEffect(() => {
        actGetIsLogin()
    }, [])

    useEffect(() => {
        isLogin === true && setTimeout(() => {
            actGetBilling()
            Router.push('/')
        }, 2000)
    }, [isLogin])

    // goal : if isLogin true redirect to last current page
    return (
        <>
            {!isLogin
            ? children
            : <LoadingFullScreen />}
        </>
    )
}

export default connector(PublicWrapper)
