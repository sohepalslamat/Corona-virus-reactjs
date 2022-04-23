import { createSlice } from "@reduxjs/toolkit"

export const countriesSlice = createSlice({
    name: "countries",
    initialState: {
        value: [],
    },
    reducers: {
        setCountries: (state, newValue) => {
            state.value = newValue.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCountries } = countriesSlice.actions

export default countriesSlice.reducer
