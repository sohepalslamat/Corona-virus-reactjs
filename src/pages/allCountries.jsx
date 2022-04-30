import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import CountriesStats from "../features/countries/CountriesStats"
import { fetchCountries, countries } from "../features/countries/countriesSlice"

function Countries() {
    const countriesFromStore = useSelector(countries)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        document.title = `All Countries`
        window.scrollTo(0, 0)
        if (countriesFromStore.length == 0) {
            dispatch(fetchCountries()).then(() => {
                setLoading(false)
            })
        } else setLoading(false)

        return function cleanup() {}
    }, [])
    const show = () => {
        if (loading) {
            return (
                <div style={{ height: "500px", fontSize: "30px" }}>
                    Loading...
                </div>
            )
        } else {
            return (
                <div className="row align-items-center justify-content-center mx-0">
                    <CountriesStats data={countriesFromStore} />
                </div>
            )
        }
    }

    return (
        <div>
            <div className="mt-5">{show()}</div>
        </div>
    )
}

export default Countries
