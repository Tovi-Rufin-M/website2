import '../assets/Global.css'
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        {/* The logo/name area links back to the home (About) page */}
        <Link to="/about" className="logo">Aimee Joy</Link>
      </div>
      
      <ul className="navbar-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}