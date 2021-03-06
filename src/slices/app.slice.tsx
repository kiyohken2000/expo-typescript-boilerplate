/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

export type State = {
  checked: boolean;
  loggedIn: boolean;
  me: object;
};

// ------------------------------------
// Constants
// ------------------------------------

const initialState: State = {
  checked: false,
  loggedIn: false,
  me: {},
}

// ------------------------------------
// Slice
// ------------------------------------

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    authenticate: (state, { payload }) => {
      state.loggedIn = payload.loggedIn
      state.checked = payload.checked
    },
    saveMe: (state, { payload }) => {
      state.me = payload.me
    },
  },
})

export const { authenticate, saveMe } = appSlice.actions

export default appSlice.reducer
