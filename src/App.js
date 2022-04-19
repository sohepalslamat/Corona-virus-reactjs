import "./App.css"
import NavBar from "./components/NavBar"
import ActinosBar from "./components/ActionsBar"
import Home from "./pages/home"
import Check from "./pages/check"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    return (
        <div className="App">
            <NavBar />
            <Router basename="/corona-virus-reactjs">
                <ActinosBar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/check-yourself" element={<Check />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
