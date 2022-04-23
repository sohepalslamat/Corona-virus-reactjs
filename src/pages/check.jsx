import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import CountriesStats from "../features/countries/CountriesStats"

function Check() {
    const countries = useSelector((state) => state.countries.value)
    useEffect(() => {
        document.title = `Check Yourself`
        return function cleanup() {}
    }, [])

    return (
        <div>
            <div className="mt-5">
                <div className="row align-items-center justify-content-center mx-0">
                    <CountriesStats data={countries} />
                </div>
            </div>
        </div>
    )
}

export default Check
