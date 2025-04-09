import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import "./style.css"

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="Bienvenido/a" texto="A Planeta Pizza" />
    </>
  )
}

export default App
