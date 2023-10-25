import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import { useSelector } from 'react-redux'
import Login from './pages/Login'

export default function App() {
  const name = useSelector((state) => state.user.name)
  return (
    <Routes>
      <Route element={name !== '' ? <Outlet /> : <Navigate to="/login" />}>
        <Route path="/" element={<About />} />
      </Route>
      <Route element={name === '' ? <Outlet /> : <Navigate to="/" />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}
