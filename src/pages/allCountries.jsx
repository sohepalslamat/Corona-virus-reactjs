import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import CountriesStats from "../features/countries/CountriesStats"
import { fetchCountries, countries } from "../features/countries/countriesSlice"

function Countries() {
    const countriesFromStore = useSelector(countries)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState("")

    useEffect(() => {
        document.title = `All Countries`
        window.scrollTo(0, 0)
        // fetch data
        if (countriesFromStore.length == 0) {
            dispatch(fetchCountries()).then(() => {
                setLoading(false)
            })
        } else setLoading(false)
        return function cleanup() {}
    }, [])
    const show = () => {
        const [countriesFromSearch, setCountriesFromSearch] = useState(countriesFromStore)
        useEffect(() => {
            setLoading(true)
            debounceSearch(countriesFromStore, search)
                .then((res) => {
                    setCountriesFromSearch(res)
                })
                .catch(() => {})
                .finally(() => {
                    setLoading(false)
                })
        }, [search])

        if (loading) {
            return (
                <div style={{ height: "500px", fontSize: "20px" }} className="mt-5">
                    Loading...
                </div>
            )
        } else {
            if (countriesFromSearch && countriesFromSearch.length !== 0) {
                return (
                    <div style={{ minHeight: "500px" }} className="row justify-content-center mx-0">
                        <CountriesStats data={countriesFromSearch} />
                    </div>
                )
            } else
                return (
                    <div style={{ height: "500px", fontSize: "20px" }} className="mt-5">
                        No Data
                    </div>
                )
        }
    }

    const searchDiv = () => {
        return (
            <div className="row mb-1 justify-content-center justify-content-md-start col-11 col-md-6">
                <label className="col-2 col-form-label align-self-center">Search</label>
                <input
                    type="text"
                    value={search}
                    onChange={(v) => {
                        setSearch(v.target.value)
                    }}
                    className="col-12 col-sm-10 col-form-label"
                />
            </div>
        )
    }

    return (
        <div>
            <div className="row align-items-center justify-content-center">{searchDiv()}</div>
            <div className="mt-1 text-center">{show()}</div>
        </div>
    )
}
/// pure function to search with time out
const debounceSearch = (countries, search) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (!search) resolve(countries)
            else {
                const d = countries.filter((e) => e.country_name.toLowerCase().includes(search.toLowerCase()))
                d.length === 0 ? resolve([]) : resolve(d)
            }
        }, 1000)
    })
}

export default Countries
