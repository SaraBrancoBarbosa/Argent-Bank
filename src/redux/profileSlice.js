import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getProfile = createAsyncThunk(
    "user/profile/get",
    async(token) => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+token
                },
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            const data = await response.json()

            return data.body
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
)

export const editProfile = createAsyncThunk(
    "user/profile/put",
    async(profile) => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer "+profile.token
                },
                body: JSON.stringify({
                    "firstName": profile.firstName,
                    "lastName": profile.lastName,
                }),
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            const data = await response.json()
            console.log(data)

            return profile
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
)

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        firstName: null,
        lastName: "",
    },
    extraReducers:(builder) => {
        builder.addCase(getProfile.pending,(state) => {
            state.loading = true
            state.firstName = null
            state.lastName = null
            state.error = null
        })
        .addCase(getProfile.fulfilled, (state, action) => {
            state.loading = false
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.error = null
        })
        .addCase(getProfile.rejected, (state, action) => {
            state.loading = false
            state.firstName = null
            state.lastName = null
            console.log(action.error.message)
            state.error = action.error.message
        })
        .addCase(editProfile.pending,(state) => {
            state.loading = true
            state.error = null
        })
        .addCase(editProfile.fulfilled, (state, action) => {
            state.loading = false
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.error = null
        })
        .addCase(editProfile.rejected, (state, action) => {
            state.loading = false
            console.log(action.error.message)
            state.error = action.error.message
        })
    }
})

export const { setEditing, setUserData, cancelEdit } = profileSlice.actions

export default profileSlice
