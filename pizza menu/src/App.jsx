import './App.css'
import './data.js'
import './style.css'

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
      <Pizza
        name='Pizza ...'
        ingridients='Pepperoni, Tomato, Mozarella, Chilli, Onion'
        photoName='./public/pizza_diavola.jpg'
        price={10}/>
    </main>
  )
}

function Pizza(props){
  return(
    <div>
      <img src={props.photoName} alt={props.name}/>
      <h3>{props.name}</h3>
      <p>{props.ingridients}</p>
    </div>
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



export default App
