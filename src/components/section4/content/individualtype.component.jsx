const IndividualType=({item})=>{
    const {image,title,text}=item
    return(
        <div className="type-container">
            <img src={image} alt="" />
            <div>
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}
export default IndividualType