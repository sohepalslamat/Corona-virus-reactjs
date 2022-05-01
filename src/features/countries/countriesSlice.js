import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../plugins/axios"

export const fetchCountries = createAsyncThunk("countries/fetchCountries", async () => {
    const { data: countries } = await api.get("cases_by_country.php")

    return countries.countries_stat
})

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
    extraReducers(builder) {
        builder.addCase(fetchCountries.fulfilled, (state, action) => {
            state.value = action.payload
        })
    },
})

// Action creators are generated for each case reducer function
export const { setCountries } = countriesSlice.actions
export const countries = (state) => state.countries.value

export default countriesSlice.reducer
