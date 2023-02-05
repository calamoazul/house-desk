

const Panel = ({back, text, icon}) => {
    return (
        <div className="bg-teal-900 text-white p-5">
            <img className="m-auto" src={icon}/>
            <h3 className="text-2xl text-center mt-3 text-bold">{text}</h3>
        </div>
    )
}

export default Panel