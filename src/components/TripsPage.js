import NotLoggedIn from './NotLoggedIn';
function TripsPage(){
    return(
        <main id="trips_page" style={{display: "none"}}>
            <div className="wrapper">
                <div style={{padding: "20px 5px", minHeight: "calc(100vh - 350px)"}}>
                    <p style={{marginLeft: 20, fontSize: 30, fontWeight: "bolder", color: "rgba(0,0,0,0.8)"}}>Trips</p>
                    <NotLoggedIn />
                </div>
            </div>
        </main>
    );
}

export default TripsPage;