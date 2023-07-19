const LogoItem = ({item}) => {
    const {image,title}=item
    return (
        <div>
            <img src={image} alt="logo" />
            <h5 className="logo-title">{title}</h5>
        </div>
    )
}
export default LogoItem