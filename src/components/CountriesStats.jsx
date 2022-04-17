import { useState, useEffect } from "react"
import api from "../plugins/axios"

const fetchData = async () => {
    const { data } = await api.get("cases_by_country.php")
    return data
}

const CountriesStats = () => {
    const [countries, setCountries] = useState(null)

    useEffect(() => {
        fetchData()
            .then((result) => {
                setCountries(result.countries_stat)
            })
            .catch(() => {})
    }, [])
    return (
        <div>
            <div>{countries ? showList(countries) : <div>Loading...</div>}</div>
        </div>
    )
}

function showList(items) {
    const newItems = []
    for (const item of items) {
        const element = (
            <li key={item.country_name}>
                {item.country_name}:{item.cases}
            </li>
        )
        newItems.push(element)
    }
    return <ul>{newItems}</ul>
}

export default CountriesStats
