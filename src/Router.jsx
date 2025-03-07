import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Homepage from "./pages/homepage/Homepage"

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRouter
