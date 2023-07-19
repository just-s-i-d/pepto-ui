const NavItem = ({ children,...props}) => {
    return (
        <span className="nav-item" {...props}>{children}</span>
    )
}
export default NavItem