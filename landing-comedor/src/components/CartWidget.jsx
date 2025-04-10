function CartWidget({ cantidad }) {
    return (
        <div className="cart-widget">
            <span className="cart-count">{cantidad}</span>
            <img src="./public/carrito-de-compras.png" alt="Cart" />
        </div>
    );

}

export default CartWidget;