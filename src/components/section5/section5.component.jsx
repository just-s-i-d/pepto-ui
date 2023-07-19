import "./section5.styles.scss"
import Moustache from "../../assets/section6/Layer 1.png"
import profile1 from "../../assets/section6/Layer 2.png"
import profile2 from "../../assets/section6/Layer 3.png"
import profile3 from "../../assets/section6/Layer 4.png"
import Profile from "./profile/profile.component"
const profiles = [{
    image: profile1,
    name: "Mark Smith",
    title: "Carpenter"
}, {
    image: profile2,
    name: "Cooper Moore",
    title: "Constructor"
}, {
    image: profile3,
    name: "Josh Ryan",
    title: "Interiour designer"
}]
const Section5 = () => {
    return (
        <div className="section5">
            <div className="header">
                <h1>What Our Clients Say</h1>
                <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's since the 1500s</h3>
                <img src={Moustache} alt="" />
            </div>
            <div className="profiles-container">
                {
                    profiles.map(item => <Profile item={item} />)
                }
            </div>

        </div>
    )
}
export default Section5