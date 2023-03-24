import { pageLinks, socialLinks } from '../data'
import logo from '../images/logo.svg'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((pageLink) => {
            return (
              <li key={pageLink.id}>
                <a href={pageLink.href} className="nav-link">
                  {pageLink.text}
                </a>
              </li>
            )
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={link.url}
                  target="_blank"
                  className="nav-icon"
                  rel="noreferrer"
                >
                  <i className={link.favicon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
