import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from "./layout/Navbar"
import { Home } from "./pages/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AddUser } from "./users/AddUser"

export const App: React.FC = () => {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
        </Routes>
      </Router>
    </div >
  )
}


