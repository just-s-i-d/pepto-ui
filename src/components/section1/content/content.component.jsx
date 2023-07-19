import "./content.styles.scss"
const Content = () => {
    return (
        <div className="content-container">
            <h4 className="tagline-heading">India's first pocket-friendly</h4>
            <h1>TERMITE-PROOF<br />
                <span className="tagline-light">PLYWOOD-BRAND</span>
            </h1>
            <hr/>
            <div className="price-container">Starting at <h2 className="price">Rs. 75/sq ft</h2> for 18mm</div>
            <button className="shop-btn">SHOP NOW</button>
        </div>
    )
}
export default Content