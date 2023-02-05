import React from "react";
import Link from "next/link";

const SocialIcon = ({src, width, link="#"}) => {
    return (
        <a href={link}>
        <img src={src} width={width}/>
        </a>
        
    )
}

export default SocialIcon