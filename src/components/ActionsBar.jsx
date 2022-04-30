import React, { Component } from "react"
import { Link } from "react-router-dom"
class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav aria-label="breadcrumb" className="container mt-2">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={""}>Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to={"all-countries"}>All Countries</Link>
                    </li>
                </ol>
            </nav>
        )
    }
}

export default NavBar
