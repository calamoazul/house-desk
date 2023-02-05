import React from "react";
import Logo from "../header/logo";
import SocialIcon from "./icon";
import ContactIcon from "./contact-icon";

const Footer = () => {
    return (
        <footer className="flex flex-row border-solid border-t border-teal-500 py-5 px-5">
            <div className="p-2 basis-1/5">
                <Logo img="https://logarinmobiliaria.desarrollobirdcom.es/wp-content/uploads/2022/12/logotipo-logar.svg" width="150" />
            </div>
            <div className="p-2 basis-2/5">
                <h3 className="text-2xl font-bold mb-3">Contacta con nosotros</h3>
                <div>
                    <ContactIcon icon="https://logarinmobiliaria.desarrollobirdcom.es/wp-content/uploads/2022/10/mail.png" text="info@house-desk.com"/>
                    <ContactIcon icon="https://logarinmobiliaria.desarrollobirdcom.es/wp-content/uploads/2022/10/phone.png" text="93 666 666"/>
                </div>
            </div>
            <div className="p-2 basis-2/5">
                <h3 className="text-2xl font-bold">Síguenos en redes</h3>
                <div className="pt-3 grid grid-cols-2 w-52">
                    <SocialIcon link="https://www.facebook.com/LogarInmobiliariazgz/" width="50" src="https://logarinmobiliaria.desarrollobirdcom.es/wp-content/uploads/2022/10/facebook-rect-1.png"/>
                    <SocialIcon link="https://www.instagram.com/logarinmobiliaria/?hl=es" width="50"src="https://logarinmobiliaria.desarrollobirdcom.es/wp-content/uploads/2022/10/instagram-1.png"/>
                </div>
            </div>

        </footer>
    )
}

export default Footer