import { combineReducers } from '@reduxjs/toolkit'
import adsReducer from './slices/adsSlice'
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

export const history = createBrowserHistory()

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    ads: adsReducer,
  })

export const store = (function configureStore() {
  const store = createStore(
    createRootReducer(history),
    compose(applyMiddleware(routerMiddleware(history), thunk))
  )
  return store
})()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
