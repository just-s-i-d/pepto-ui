const Category=({item})=>{
    return(
        <div className="category-container">
            <h2>{item.title}</h2>
            {
                item.links.map(link=><div>{link}</div>)
            }
        </div>
    )
}
export default Category