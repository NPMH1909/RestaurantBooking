import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import RestaurantDetailPage from './pages/RestaurantDetailPage.jsx'
import RestaurantPage from './pages/RestaurantPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/restaurants" element={<RestaurantPage />} />
        <Route path="/restaurant/:id" element={<RestaurantDetailPage />} />

      </Routes>
    </BrowserRouter>
)
}

export default App
