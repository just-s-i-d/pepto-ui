import "./section6.styles.scss"
import background6 from "../../assets/section7/background6.png"
import frame from "../../assets/section7/frame.png"
import painting from "../../assets/section7/painting.png"
import a1 from "../../assets/section7/service.png"
import a3 from "../../assets/section7/cooperation.png"
import a2 from "../../assets/section7/clipboard.png"
import Achievement from "./achievements/achievement.component"
const achievements=[{
    image:a1,
    no:"736",
    title:"Companies Served"
},{
    image:a2,
    no:"195",
    title:"On Going Projects"
},{
    image:a3,
    no:"3841",
    title:"Happy Business"
}]
const Section6 = () => {
    return (
        <div className="section6">
            <img src={background6} alt="" className="background" />
            <div className="painting-container">
                <img src={frame} alt="" className="frame" />
                <img src={painting} alt="" className="painting" />
            </div>
            <div className="content-container">
            <h5>SOME FACTS</h5>
            <hr />
            <h1>We are Here for You</h1>
            <span>Great success rate, recovering millions every year since 1992. If you or someone you love has suffered the consequences of another person’s negligence.</span>
            <div className="achievements-container">
                {
                    achievements.map(item=><Achievement item={item}/>)
                }
            </div>
            </div>
            
        </div>
    )
}
export default Section6