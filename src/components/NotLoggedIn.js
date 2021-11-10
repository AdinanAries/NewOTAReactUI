import loginIcon from "../icons/loginIcon.svg";

export default function NotLoggedIn(){
    return(
        <div>
            <div style={{backgroundImage: `url('${loginIcon}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                            height: 150, marginTop: 5, marginBottom: 5}}>

            </div>
            <div style={{marginBottom: 30}}>
                <div style={{margin: "auto", textAlign: "center", maxWidth: 450, padding: 10, backgroundColor: "rgb(54, 117, 168)", borderRadius: 9, color: "white"}}>
                    Please Login or Create an Account
                </div>
            </div>
        </div>
    );
}