import "./css/NavBar.css"



export const Navbar = () => {

    return (
        <div className="content">
            <div className="nav">
                <div className="logo">
                    <img className="imagelogo" src="src/components/elements/nav/img/foto4.png" alt="Logo" />
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