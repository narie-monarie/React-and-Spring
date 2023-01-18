import React from "react"
import { Link } from "react-router-dom"

export const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">CRUD APP</a>
          <Link className="btn btn-outline-success" to="/adduser">
            Add User
          </Link>
        </div>
      </nav>
    </div>
  )
}
