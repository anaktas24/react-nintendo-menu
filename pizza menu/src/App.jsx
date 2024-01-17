/* eslint-disable react/no-unescaped-entities */
// import React from "react"
// import { ReactDOM } from "react";
import './App.css'


const consoleData = [
  {
    name: "N64",
    description: "Console 1996",
    price: 6,
    photoName: "./n64.jpg",
    soldOut: false,
  },
  {
    name: "Game Cube",
    description: "Console 2001",
    price: 10,
    photoName: "./cube.jpg",
    soldOut: false,
  },
  {
    name: "GameBoy Advance",
    description: "Console 2001",
    price: 12,
    photoName: "./adv.jpg",
    soldOut: false,
  },
  {
    name: "NES",
    description: "Console 1983",
    price: 12,
    photoName: "./nes.jpg",
    soldOut: false,
  },
  {
    name: "Super Famicom",
    description: "Console 1990",
    price: 15,
    photoName: "./super.jpg",
    soldOut: true,
  },
  {
    name: "Wii",
    description: "Console 2006",
    price: 18,
    photoName: "./wii.jpg",
    soldOut: false,
  },
];


function App() {


  return (
    <>
      <div className='container'>
       <Header/>
       <Menu/>
       <Footer/>
      </div>
    </>
  )
}


function Header(){
  const style = {}
  //const style = {color: 'green', fontSize: '60px', textTransform: 'uppercase'}
  return (
    <header className="header">
      <h1 style={style}>React Nintendo Consoles Co.</h1>
    </header>
  )
}



function Menu(){
   const consoles = consoleData
   const numConsoles = consoles.length
  return (
    <main className='menu'>
      <h2>Our systems</h2>


      {numConsoles > 0 ? (
      <ul className='pizzas'>
        {consoleData.map((console =>
          <Console consoleObj={console} key={console.name}/>
        ))}
      </ul>
      ) :  (<p>We're still working on our site. Please come back later:</p>)}
    </main>
  )
}

function Console({consoleObj}){

  if (consoleObj.soldOut) return null
  return(
    <li className='pizza'>
      <img src={consoleObj.photoName} alt={consoleObj.name}/>
      <div>
        <h3>{consoleObj.name}</h3>
        <p>{consoleObj.description}</p>
        <span>{consoleObj.price}</span>
      </div>
    </li>
  )
}

function Footer(){
  const hour = new Date().getHours()
  const openHours = 12
  const closeHours = 22
  const isOpen = hour >= openHours && hour <= closeHours
  console.log(isOpen)

  return(
    <footer className='footer'>
      {isOpen ?
      <Order closeHour={closeHours} openHour={openHours}/>
       : (<p>We;re happy to welcome you between {openHours}:00 and {closeHours}:00.</p>
      )}
    </footer>
  )
}
function Order({closeHour, openHour}) {
  return(
    <div className='order'>
      <p>We're open from {openHour}:00 until {closeHour}:00</p>
      <button className="btn">Order</button>
    </div>
  )
}



export default App
