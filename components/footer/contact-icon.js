
const ContactIcon = ({icon, text}) => {
    return (
        <div className="flex flex-row flex-start mb-3">
            <img width="15" src={icon}/>
            <p className="text-light text-black ml-3">{text}</p>
        </div>
    )
}

export default ContactIcon