import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import SignUpPage from "./pages/SignUpPage"
import SignInPage from "./pages/SignInPage"
import AccountPage from "./pages/AccountPage"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {

  return (
    <>
      <Navbar />
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/account' element={
        <ProtectedRoute>
          <AccountPage />
        </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
