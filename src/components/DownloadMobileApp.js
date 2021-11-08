import mobile_app_iconsvg from "../icons/mobile_app_icon.svg"

function DownloadMobileApp(){
    return (
        <div className="wrapper">
            <div style={{display: "flex", backgroundColor: "rgba(233,233,11,0.15)", border: "5px solid rgba(233,233,11,0.2)", padding: 20, marginBottom: 20, borderRadius: 50}}>
                <div style={{backgroundImage: `url('${mobile_app_iconsvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                    height: 70, width: 70, marginTop: 5, marginBottom: 5}}>

                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                    <p style={{color: "#c900b0", fontWeight: "bolder", marginBottom: 5, fontFamily: "Courgette"}}>
                        Get Our Mobile App</p>
                    <p style={{color: "rgba(0,0,0,0.8)", fontFamily: "Courgette"}}>
                        For better user experience, we recommend that you download our mobile app.</p>
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end", marginLeft: 20}}>
                    <div style={{textAlign: "center", color: "white", backgroundColor: "slateblue", padding: 10, borderRadius: 20, minWidth: 120}}>
                        download
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DownloadMobileApp;