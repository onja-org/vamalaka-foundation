import React from 'react'
import {
  createAsyncThunk,
  createSelector,
  createSlice,
  Reducer,
} from '@reduxjs/toolkit'
import { registerMutation, sendMutation, sendQuery } from '../../graphqlHelper'
import { AppDispatch, RootState } from '../store'
import { any } from 'cypress/types/bluebird'

type FetchUserError = {
  message: string
}

interface UserData {
  username: string
}

interface UserRegisterForm {
  username: string
  password: string
  email: string
  confirmPassword: string
  role: string
}

export const fetchRegisterUser = createAsyncThunk<
  UserData,
  UserRegisterForm,
  {
    dispatch: any
    state: RootState
    rejectValue: FetchUserError
  }
>('login/fetch', async (userRegistrationFormData, thunkApi) => {
  const {
    username,
    password,
    email,
    confirmPassword,
    role,
  } = userRegistrationFormData
  const response = await sendMutation(
    registerMutation(username, password, email, confirmPassword, role)
  )
  console.log(response?.data?.data)

  const user = response?.data?.data
  if (response.status !== 200) {
    return thunkApi.rejectWithValue({
      message: 'Failed to fetch todos.',
    })
  }

  return user
})

const initialState = {
  user: {},
  status: '',
  error: null as FetchUserError | null,
}

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegisterUser.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })

    builder.addCase(fetchRegisterUser.fulfilled, (state, { payload }) => {
      state.user = payload
      state.status = 'idle'
    })

    builder.addCase(fetchRegisterUser.rejected, (state, { payload }) => {
      if (payload) state.error = payload
      state.status = 'idle'
    })
  },
})

export const selectUser = (state: RootState) => state.user.user
export const userSelector = createSelector<RootState, any, any>(
  selectUser,
  (user) => user
)

export default userSlice.reducer
