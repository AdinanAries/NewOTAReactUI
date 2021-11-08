import mobile_app_iconsvg from "../icons/mobile_app_icon.svg"

function DownloadMobileApp(){
    return (
        <div className="wrapper">
            <div className="download_mobile_section">
                <div className="download_mobile_app_section_container">
                    <div style={{backgroundImage: `url('${mobile_app_iconsvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                        height: 70, width: 70, marginTop: 5, marginBottom: 5}}>

                    </div>
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                        <p className="download_mobile_app_title" style={{color: "#c900b0", fontWeight: "bolder", marginBottom: 5, fontFamily: "Courgette"}}>
                            Get Our Mobile App</p>
                        <p style={{color: "rgba(0,0,0,0.8)", fontFamily: "Courgette"}}>
                            For better user experience, we recommend that you download our mobile app.</p>
                    </div>
                    <div className="download_mobile_app_btn_container">
                        <div style={{cursor: "pointer", textAlign: "center", color: "white", backgroundColor: "rgb(54, 117, 168)", padding: 10, borderRadius: 20, minWidth: 120}}>
                            <i className="fa fa-download" style={{marginRight: 5}}></i>download
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DownloadMobileApp;