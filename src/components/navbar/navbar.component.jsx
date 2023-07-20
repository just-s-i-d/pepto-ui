import "./navbar.styles.scss"
import Logo from "../../assets/logo.png"
import NavItem from "./navitem/navitem.component"
import PhoneIcon from "../../assets/phoneicon.png"
import MenuIcon from "../../assets/menuicon.png"
import { useEffect, useState } from "react"
import Hamburger from "./hamburger/hamburger.component"
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(null)
    const onClickHandler = () => setIsOpen(!isOpen)
   
    return (
        <div className="navbar-container">
            <div className="left-container"><img src={Logo} alt="Pepto Ui" className="logo" /></div>
            <div className="center-container">
                <NavItem>HOME</NavItem>
                <NavItem>ABOUT</NavItem>
                <NavItem>PRODUCTS</NavItem>
                <NavItem>TESTIMONIALS</NavItem>
                <NavItem>CONTACT</NavItem>
            </div>
            {isOpen ?<Hamburger />:""}
            <div className="right-container">
                <NavItem className="number">
                    <img src={PhoneIcon} alt="Phone Icon" className="phone-icon" />
                    <span> +91 971779 86812</span>
                    <img src={MenuIcon} alt="Menu Icon" className="menu-icon" onClick={onClickHandler} />
                </NavItem>
            </div>
        </div>
    )
}
export default NavBar