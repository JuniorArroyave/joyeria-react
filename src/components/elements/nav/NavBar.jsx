import "./css/NavBar.css"
import foto4 from "./img/foto4.jpg"
import 'boxicons';



export const Navbar = () => {

    return (
        <div className="content">
            <div className="nav">
                <div className="logo">
                    <img className="imagelogo" src={foto4} alt="Logo" />
                </div>

                <div className="title">Joyeria</div>

                <div className="menu-toggle">
                    <i>
                        <box-icon name='support' size='25px' color='#474747'/>
                    </i>
                </div>
            </div>
        </div>
    )
}