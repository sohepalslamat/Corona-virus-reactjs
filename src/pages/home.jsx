import React, { Component } from "react"

class Home extends Component {
    state = {}
    render() {
        return (
            <div className="row align-items-center justify-content-center text-white">
                <div className="col-8 fs-1 m-2 p-2">
                    <span className="text-black">
                        Corona statistics in the world
                    </span>
                    <span className="bg-danger px-3 mx-1">Live</span>
                </div>
                <div className="col-5 m-2 bg-primary card p-2">
                    <div className="card-title fs-3">Total Injuries</div>
                    <div className="card-title fs-3">500000</div>
                </div>
                <div className="col-5 m-2 bg-secondary card p-2">
                    <div className="card-title fs-3">Total Deaths</div>
                    <div className="card-title fs-3">500000</div>
                </div>
                <div className="col-5 m-2 bg-success card p-2">
                    <div className="card-title fs-3">Recovery Cases</div>
                    <div className="card-title fs-3">500000</div>
                </div>
                <div className="col-5 m-2 bg-danger card p-2">
                    <div className="card-title fs-3">Deaths Today</div>
                    <div className="card-title fs-3">500000</div>
                </div>
            </div>
        )
    }
}

export default Home
