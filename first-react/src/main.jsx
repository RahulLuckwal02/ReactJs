/* 
import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root')).render(
  <main>
  <img src="/src/assets/images/react-logo.png" alt="React Logo" width="40px" />
    <h1>Fun Facts about React!</h1>
    <ul>
      <li>Was first release in 2013</li>
      <li>Was originally created by John Walke</li>
      <li>has well over 200k stars on Github</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </main>
) 

*/

//-----------------------Components

import { createElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// before custom components part ->
// const root = createRoot(document.getElementById('root')).render(
// // tempName()
// <TempName2/>
// )

//this is how we render componets in React
// it should start from capital letter

// function tempName(){
//   return (<main>
//   <img src="/src/assets/images/react-logo.png" alt="React Logo" width="40px" />
//     <h1>Fun Facts about React!</h1>
//     <ul>
//       <li>Was first release in 2013</li>
//       <li>Was originally created by John Walke</li>
//       <li>has well over 200k stars on Github</li>
//       <li>Is maintained by Meta</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </main>
//   )
//
// }

/*
function TempName2(){
  return (<main>
  <img src="/src/assets/images/react-logo.png" alt="React Logo" width="40px" />
    <h1>Fun Facts about React!</h1>
    <ul>
      <li>Was first release in 2013</li>
      <li>Was originally created by John Walke</li>
      <li>has well over 200k stars on Github</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </main>
  )
}
*/

//as we know in react we have to take element in a parent togther like above <main>
//in react to solve this problem we use Fragment or <>
// this don't add any extra node to the DOM
//we can use either <Fragment> or <>

// function TempName2(){
//   return (<>
//
//   <img src="/src/assets/images/react-logo.png" alt="React Logo" width="40px" />
//     <h1>Fun Facts about React!</h1>
//     <ul>
//       <li>Was first release in 2013</li>
//       <li>Was originally created by John Walke</li>
//       <li>has well over 200k stars on Github</li>
//       <li>Is maintained by Meta</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//
//   </>
//   )
// }

//now we dont need any extra parent element in which we need to put all the code inside it

//----------------Custom Components-----------------

/*
function Header(){
  return(
    <header>
     <img src="/src/assets/images/react-logo.png" width="40px" alt="React Logo" />
    </header>
  )
}

function MainContent(){
  return(
    <main>
      <h1>Fun Facts about React!</h1>   
      <ul>
        <li>Was first release in 2013</li>
        <li>Was originally created by John Walke</li>
        <li>has well over 200k stars on Github</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  )
}

function Footer(){
  return(
    <footer>
      <small> 2024 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quia mollitia tenetur eveniet modi quidem enim minus nam iure, ducimus dignissimos numquam doloremque id voluptas totam laborum cumque! Atque, cumque!</small>
    </footer>
  )
}

function MyPage(){
  return(
    <>
    <Header/>
    <MainContent/>
    <Footer/>
    </>
  )
}


const root = createRoot(document.getElementById('root'))
root.render(
  <MyPage/>
)


*/

//----------------Styling with Classes------------


//whenever u have to add a class to jsx -> we use "className" keyword




// function Header() {
//   return (
//     <header className="header">
//       <img
//         src="/src/assets/images/react-logo.png"
//         className="nav-logo"
//         alt="React Logo"
//       />
//       <nav>
//         <ul className = "nav-list"> 
//           {/* add css of nav-list in index.css */}
//           <li>Pricing</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </header>
//   );
// }
// 
// function MainContent() {
//   return (
//     <main className="main-content">
//       <h1>Fun Facts about React!</h1>
//       <ol>
//         <li>Was first release in 2013</li>
//         <li>Was originally created by John Walke</li>
//         <li>has well over 200k stars on Github</li>
//       </ol>
//     </main>
//   );
// }
// 
// function Footer() {
//   return (
//     <footer>
//       <small>
//         © 2024 Ziroll Development. All rights reserved.
//       </small>
//     </footer>
//   );
// }
// 
// function MyPage() {
//   return (
//     <>
//       <Header />
//       <MainContent />
//       <Footer />
//     </>
//   );
// }
// 
// 
// 
// const root = createRoot(document.getElementById("root"));
// root.render(<MyPage />);



//--------------Organizing Componets----------

// we will make different different file for different section like header , footer and main content 

// and import it in this file with the help of export default

import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

function MyPage() {
    return (
      <>
        <Header />
        <MainContent />
        <Footer />
      </>
    );
  }
  
  
  
  const root = createRoot(document.getElementById("root"));
  root.render(<MyPage />);