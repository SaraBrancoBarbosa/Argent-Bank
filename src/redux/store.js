import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import profileSlice from "./profileSlice"
import categorySlice from "./categorySlice"
import noteSlice from "./noteSlice"

// Notre magasin de données Redux
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        profile: profileSlice.reducer,
        categories: categorySlice.reducer,
        notes: noteSlice.reducer,
    },
})