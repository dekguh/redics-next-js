import { Store } from 'redux'
import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import { Context, createWrapper } from 'next-redux-wrapper'
import RootSaga from './sagas/RootSaga'
import { reduce as userReducer } from './user/reduce'
import { TUserInitState } from '../types'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        users: userReducer
    },
    middleware: [sagaMiddleware]
})

const makeStore = (context : Context) => store

sagaMiddleware.run(RootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const wrapper = createWrapper<typeof store>(makeStore, { debug: true })