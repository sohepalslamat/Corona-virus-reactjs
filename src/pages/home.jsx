import { useState, useEffect } from "react"
import CountriesStats from "../components/CountriesStats"
import GlobalStats from "../components/GlobalStats"
import api from "../plugins/axios"

const fetchData = async () => {
    const [{ data: countries }, { data: worldStat }] = await Promise.all([
        api.get("cases_by_country.php"),
        api.get("worldstat.php"),
    ])
    return { countries, worldStat }
}

function Home() {
    const [countries, setCountries] = useState(null)
    const [worldStat, setWorldStat] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData()
            .then(({ countries, worldStat }) => {
                setCountries(countries.countries_stat)
                setWorldStat(worldStat)
            })
            .catch(() => {})
            .finally(() => {
                setLoading(false)
            })
    }, [])
    const show = () => {
        if (loading) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <div className="row align-items-center justify-content-center text-white">
                        <GlobalStats data={worldStat} />
                    </div>
                    <div className="row align-items-center justify-content-center my-2">
                        <CountriesStats data={countries} />
                    </div>
                </div>
            )
        }
    }
    return (
        <div>
            <div className="row align-items-center justify-content-center text-white">
                <div className="col-8 fs-1 m-2 p-2">
                    <span className="text-black">
                        Corona statistics in the world
                    </span>
                    <span className="bg-danger px-3 mx-1">Live</span>
                </div>
            </div>
            {show()}
        </div>
    )
}

export default Home
