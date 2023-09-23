import './Navbar.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { GiBurningTree } from 'react-icons/gi'
const Navbar = () => {
  return (
    <section className="NavbarFull">
      <header className="flex-container">
        <ul className="items">
          <li>
            <Link to="" className="title">
              <h1>
                <GiBurningTree className="icon" />
                SIH
              </h1>
            </Link>
          </li>
          <section className="list">
            <li>
              <Link to="/admin">
                <h3>Admin</h3>
              </Link>
            </li>
            <li>
              <Link to="/staff">
                <h3>Staff</h3>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <h3>About</h3>
              </Link>
            </li>
            <li>
              <Link to="/complaint">
                <h3>Complaint</h3>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <h3>Contact Us</h3>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <h3>Profile</h3>
              </Link>
            </li>
          </section>
        </ul>
      </header>
    </section>
  )
}
export default Navbar
