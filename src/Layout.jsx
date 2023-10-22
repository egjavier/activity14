import { Outlet, Link } from "react-router-dom"
import logo from './assets/favicon.png'
import Aos from "aos"

function Layout() {
  return (
  <main>
    <nav 
      className="navbar fs-5 navbar-expand-md bg-dark shadow" 
      data-bs-theme="dark"
      >
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          <img 
            src={logo} 
            alt="Logo" 
            width="30" 
            height="30" 
            className="d-inline-block align-text-top me-2" 
          /> 
          React Routing
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end nav-underline" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="about">About</Link>
            <Link className="nav-link" to="services">Services</Link>
            <Link className="nav-link" to="contact">Contact</Link>
          </div>
        </div>
      </div>
    </nav>

    <div className="pages shadow border rounded p-5 " >
      <Outlet className="d-flex justify-content-center"></Outlet>
    </div>

    <footer 
      className="text-center bg-dark text-white p-3">
        Developed by Eunice Javier
    </footer>
  </main> 
  )
}

export default Layout