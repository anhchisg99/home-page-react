import logo from './assets/logo.png'
export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} className="logo" alt="" />
            {/* <img src={require('../public/logo.png')} /> */}
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Bedrrom</a></li>
                <li><a href="#">Dining</a></li>
                <li><a href="#">Kitchen</a></li>
                <li><a href="#">Head</a></li>
            </ul>
        </div>
    )
}