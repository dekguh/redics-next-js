import React, { useEffect } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import LoadingFullScreen from '../../UI/organisms/Loading/LoadingFullScreen'
import { RootState } from '../redux/store'
import { IPrivateWrapper } from '../types'
import { useRouter } from 'next/router'

const mapState = (state : RootState) => ({
    isLogin: state.users.isLogin
})

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

const PrivateWrapper : React.FC<IPrivateWrapper & PropsFromRedux> = ({ children, isLogin, lastCurrentPage }) => {
    const Router = useRouter()

    useEffect(() => {
        isLogin === false && setTimeout(() => Router.push(`/login?last=${lastCurrentPage}`), 2000)
    }, [isLogin])

    return (
        <div>
            {isLogin
            && children}
        </div>
    )
}

export default connector(PrivateWrapper)
