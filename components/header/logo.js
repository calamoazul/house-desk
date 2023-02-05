
const Logo = ({img, width}) => {
    return(
        <div className="object-cover basis-1/5">
            <img width={width} src={img} />

        </div>
    )
}

export default Logo