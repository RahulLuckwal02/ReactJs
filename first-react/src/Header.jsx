// we need to export this header so that we can use it outside 
// export default

//import in main.jsx file
export default function Header() {
    return (
      <header className="header">
        <img
          src="/src/assets/images/react-logo.png"
          className="nav-logo"
          alt="React Logo"
        />
        <nav>
          <ul className = "nav-list"> 
            {/* add css of nav-list in index.css */}
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }