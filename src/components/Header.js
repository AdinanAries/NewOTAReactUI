
function Header(){
    return (
        <header>
            <div className="wrapper">
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{height: "50px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <p style={{color: "white"}}>Willgo.com</p>
                    </div>
                    <div className="header-menu-items">
                        <div className="each-header-menu-item">
                            <p>
                                <i className="fa fa-home" />Home
                            </p>
                        </div>
                        <div className="each-header-menu-item">
                            <p>
                                <i className="fa fa-globe" />Explore
                            </p>
                        </div>
                        <div className="each-header-menu-item">
                            <p>
                                <i className="fa fa-briefcase" />Trip
                            </p>
                        </div>
                        <div className="each-header-menu-item">
                            <p>
                                <i className="fa fa-user" />Login
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;