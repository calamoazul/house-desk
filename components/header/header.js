import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import SocialIcon from "../footer/icon";

const Header = () => {
    return (
        <header className="flex flex-1 flex-row justify-between bg-gray-100 px-3 py-3">
            <Logo img="https://logarinmobiliaria.desarrollobirdcom.es/wp-content/uploads/2022/12/logotipo-logar.svg" width="100" />
            <Menu/>
            <div className="flex flex-row m-auto flex-start w-52 basis-1/5">
                <div><SocialIcon src="https://logarinmobiliaria.desarrollobirdcom.es/wp-content/uploads/2022/10/facebook-rect-1.png" width="25" link="https://www.facebook.com/LogarInmobiliariazgz/"/></div>
                <div className="ml-5"><SocialIcon src="https://logarinmobiliaria.desarrollobirdcom.es/wp-content/uploads/2022/10/instagram-1.png" width="25" link="https://www.instagram.com/logarinmobiliaria/?hl=es"/></div>
            </div>
        </header>
    )
}

export default Header