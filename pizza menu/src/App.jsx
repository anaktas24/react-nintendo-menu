import './App.css'

function App() {


  return (
    <>
      <div>
       <h1>Menu</h1>
       <h2>Pizzas:</h2>
       <Pizza/>
       <Pizza2/>
      </div>
      <h1>Homepage</h1>
    </>
  )
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
