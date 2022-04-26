import React from "react"
import { Outlet } from "react-router-dom"
import ActionsBar from "../components/ActionsBar"
import NavBar from "../components/NavBar"

const Layout = () => {
    return (
        <>
            <NavBar />
            <ActionsBar />
            <Outlet />
            <div className="bg-light bg-gradien-500 py-4">
                © 2022 — Reactjs — Made with 💜 by{" "}
                <a
                    href="https://www.linkedin.com/in/sohep-alslamat"
                    target="_blank"
                    rel="noreferrer"
                >
                    Sohaib Alslamat
                </a>
            </div>
        </>
    )
}

export default Layout
