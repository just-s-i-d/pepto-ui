const Product=({item})=>{
    return(
        <div className="product">
            <img src={item.image} alt="" />
            <h3>PEPTO</h3>
            <h3>{item.sub}</h3>
        </div>
    )
}
export default Product