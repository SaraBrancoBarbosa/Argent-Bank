import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Homepage from "./pages/homepage/Homepage"
import SignInPage from "./pages/signIn/SignIn"
import UserPage from "./pages/user/User"
import TransactionPage from "./pages/user/transaction/Transaction"
import UserLayout from "./pages/user/layouts/UserLayout"

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
                <Route path="sign-in" element={<SignInPage />} />

                <Route path="user" element={<UserLayout />}>
                  <Route index element={<UserPage />} />
                  <Route path="transaction" element={<TransactionPage />} /> 
                </Route>

            </Route>
        </Routes>
    </Router>
  )
}

export default AppRouter
