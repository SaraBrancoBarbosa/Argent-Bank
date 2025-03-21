import { configureStore } from "@reduxjs/toolkit"
import tokenSlice from "./tokenSlice"
import profileSlice from "./profileSlice"

export const store = configureStore({
    reducer: {
        token: tokenSlice.reducer,
        profile: profileSlice.reducer,
    },
})