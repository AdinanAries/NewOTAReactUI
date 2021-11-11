import explore_destination_img from "../explore_destination_img.jpg";

export default function ExploreDestinations(){
    return (
        <div className="wrapper">
            <div style={{marginBottom: 30, height: 500, backgroundImage: `url('${explore_destination_img}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", padding: 20, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <p style={{color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 38}}>
                    See the world,</p>
                <p style={{marginTop: -9,color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 30 }}>
                    with a third eye</p>
                <p style={{color: "white", maxWidth: 350, marginTop: 10, marginBottom: 10, fontFamily: "'Prompt', sans-serif", lineHeight: 1.1}}>
                    We got you on these amaizing trip ideas that will 
                    make you want to do it over again
                </p>
                <div style={{textAlign: "center", width:"fit-content", backgroundColor: "#c900b0", fontFamily: "'Prompt', sans-serif", color: "white", padding: 14, borderRadius: 9}}>
                    Start Exploring
                </div>
            </div>
        </div>
    );
}