import { call, put, takeEvery } from 'redux-saga/effects'
import { apiGetBillingUser } from '../../api'
import { updateIsLoginAction } from '../user/action'

function* watchIsLogin() : Generator {
    const JWT = localStorage.getItem('jwt')
    if(JWT) yield put(updateIsLoginAction(true))
    if(!JWT) yield put(updateIsLoginAction(false))
}

export default function* RootSaga() : Generator {
    yield takeEvery('GET_IS_LOGIN', watchIsLogin)
}