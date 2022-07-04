import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
          <nav className="navbar navbar-expand-lg bg-light" >
  <div className="container-fluid">
    <Link className="navbar-brand col" to="/">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent" >
        
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">{/*me-auto is margin end */}
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Make it something else</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        
         </ul>
        
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav