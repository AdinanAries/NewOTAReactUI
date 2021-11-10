import { show_main_mobile_menu } from "./MobileMenu";

import WillgoLogo from '../WillgoLogo.png';

import { show_login_page, show_home_page, show_trips_page } from '../helpers/PageRoutingFuncs';

function Header(){
    return (
        <header>
            <div className="wrapper">
                <div className="header_content_container" style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{height: "60px", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <div style={{display: "flex"}}>
                            <p><img src={WillgoLogo} style={{width: 60}}/></p>
                            <div style={{marginLeft: 5, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <p style={{color: "rgb(44, 107, 128)", fontFamily: "Sans-serif", fontWeight: "1000", fontSize: 23,}}>
                                    Willgo
                                    <span style={{color: "#c900b0"}}>.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="header-menu-items">
                        <div onClick={show_home_page} className="each-header-menu-item">
                            <p>
                                <i className="fa fa-home" />Home
                            </p>
                        </div>
                        <div className="each-header-menu-item">
                            <p>
                                <i className="fa fa-globe" />Explore
                            </p>
                        </div>
                        <div onClick={show_trips_page} className="each-header-menu-item">
                            <p>
                                <i className="fa fa-briefcase" />Trips
                            </p>
                        </div>
                        <div onClick={show_login_page} className="each-header-menu-item">
                            <p>
                                <i className="fa fa-user" />Login
                            </p>
                        </div>
                    </div>
                    <div className="header_humburger_menu">
                        <div className="header_mobile_menus" style={{display: "flex", flexDirection: "row"}}>
                            <div onClick={show_home_page}><i className="fa fa-search"></i></div>
                            <div onClick={show_trips_page}><i className="fa fa-briefcase"></i></div>
                            <div onClick={show_login_page} style={{marginRight: 0}}><i className="fa fa-user-circle"></i></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;