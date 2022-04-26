import React, { Component } from "react"
import { Link } from "react-router-dom"
class NavBar extends Component {
    state = {}
    render() {
        return (
            <nav aria-label="breadcrumb" className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to={""}>Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                        <Link to={"check-yourself"}>Check Yourself</Link>
                    </li>
                </ol>
            </nav>
        )
    }
}

export default NavBar
