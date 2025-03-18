import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Homepage from "./pages/homepage/Homepage"
import LoginPage from "./pages/login/Login"
import Error from "./pages/error/Error"
import ProfileLayout from "./pages/user/layouts/ProfileLayout"
import ProfilePage from "./pages/user/Profile"
import TransactionPage from "./pages/user/transaction/Transaction"

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="*" element={<Error />} />

                <Route path="profile" element={<ProfileLayout />}>
                  <Route index element={<ProfilePage />} />
                  <Route path="transaction" element={<TransactionPage />} /> 
                </Route>

            </Route>
        </Routes>
    </Router>
  )
}

export default AppRouter
