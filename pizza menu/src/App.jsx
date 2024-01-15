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
  const style = {}
  //const style = {color: 'green', fontSize: '60px', textTransform: 'uppercase'}
  return (
    <header className="header">
      <h1 style={style}>React Pizza Co.</h1>
    </header>
  )
}



function Menu(){
  return (
    <main className='menu'>
      <h2>Our menu</h2>
      <Pizza/>
      <Pizza/>
      <Pizza2/>
    </main>
  )
}

function Footer(){
  const hour = new Date().getHours()
  const openHours = 12
  const closeHours = 22
  const isOpen = hour >= openHours && hour <= closeHours
  console.log(isOpen)


  return <footer className='footer'>{new Date().toLocaleTimeString()}. Were currently open</footer>
}

function Pizza(){
  return(
    <div>
      <img src="../pizza_diavola.jpeg" alt="pizza"/>
      <h3>Pizza Diavola</h3>
      <p>Pepperoni, Tomato, Mozarella, Chilli, Onion</p>
    </div>
  )
}

function Pizza2(){
  return(
    <div>
      <h3>Pizza Margarita</h3>
      <p>Mozzarella, Tomato</p>
    </div>
  )
}

export default App
