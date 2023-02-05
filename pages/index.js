import Head from 'next/head'
import Header from '@/components/header/header'
import Slider from '@/components/slider'
import Footer from '@/components/footer/footer.'
import Panel from '@/components/panel'

export default function Home() {

  const firstSlide = "https://logarinmobiliaria.desarrollobirdcom.es/wp-content/uploads/2022/10/alquiler-inmobiliaria.jpg"
  const sliders = ["https://logarinmobiliaria.desarrollobirdcom.es/wp-content/uploads/2022/10/vender.jpg"]
  
  return (
    <>
      <Head>
        <title>House Desk</title>
        <meta name="description" content="App Ejemplo Inmobiliaria" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" />
        <link rel="icon" href="https://logarinmobiliaria.desarrollobirdcom.es/wp-content/uploads/2022/12/favicon.svg" />
      </Head>
      <Header/>
      <Slider origin={firstSlide} slides={sliders} />
      <main className='max-w-5xl grid grid-cols-2 gap-x-8 m-auto py-5'>
        <Panel icon="https://logarinmobiliaria.desarrollobirdcom.es/wp-content/uploads/2022/10/venta.svg" text="Venta" />
        <Panel icon="https://logarinmobiliaria.desarrollobirdcom.es/wp-content/uploads/2022/10/llaves.svg" text="Alquiler" />
        
      </main>
      <Footer></Footer>
    </>
  )
}
