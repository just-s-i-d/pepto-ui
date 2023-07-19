const Profile = ({ item }) => {
    const { image, name, title } = item
    return (
        <div className="profile-container">
            <div className="photo-name-container">
                <img src={image} alt="" />
                <h3>{name}</h3>
                <span>{title}</span>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been since the 1500s</p>
        </div>
    )
}
export default Profile