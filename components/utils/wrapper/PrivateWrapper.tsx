import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import LoadingFullScreen from '../../UI/organisms/Loading/LoadingFullScreen'
import { RootState } from '../redux/store'
import { IPrivateWrapper } from '../types'
import { useRouter } from 'next/router'

const mapState = (state : RootState) => ({
    isLogin: state.users.isLogin
})

const mapDispatch = {
    actGetIsLogin: () => ({ type: 'GET_IS_LOGIN' }),
    actGetBilling: () => ({ type: 'GET_BILLING' }),
}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const PrivateWrapper : React.FC<IPrivateWrapper & PropsFromRedux> = ({ children, isLogin, actGetIsLogin, actGetBilling, lastCurrentPage }) => {
    const Router = useRouter()
    // test localstorage jwt
    //localStorage.setItem('jwt', 'test')
    //localStorage.removeItem('jwt')

    useEffect(() => {
        actGetIsLogin()
    }, [])

    useEffect(() => {
        console.log(lastCurrentPage)
        isLogin === true && actGetBilling()
        isLogin === false && setTimeout(() => Router.push(`/login?last=${lastCurrentPage}`), 2000)
    }, [isLogin])

    return (
        <div>
            {isLogin
            ? children
            : (<LoadingFullScreen />)}
        </div>
    )
}

export default connector(PrivateWrapper)
