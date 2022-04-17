import CountriesStats from "../components/CountriesStats"
import GlobalStats from "../components/GlobalStats"

function Home() {
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
            <div className="row align-items-center justify-content-center text-white">
                <GlobalStats />
            </div>
            <div className="row align-items-center justify-content-center my-2">
                <CountriesStats />
            </div>
        </div>
    )
}

export default Home
