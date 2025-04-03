import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// To get the token from the localStorage or the sessionStorage
const storedToken = localStorage.getItem("token") ?? sessionStorage.getItem("token") ?? null

export const login = createAsyncThunk(
    "user/login",
    async(userCredentials) => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: userCredentials.username,
                    password: userCredentials.password,
                }),
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            const data = await response.json()
            
            // To get the token
            const token = data.body?.token

            return { token, rememberMe:userCredentials.rememberMe}
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
)

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        loading: false,
        token: storedToken,
        error: null
    },
    reducers: {
        // To clear the token
        logOut: (state) => {
            state.token = null
            localStorage.removeItem("token")
            sessionStorage.removeItem("token")
        }
    },
    // To add reducers outside of the slice
    extraReducers:(builder) => {
        builder.addCase(login.pending,(state) => {
            state.loading = true
            state.token = null
            state.error = null
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.token = action.payload.token
            state.error = null
            // To add the token to the right storage according to "Remember me"
            if(action.payload.rememberMe) {
                localStorage.setItem("token", action.payload.token)
            }
            sessionStorage.setItem("token", action.payload.token)
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false
            state.token = null
            console.log(action.error.message)
            if (action.error.message === "Request failed with status code 401") {
                state.error = "Access denied :( Invalid Credentials"
            } else {
                state.error = action.error.message
            }
        })
    }
})

export const { logOut } = tokenSlice.actions

export default tokenSlice