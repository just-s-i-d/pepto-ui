const Achievement = ({ item }) => {
    return (
        <div className="achievement-container">
            <img src={item.image} alt="" />
            <h3>{item.no}</h3>
            <h4>{item.title}</h4>
        </div>
    )
}
export default Achievement