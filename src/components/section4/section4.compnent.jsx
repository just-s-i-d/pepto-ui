import "./section4.styles.scss"
import Background4 from "../../assets/section4/background4.png"
import pic1 from "../../assets/section5/7.png"
import pic2 from "../../assets/section5/8.png"
import pic3 from "../../assets/section5/9.png"
import IndividualType from "./content/individualtype.component"
const images = [
    {
        image: pic1,
        title: "CORE TREATMENT",
        text: "Core veneers, which form the building blocks of plywood, are dipped in an eco-friendly anti-termite solution."
    },
    {
        image: pic2,
        title: "RESIN MODIFICATION/GLUE LINE TREATMENT",
        text: "Anti-termite chemicals are applied to each layer of veneer within the plywood to prevent any penetration by termite."
    },
    {
        image: pic3,
        title: "FINISHED PRODUCT COATING",
        text: "The finished plywood is coated with non-hazardous anti-termite solution giving a final coat of protection against termites to your Pepto Plywood."
    }
]
const Section4 = () => {
    return (
        <div className="section4">
            <img className="section4-background" src={Background4} alt="" />
            <div className="types-container">
                {
                    images.map(item => <IndividualType item={item} />)
                }
            </div>
        </div>
    )
}
export default Section4