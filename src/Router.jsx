import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Homepage from "./pages/homepage/Homepage"
import SignInPage from "./pages/signIn/SignIn"
import UserPage from "./pages/user/User"

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="sign-in" element={<SignInPage />} />
                <Route path="user" element={<UserPage />} />
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRouter
