import { useState } from "react"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import "./style.css"

function App() {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  }
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  }

  return (
    <>
      <NavBar cantidad={contador}/>
      <ItemListContainer saludo="Bienvenido/a" texto="A Planeta Pizza" sumar={sumar} restar={restar} contador={contador}/>
    </>
  )
}

export default App
