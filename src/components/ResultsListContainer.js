import explore_page_hero from "../explore_page_hero.jpg";

import { show_explore_page } from "../helpers/PageRoutingFuncs";

export default function ResultsListContainer(){
    return (
        <div style={{marginTop: 10, minHeight: "calc(100vh - 300px)", padding: "10px 0", borderTop: "1px solid rgba(0,0,0,0.1)"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <div style={{width: "19%"}}>
                    <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 17, marginBottom: 30}}>
                        <i style={{marginRight: 7}} className="fa fa-sliders" ariaHidden="true"></i>
                        Filter by</p>

                    <div style={{marginBottom: 30}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 15}}>
                            <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>Stops</p>
                            <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>From</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>Nonstop (6)</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$143</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>1 Stop (30)</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$123</p>
                        </div>
                    </div>

                    <div style={{marginBottom: 20}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 15}}>
                            <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>Airlines</p>
                            <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>From</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>Air Canada (22)</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$243</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>American Airlines (11)</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$133</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>United (5)</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$114</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>WestJet (3)</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$132</p>
                        </div>
                    </div>

                    <div style={{marginBottom: 30}}>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 15}}>
                            <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>Travel and baggage</p>
                            <p style={{fontWeight: "bolder", color: "rgba(0,0,0,0.7)", fontSize: 14}}>From</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>Seat choice included</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$143</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>Carry-on bag included</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$123</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>No cancel fee</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$111</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                            <div style={{display: "flex", flexDirection: "row"}}>
                                <input style={{width: 19, height: 19, marginRight: 5}} type="checkbox" />
                                <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>No change fee</p>
                            </div>
                            <p style={{color: "rgba(0,0,0,0.7)", fontSize: 15}}>$371</p>
                        </div>
                    </div>
                </div>
                <div style={{width: "calc(66% - 10px)"}}>

                </div>
                <div style={{minHeight: 500, width: "15%"}}>
                    <div style={{height: 500, backgroundImage: `url('${explore_page_hero}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", padding: 20, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <p style={{color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 19}}>
                            See the world,</p>
                        <p style={{marginTop: -5,color: "white", fontWeight: 1000, fontFamily: "'Prompt', sans-serif", fontSize: 17 }}>
                            with a third eye</p>
                        <p style={{color: "white", maxWidth: 350, marginTop: 10, marginBottom: 10, fontFamily: "'Prompt', sans-serif", lineHeight: 1.1}}>
                            We got you on these amaizing trip ideas that will 
                            make you want to do it over again
                        </p>
                        <div onClick={show_explore_page} style={{textAlign: "center", width:"fit-content", backgroundColor: "#c900b0", fontSize: 15, fontFamily: "'Prompt', sans-serif", color: "white", padding: 14, borderRadius: 9}}>
                            Start exploring
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}