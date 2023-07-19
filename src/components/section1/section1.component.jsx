import "./section1.styles.scss"
import Pot from "../../assets/pot.png"
import LivingRoom from "../../assets/livingroom.png"
import Background1 from "../../assets/background1.jpg"
import {ReactComponent as Point} from "../../assets/Point.svg"
import Content from "./content/content.component"
const Section1=()=>{
    return(
        <div className="section1">
            <img src={Background1} alt="" className="background1"/>
            <img src={LivingRoom} alt="" className="living-room"/>
            <img src={Pot} alt="" className="pot"/>
            <Point className="point"/>
            <Content/>
        </div>
    )
}
export default Section1