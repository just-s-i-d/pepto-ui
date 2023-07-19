import Product from "./product/product.component"
import "./section3.styles.scss"
import P1 from "../../assets/section3/11.png"
import P2 from "../../assets/section3/12.png"
import P3 from "../../assets/section3/13.png"
import P4 from "../../assets/section3/14.png"
const images = [{
    image: P1,
    sub: "MR Ply"
}, {
    image: P2,
    sub: "MR Block Board"
}, {
    image: P3,
    sub: "BWP Ply"
}, {
    image: P4,
    sub: "MR BWP Block Board"
}]
const Section3 = () => {
    return (
        <div className="section3">
            <h1>Our Products</h1>
            <div className="products-container">
                {
                    images.map(item=><Product item={item}/>)
                }
            </div>
            
        </div>
    )
}
export default Section3