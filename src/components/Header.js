import { show_main_mobile_menu } from "./MobileMenu";

function Header(){
    return (
        <header>
            <div className="wrapper">
                <div className="header_content_container" style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{height: "60px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <p style={{color: ""}}>Willgo.com</p>
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
                    <div className="header_humburger_menu">
                        <div className="header_mobile_menus" style={{display: "flex", flexDirection: "row"}}>
                            <div><i className="fa fa-search"></i></div>
                            <div><i className="fa fa-briefcase"></i></div>
                            <div style={{marginRight: 0}}><i className="fa fa-user-circle"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;