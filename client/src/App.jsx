import React from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Chat from './pages/chat'
import Profile from './pages/profile'
import Auth from './pages/auth'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<Auth/>}></Route>
      <Route path="/chat" element={<Chat/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>

      <Route path="*" element={<Navigate to="/auth"/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

