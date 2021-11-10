export default function LoginPage(){
    return (
        <main id="login_page" style={{display: "none"}}>
            <div className="wrapper">
                <div style={{padding: "20px 5px", minHeight: "calc(100vh - 350px)"}}>
                    <p style={{marginLeft: 20, fontSize: 30, fontWeight: "bolder", color: "rgba(0,0,0,0.8)"}}>Login</p>
                    <div style={{maxWidth: "600px", margin: "auto", marginTop: 30, border: "1px solid rgba(0,0,0,0.2)", borderRadius: 9, overflow: "hidden"}}>
                        <p style={{padding: 15, backgroundColor: "rgba(0,99,180,0.8)", fontWeight: "bolder", letterSpacing: 1, marginBottom: 10, color: "white"}}>
                            <i style={{marginRight: 10, fontSize: 20, color: "rgba(255,255,255,0.5)"}} className="fa fa-sign-in"></i>
                            Sign In</p>
                        <div style={{padding: "10px",}}>
                            <div style={{marginBottom: 20}}>
                                <p style={{color: "rgba(0,0,0,0.7)", marginLeft: 10}}>
                                    <i className="fa fa-envelope" style={{marginRight: 5, color: "darkslateblue"}}></i>Email</p>
                                <input type="email" placeholder="enter your email here"  style={{marginTop: 10, padding: 10, border: "1px solid rgba(0,0,0,0.2)", borderRadius: 9, width: "100%"}}/>
                            </div>
                            <div style={{marginBottom: 10}}>
                                <p style={{color: "rgba(0,0,0,0.7)", marginLeft: 10}}>
                                    <i className="fa fa-key" style={{marginRight: 5, color: "darkslateblue"}}></i>Password</p>
                                <input type="password" placeholder="enter your password here"  style={{marginTop: 10, padding: 10, border: "1px solid rgba(0,0,0,0.2)", borderRadius: 9, width: "100%"}}/>
                            </div>
                            <div style={{color: "white", backgroundColor: "rgb(54, 117, 168)", textAlign: "center", padding: 10, borderRadius: 9}}>
                                Login
                            </div>
                            <p style={{marginTop: 15, color: "darkcyan", cursor: "pointer"}}>Forgot your password?</p>
                            <p style={{marginTop: 20, backgroundColor: "slateblue", width: "fit-content", color: "white", padding: "10px 20px", borderRadius: 5, cursor: "pointer"}}>
                                Create an Account</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}