function Footer(){
    return (
        <footer>
            <div className="wrapper" style={{paddingTop: 20}}>
                <div style={{display: "flex", justifyContent: "space-between", padding: "20px 10px"}}>
                    <div>
                        <div>
                            <p style={{fontWeight: "bolder", textAlign: "center", marginBottom: 15, letterSpacing: 0.5, fontFamily: "Courgette"}}>
                                About WillGo</p>
                            <p style={{color: "white", textAlign: "center", letterSpacing: 0.5, fontFamily: "Courgette", maxWidth: 250}}>
                            willgo.com is a online travel agency who's business operations targets mostly the African
                            travel market</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p style={{fontWeight: "bolder", textAlign: "center", marginBottom: 15, letterSpacing: 0.5, fontFamily: "Courgette"}}>
                                Recieve Price Updates</p>
                            <p style={{color: "white", textAlign: "center", letterSpacing: 0.5, fontFamily: "Courgette"}}>
                                Subscribe your email to get latest price updates</p>
                            <div style={{marginTop: 10, borderRadius: 9, overflow: "hidden"}}>
                                <input style={{width: "100%", padding: 10, border: "none", borderRadius: 0}} type="email" placeholder="enter your email here"/>
                                <div style={{padding: 10,color: "white", backgroundColor: "darkslateblue", textAlign: "center", cursor: "pointer"}}>
                                    subscribe
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div style={{marginBottom: 20}}>
                            <p style={{fontWeight: "bolder", textAlign: "center", marginBottom: 15, letterSpacing: 0.5, fontFamily: "Courgette"}}>
                                Contact</p>
                            <div style={{marginTop: 10}}>
                                <p style={{color: "white", textAlign: "center"}}>
                                    <i style={{marginRight: 10, opacity: 0.4, marginBottom: 8}} className="fa fa-envelope"></i>
                                    support@willdo.com
                                </p>
                                <p style={{color: "white", textAlign: "center"}}>
                                    <i style={{marginRight: 10, opacity: 0.4, marginBottom: 20}} className="fa fa-phone"></i>
                                    +1 732-799-9546
                                </p>
                                <p style={{color: "white", textAlign: "center"}}>
                                    <span style={{backgroundColor: "rgba(0,0,0,0.3)", padding: "10px 15px", marginRight: 5, borderRadius: 4}}>
                                        <i style={{opacity: 0.5, marginBottom: 5}} className="fa fa-facebook"></i>
                                    </span>
                                    <span style={{backgroundColor: "rgba(0,0,0,0.3)", padding: "10px 15px", marginRight: 5, borderRadius: 4}}>
                                        <i style={{opacity: 0.5, marginBottom: 5}} className="fa fa-twitter"></i>
                                    </span>
                                    <span style={{backgroundColor: "rgba(0,0,0,0.3)", padding: "10px 15px", marginRight: 5, borderRadius: 4}}>
                                        <i style={{opacity: 0.5, marginBottom: 5}} className="fa fa-instagram"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p style={{marginTop: 20, textAlign: "center", opacity: 0.6, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.3)"}}>
                    &copy; 2022 willgo.com, all rights reserved</p>
            </div> 
        </footer>
    );
}

export default Footer; 