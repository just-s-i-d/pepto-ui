import Bg from "../../../assets/section2/BG.png"
import Bg2 from "../../../assets/section2/BG2.png"
import Bg3 from "../../../assets/section2/BG3.png"
import Bg4 from "../../../assets/section2/BG4.png"
import Bg5 from "../../../assets/section2/BG5.png"
import Bg6 from "../../../assets/section2/BG6.png"
import LogoItem from "./aboutusitem/aboutusitem.component"

const images=[{
    image:Bg,
    title:"Termite Free"
},{
    image:Bg2,
    title:"Affordable"
},{
    image:Bg3,
    title:"Eco Friendly"
},{
    image:Bg4,
    title:"Non-Toxic"
},{
    image:Bg5,
    title:"5 Years Warranty"
},{
    image:Bg6,
    title:"100% Authentic"
}]
const Content2=()=>{
    return(
        <div className="aboutus-container">
            <h4>ABOUT US</h4>
            <hr />
            <h2>India's 1st Pocket-friendly</h2>
            <div className="highlight">TERMITE-PROOF
            </div>
            <span className="brand">PLYWOOD-BRAND
            <hr className="line-through"/></span>
            <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quod natus, maxime amet vel dolor sed harum ad soluta ullam a at? Voluptatum autem alias maxime assumenda repudiandae iusto harum!
            </p>
            <div className="features-container">
            {
                images.map(item=><LogoItem item={item}/>)
            }
            </div>
            
        </div>
    )
}
export default Content2