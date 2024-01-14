import './App.css'

function App() {


  return (
    <>
      <div>
       <Header/>
       <Menu/>

       <Footer/>
      </div>
    </>
  )
}

function Header(){
  return <h1>React Pizza Co.</h1>
}

function Menu(){
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza/>
      <Pizza/>
      <Pizza2/>
    </div>
  )
}

function Footer(){
  return <footer>{new Date().toLocaleTimeString()}. Were currently open</footer>
}

function Pizza(){
  return(
    <div>
      <img src="../pizza_diavola.jpeg" alt="pizza"/>
      <h1>Pizza Diavola</h1>
      <p>Pepperoni, Tomato, Mozarella, Chilli, Onion</p>
    </div>
  )
}

function Pizza2(){
  return(
    <div>
      <h1>Pizza Margarita</h1>
      <p>Mozzarella, Tomato</p>
    </div>
  )
}

export default App
