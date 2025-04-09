import CartWidget from "./CartWidget";

function NavBar() {
    return (
        <nav>
            <ul>
                <li><a href="#">Promos</a></li>
                <li><a href="#">Carta Principal</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;