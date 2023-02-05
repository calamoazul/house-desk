import React from "react";
import Head from "next/head";
import Header from "@/components/header/header";
import Banner from "@/components/banner";

const sobreMi = () => {
    return (
        <>
            <Head>
            <title>House Desk - Sobre mí</title>
            <meta name="description" content="Página Ejemplo Sobre mí" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <script src="https://cdn.tailwindcss.com"></script>
            <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
            <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" />
            <link rel="icon" href="https://logarinmobiliaria.desarrollobirdcom.es/wp-content/uploads/2022/12/favicon.svg" />
            </Head>
            <Header/>
            <Banner text="Sobre nosotros" description="House Desk, tu inmobiliaria de confianza"/>
        </>
    )
}

export default sobreMi