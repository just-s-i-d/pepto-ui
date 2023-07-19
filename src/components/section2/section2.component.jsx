import "./section2.styles.scss"
import Background2 from "../../assets/background2.jpg"
import Content2 from "./content/content.component"

const Section2 = () => {
    return (
        <div className="section2">
            <img className="background-img" src={Background2} alt="Background2" />
            <Content2/>
        </div>
    )
}
export default Section2