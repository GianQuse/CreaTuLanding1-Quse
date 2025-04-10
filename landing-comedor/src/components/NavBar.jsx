import CartWidget from "./CartWidget";

function NavBar({cantidad}) {
    return (
        <nav>
            <ul>
                <li><a href="#">Promos</a></li>
                <li><a href="#">Carta Principal</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Sobre Nosotros</a></li>
            </ul>
            <CartWidget cantidad={cantidad} />
        </nav>
    )
}

export default NavBar;