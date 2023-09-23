import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Admin from './Components/Admin/Admin'
import Staff from './Components/Staff/Staff'
import About from './Components/About/About'
import Complaint from './Components/Complaint/Complaint'
import Contact from './Components/Contact/Contact'
import Profile from './Components/Profile/Profile'
import Navbar from './Components/Navbar/Navbar'
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/about" element={<About />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRouter
