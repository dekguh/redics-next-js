import { call, put, takeEvery } from 'redux-saga/effects'
import { apiGetBillingUser } from '../../api'
import { updateIsLoginAction, updateBillingAction } from '../user/action'

function* watchIsLogin() : Generator {
    try {
        const JWT = localStorage.getItem('jwt')
        const response : any = yield call(apiGetBillingUser, JWT)
        if(JWT) {
            yield put(updateBillingAction(response))
            yield put(updateIsLoginAction(true))
        }

        if(!JWT) {
            yield put(updateIsLoginAction(false))
            yield put(updateBillingAction(null))
        }
    } catch (err) {
        yield put(updateIsLoginAction(false))
        yield put(updateBillingAction(null))
    }
}

function* watchBillingUser() : Generator {
    try {
        const JWT = localStorage.getItem('jwt')
        const response : any = yield call(apiGetBillingUser, JWT)
        yield put(updateBillingAction(response))
    } catch (err) {
        yield put(updateBillingAction(null))
    }
}

export default function* RootSaga() : Generator {
    yield takeEvery('GET_IS_LOGIN', watchIsLogin)
    yield takeEvery('GET_BILLING', watchBillingUser)
}