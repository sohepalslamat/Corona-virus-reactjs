import { useState, useEffect } from "react"
import CountriesStats from "../features/countries/CountriesStats"
import GlobalStats from "../components/GlobalStats"
import api from "../plugins/axios"
import { useSelector, useDispatch } from "react-redux"
import { fetchCountries, countries } from "../features/countries/countriesSlice"
import { Link } from "react-router-dom"

const fetchData = async () => {
    const { data: worldStat } = await api.get("worldstat.php")
    return worldStat
}

function Home() {
    const countriesFromStore = useSelector(countries)
    const dispatch = useDispatch()
    const [worldStat, setWorldStat] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.title = "Coronavirus statistics in the world"
        fetchData()
            .then(async (worldStat) => {
                countriesFromStore.length == 0 ? await dispatch(fetchCountries()) : null
                setWorldStat(worldStat)
            })
            .catch(() => {})
            .finally(() => {
                setLoading(false)
            })
    }, [dispatch])
    const show = () => {
        if (loading) {
            return <div style={{ height: "500px", fontSize: "30px" }}>Loading...</div>
        } else {
            return (
                <div>
                    <div className="row align-items-center justify-content-center text-white mx-0">
                        <GlobalStats data={worldStat} />
                    </div>
                    <div className="row align-items-center justify-content-center mx-0">
                        <CountriesStats data={countriesFromStore.slice(0, 10)} />
                    </div>
                    <Link to={"all-countries"}>See All</Link>
                </div>
            )
        }
    }
    return (
        <div className="text-center">
            <div className="row align-items-center justify-content-center text-white mx-0">
                <div className="col-8 fs-1 m-2 p-2">
                    <span className="text-black">Coronavirus statistics in the world</span>
                    <span className="bg-danger px-3 mx-1">Live</span>
                </div>
            </div>
            {show()}
        </div>
    )
}

export default Home
