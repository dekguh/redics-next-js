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
    actGetIsLogin: () => ({ type: 'GET_IS_LOGIN' })
}

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

const PublicWrapper : React.FC<IPublicWrapper & PropsFromRedux> = ({ children, isLogin, actGetIsLogin, lastCurrentPage }) => {
    const Router : any = useRouter()

    /*useEffect(() => {
        actGetIsLogin()
    }, [])*/

    useEffect(() => {
        console.log('public wrapper run')
        isLogin === true && setTimeout(() => {
            if(Router.query.last) return Router.push(Router.query.last)
            return Router.push('/')
        }, 2000)
    }, [isLogin])

    return (
        <>
            {!isLogin
            ? children
            : <LoadingFullScreen />}
        </>
    )
}

export default connector(PublicWrapper)
