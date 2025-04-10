import Boton from "./Boton"

function ItemListContainer({saludo, texto, sumar, restar, contador}) {
    return (
        <>
            <div className="container">
                <h1>{saludo}</h1>
                <h2>{texto}</h2>
                <Boton sumar={sumar} restar={restar} contador={contador}/>
            </div>
        </>
    )
}

export default ItemListContainer;