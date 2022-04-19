import "./App.css"
import NavBar from "./components/NavBar"
import ActinosBar from "./components/ActionsBar"
import Home from "./pages/home"
import Check from "./pages/check"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom"

function App() {
    return (
        <div className="App">
            <NavBar />
            <Router basename="/corona-virus-reactjs">
                <ActinosBar />
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/check-yourself" element={<Check />} />
                </Routes>
            </Router>
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
        </div>
    )
}

export default App
