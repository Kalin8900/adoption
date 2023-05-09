import React from "react"
import { Outlet } from "react-router-dom"
import { Navbar } from "../navbar/navbar"
import { Footer } from "../footer/footer"

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}