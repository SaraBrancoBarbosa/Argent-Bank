import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Homepage from "./pages/homepage/Homepage"
import SignInPage from "./pages/signIn/SignIn"

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="sign-in" element={<SignInPage />} />
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRouter
