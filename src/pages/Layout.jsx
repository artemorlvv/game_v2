import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="flex min-h-[100vh] flex-col">
      <Header />

      <div className="flex grow flex-col items-center">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default Layout
