import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

// To get the token from the localStorage or the sessionStorage
const tokenLS = localStorage.getItem("token") ?? null
const tokenSS = sessionStorage.getItem("token") ?? null

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

            if(userCredentials.rememberMe) {
                // If "Remember me" is checked
                localStorage.setItem("token", token)
            } 
            sessionStorage.setItem("token", token)

            return token
            
        } catch (error) {
            throw new Error(error.message)
        }
    }
)

const tokenSlice = createSlice({
    name: "token",
    initialState: {
        loading: false,
        // Priority given to sessionStorage, then localStorage
        token: tokenSS ?? tokenLS,
        error: null
    },
    reducers: {
        // To explicitly manipulate the token
        setToken: (state, action) => {
            state.token = action.payload
        },
        clearToken: (state) => {
            state.token = null
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
            state.token = action.payload
            state.error = null
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

export const { setToken, clearToken } = tokenSlice.actions

export default tokenSlice