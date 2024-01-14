import './App.css'

function App() {


  return (
    <>
      <div>
       <h1>Hello</h1>
       <Pizza/>
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

export default App
