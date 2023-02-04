import React from "react";
import Logo from "./logo";
import Menu from "./menu";

const Header = () => {
    return (
        <header className="flex flex-1 flex-row justify-between bg-slate-500 px-5 py-5">
            <Logo/>
            <Menu/>
        </header>
    )
}

export default Header