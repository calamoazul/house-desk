import React from "react";
import Link from "next/link";

const Menu = () => {
    return(
        <>
        <nav className="basis-3/5 m-auto">
            <ul className="flex flex-row text-white text-lg items-center">
                <li className="basis-1/5 flex items-center">
                    <Link href="/">Inicio</Link>
                </li>
                <li className="basis-1/5">
                    <Link href="/venta">Venta</Link>
                </li>
                <li className="basis-1/5">
                    <Link href="/alquiler">Alquiler</Link>
                </li>
                <li className="basis-1/5">
                    <Link href="/sobre-mi">Sobre mí</Link>
                </li>
                <li className="basis-1/5">
                    <Link href="/contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Menu