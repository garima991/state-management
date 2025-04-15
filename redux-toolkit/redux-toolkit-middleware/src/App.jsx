import React from 'react'
import Header from './components/Header'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}