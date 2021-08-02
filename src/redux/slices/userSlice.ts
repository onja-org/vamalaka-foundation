import React from 'react'
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { registerMutation, sendQuery } from '../../graphqlHelper'
import { RootState } from '../store'

type FetchUserError = {
  message: string
}

export const fetchRegisterUser = createAsyncThunk<
  any,
  {
    username: string
    password: string
    email: string
    confirmPassword: string
    role: string
  },
  { rejectValue: FetchUserError }
>(
  'login/fetch',
  async (
    payload: {
      username: string
      password: string
      email: string
      confirmPassword: string
      role: string
    },
    thunkApi
  ) => {
    const { username, password, email, confirmPassword, role } = payload
    const response = await sendQuery(
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
  }
)

export const userSlice = createSlice({
  name: 'counter',
  initialState: {
    user: null,
    status: '',
    error: null as FetchUserError | null,
  },
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

export const selectUser = (state: RootState) => state.user
export const userSelector = createSelector<RootState, any[], any[]>(
  selectUser,
  (user) => user
)

export default userSlice.reducer
