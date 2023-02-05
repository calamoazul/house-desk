

const Banner = ({back, text, description}) => {
    return(
        <div className="p-5 flex flex-column flex-start bg-cyan-900">
            <h1 className="text-4xl text-white text-bold ml-3 mb-3">{text}</h1>
            <img width="100" src="https://logarinmobiliaria.desarrollobirdcom.es/wp-content/uploads/2022/10/Linea-1-1.png" className="my-3 ml-3"  />
            <p className="mt-3 ml-3 text-white text-xl">{description}</p>
        </div>
    )
}

export default Banner