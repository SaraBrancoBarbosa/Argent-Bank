import { createSlice } from "@reduxjs/toolkit"

const categorySlice = createSlice({
    name: "categories",
    initialState: [
        { id: 1, name: "Food" },
        { id: 2, name: "Transport" },
        { id: 3, name: "Entertainment" },
    ],
    reducers: {
        setCategories: (state, action) => {
            return action.payload
        },
        modifyCategory: (state, action) => {
        const categoryIndex = state.findIndex(category => category.id === action.payload.id)
        if (categoryIndex !== -1) {
            state[categoryIndex].name = action.payload.name
        }
        }
    }
})

export const { setCategories, modifyCategory } = categorySlice.actions

export default categorySlice
