import "./footer.styles.scss"
import peptoLogo from "../../assets/footer/peptologo.png"
import Category from "./category/category.component"
const categories = [{
    title: "QUICK LINKS",
    links: ["Home", "About", "Testimonials", "Contact"]
}, {
    title: "OUR PRODUCTS",
    links: ["PEPTO MR Ply", "PEPTO MR Block Board", "PEPTO BWP Ply", "PEPTO BWP Block Board"]
}, {
    title: "INFO",
    links: ["Tel: +91 97179 86812", "Email: info@peptoply.com", "Address: 1/78, WHS Kirti Nagar, New Delhi-110015"]
}]
const Footer = () => {
    return (
        <div className="footer">
            <div className="content-box">
                <div className="block1">
                    <img src={peptoLogo} alt="" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been since the 1500s</p>
                    <i className="fa fa-facebook" />
                    <i className="fa fa-instagram" />
                    <i className="fa fa-twitter" />
                    <i className="fa fa-pinterest" />
                </div>
                <div className="categories-container">
                    {
                        categories.map(item => <Category item={item} />)
                    }
                </div>
            </div>

        </div>
    )
}
export default Footer