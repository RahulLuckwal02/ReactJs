import logo from "../images/react-logo.png"; 

export default function NavBar(){
    return(
      <header>
        <nav>
        <img src={logo} alt="React Logo" />
        <span>ReactFacts</span>
        </nav>
      </header>
    )
  }