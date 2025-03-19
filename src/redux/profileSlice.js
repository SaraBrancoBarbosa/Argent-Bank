import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    firstName: "Tony",
    lastName: "Jarvis",
    isEditing: false,
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setEditing: (state, action) => {
        state.isEditing = action.payload
        },
        setUserData: (state, action) => {
        state.firstName = action.payload.firstName
        state.lastName = action.payload.lastName
        },
        cancelEdit: (state) => {
        state.firstName = initialState.firstName
        state.lastName = initialState.lastName
        state.isEditing = false
        }
    }
})

export const { setEditing, setUserData, cancelEdit } = profileSlice.actions

export default profileSlice
