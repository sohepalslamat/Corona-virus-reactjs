import "./App.css"
import Home from "./pages/home"
import Check from "./pages/check"
import Layout from "./pages/layout"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
    return (
        <div className="App">
            <Router basename="/corona-virus-reactjs">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
                        <Route exact path="" element={<Home />} />
                        <Route
                            exact
                            path="check-yourself"
                            element={<Check />}
                        />
                    </Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App
