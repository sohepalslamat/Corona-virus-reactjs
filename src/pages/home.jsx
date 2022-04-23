import { useState, useEffect } from "react"
import CountriesStats from "../features/countries/CountriesStats"
import GlobalStats from "../components/GlobalStats"
import api from "../plugins/axios"
import { useSelector, useDispatch } from "react-redux"
import { setCountries } from "../features/countries/countriesSlice"

const fetchData = async () => {
    const [{ data: countries }, { data: worldStat }] = await Promise.all([
        api.get("cases_by_country.php"),
        api.get("worldstat.php"),
    ])
    return { countries, worldStat }
}

function Home() {
    const countries = useSelector((state) => state.countries.value)
    const dispatch = useDispatch()
    // const [countries, setCountries] = useState(null)
    const [worldStat, setWorldStat] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.title = "Corona statistics in the world"
        fetchData()
            .then(({ countries, worldStat }) => {
                dispatch(setCountries(countries.countries_stat))
                setWorldStat(worldStat)
            })
            .catch(() => {})
            .finally(() => {
                setLoading(false)
            })
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
                <div>
                    <div className="row align-items-center justify-content-center text-white mx-0">
                        <GlobalStats data={worldStat} />
                    </div>
                    <div className="row align-items-center justify-content-center mx-0">
                        <CountriesStats data={countries} />
                    </div>
                </div>
            )
        }
    }
    return (
        <div>
            <div className="row align-items-center justify-content-center text-white mx-0">
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
