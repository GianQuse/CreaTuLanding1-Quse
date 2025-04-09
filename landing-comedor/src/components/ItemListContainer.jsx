function ItemListContainer(props) {
    return (
        <>
            <div className="container">
                <h1>{props.saludo}</h1>
                <h2>{props.texto}</h2>
            </div>
        </>
    )
}

export default ItemListContainer