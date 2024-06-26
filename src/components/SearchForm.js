import $ from "jquery";

import { show_search_page } from "../helpers/PageRoutingFuncs";

function SearchForm(){
    return(
        <div className="main-search-form">
            <div className="two-search-inputs-container">
                <div className="each_flex-side first">
                    <div className="forms_class_guests_cabin_settings_container">
                        <div id="forms_main_class_guests_cabin_settings_pane" className="forms_class_guests_cabin_settings_pane">
                            <p onClick={()=>document.getElementById("forms_main_class_guests_cabin_settings_pane").style.display = "none"} className="airports_auto_complete_close_btn">&times;</p>
                            <div id="add_travelers_settings_pane" style={{padding: 15, display: "none"}}>
                                <p style={{color: "rgba(0,0,0,0.7)", fontWeight: "bolder", fontSize: 17, marginTop: 10, marginBottom: 20}}>
                                    Add Travelers</p>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        Adults</div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                        <div style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 35, height: 35, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            -</div>
                                        <div style={{color: "rgba(0,0,0,0.7)", width: 40, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            1</div>
                                        <div style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 35, height: 35, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            +</div>
                                    </div>
                                </div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        Children
                                        <p style={{fontSize: 12, color: "rgba(0,0,0,0.6)"}}>Ages 2 to 17</p>
                                        </div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                        <div style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 35, height: 35, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            -</div>
                                        <div style={{color: "rgba(0,0,0,0.7)", width: 40, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            0</div>
                                        <div style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 35, height: 35, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            +</div>
                                    </div>
                                </div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        Infants
                                        <p style={{fontSize: 12, color: "rgba(0,0,0,0.6)"}}>Younger than 2</p>
                                    </div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                        <div style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 35, height: 35, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            -</div>
                                        <div style={{color: "rgba(0,0,0,0.7)", width: 40, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            0</div>
                                        <div style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 35, height: 35, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            +</div>
                                    </div>
                                </div>
                            </div>
                            <div id="select_cabin_settings_pane" style={{padding: 15, display: "none"}}>
                                <p style={{color: "rgba(0,0,0,0.7)", fontWeight: "bolder", marginTop: 10, marginBottom: 20}}>
                                    Select Cabin</p>
                                <div style={{cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <label htmlFor="select_cabin_economy_chk"><div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        Economy</div></label>
                                    <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <input id="select_cabin_economy_chk" style={{width: 20, height: 20}} type="radio" checked="true"/>
                                    </div>
                                </div>
                                <div style={{cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <label htmlFor="select_cabin_business_chk"><div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        Business</div></label>
                                    <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <input id="select_cabin_business_chk" style={{width: 20, height: 20}} type="radio" />
                                    </div>
                                </div>
                                <div style={{cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <label htmlFor="select_cabin_first_chk"><div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        First</div></label>
                                    <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <input id="select_cabin_first_chk" style={{width: 20, height: 20}} type="radio" />
                                    </div>
                                </div>
                            </div>
                            <div id="select_trip_round_settings_pane" style={{padding: 15, display: "none"}}>
                                <p style={{color: "rgba(0,0,0,0.7)", fontWeight: "bolder", marginTop: 10, marginBottom: 20}}>
                                    Select Trip Round</p>
                                <div style={{cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <label htmlFor="trip_round_round_trip_chk"><div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        Round-trip</div></label>
                                    <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <input id="trip_round_round_trip_chk" style={{width: 20, height: 20}} type="radio" checked="true"/>
                                    </div>
                                </div>
                                <div style={{cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <label htmlFor="trip_round_one_way_chk"><div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        One-way</div></label>
                                    <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <input id="trip_round_one_way_chk" style={{width: 20, height: 20}} type="radio" />
                                    </div>
                                </div>
                                <div style={{cursor: "not-allowed", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <label htmlFor="trip_round_multi_city_chk"><div style={{color: "rgba(0,0,0,0.7)", height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        Multi-city</div></label>
                                    <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <input id="trip_round_multi_city_chk" style={{width: 20, height: 20}} type="radio" />
                                    </div>
                                </div>
                            </div>
                            <div onClick={()=>document.getElementById("forms_main_class_guests_cabin_settings_pane").style.display = "none"} style={{cursor: "pointer", padding: 10, margin: 10, marginTop: 0, backgroundColor: "rgb(23, 87, 148)", color: "white", textAlign: "center", borderRadius: 9, textAlign: "center"}}>
                                    Done
                                </div>
                        </div>
                        <div onClick={show_cabin_settings_pane} className="searchFormChkInputLbl" style={{marginRight: 5}}>
                            <i style={{fontSize: 15, marginRight: 10}} className="fa fa-level-up"></i>
                            Economy
                        </div>
                        <div onClick={show_travelers_settings_pane} className="searchFormChkInputLbl" style={{marginRight: 5}}>
                            <i style={{fontSize: 15, marginRight: 10}} className="fa fa-user"></i>
                            1 Adult
                        </div>
                        <div onClick={show_trip_round_settings_pane} className="searchFormChkInputLbl">
                            <i style={{fontSize: 15, marginRight: 10}} className="fa fa-repeat"></i>
                            Round-trip
                        </div>
                        <i style={{marginLeft: 10, color: "rgb(43, 52, 61)"}} className="fa fa-angle-down"></i>
                    </div>
                </div>
                <div className="each_flex-side">
                    <div style={{width: "100%"}}>
                        <div className="main-search_txt_input">
                            <i style={{fontSize: 20, marginRight: 5}} className="fa fa-calendar-o"></i>
                            <input id="departure_return_dates_input" type="text" readOnly="true" placeholder="departure - return"/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="two-search-inputs-container">
                    <div style={{position: "relative"}} className="search_forms_from_where_input_fld_container each_flex-side">
                        <div id="from_where_airports_auto_complete_input" className="airports_inputs_with_auto_complete">
                            <p onClick={()=>document.getElementById("from_where_airports_auto_complete_input").style.display = "none"} className="airports_auto_complete_close_btn">&times;</p>
                            <input autocomplete="off" id="from_where_airports_auto_complete_input_fld" 
                                onBlur={()=>{
                                    setTimeout(()=>document.getElementById("from_where_airports_auto_complete_input").style.display = "none",
                                        200);
                                }} className="airports_auto_complete_input" type="text" placeholder="Where are you leaving from?"/>
                            <div className="airports_auto_complete_list_container">
                                <ul id="flights_auto_complete_from_where_input_list">
                                    <li><div style={{padding: 10, display: "flex", flexDirection: "row", cursor: "pointer"}}>
                                        <div style={{height: 35, marginRight: 10, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <i className="fa fa-history" style={{color: "rgba(0,0,0,0.3)", fontSize: 17}}></i>
                                        </div>
                                        <div>
                                            <div>
                                                <p style={{fontSize: 14, fontWeight: "bolder", color: "rgba(0,0,0,0.8)"}}>
                                                    New York (LGA - Laguardia)
                                                </p>
                                                <p style={{fontSize: 14, color: "rgba(0,0,0,0.8)"}}>
                                                    United States
                                                </p>
                                            </div>
                                        </div>
                                    </div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="main-search_txt_input">
                            <i style={{fontSize: 20, marginRight: 5}} className="fa fa-map-marker"></i>
                            <input id="search_forms_from_where_input_fld" onClick={open_from_where_auto_complete_pane} type="text" autocomplete="off" placeholder="from where?" />
                        </div>
                    </div>
                    <div id="main_switch_inputs_btn" className="switchinputsBtn"
                        onClick={switch_input_rotate_func}>
                        <p style={{textAlign: "center"}}>
                            <i className="fa fa-exchange"></i>
                        </p>
                    </div>
                    <div className="search_forms_to_where_input_fld_container each_flex-side">
                        <div id="to_where_airports_auto_complete_input" className="airports_inputs_with_auto_complete">
                            <p onClick={()=>document.getElementById("to_where_airports_auto_complete_input").style.display = "none"} className="airports_auto_complete_close_btn">&times;</p>
                            <input autocomplete="off" id="to_where_airports_auto_complete_input_fld" 
                                onBlur={()=>{
                                    setTimeout(()=>document.getElementById("to_where_airports_auto_complete_input").style.display = "none",
                                        200);
                                }} className="airports_auto_complete_input" type="text" placeholder="Where are you going to?"/>
                            <div className="airports_auto_complete_list_container">
                                <ul id="flights_auto_complete_to_where_input_list">
                                    <li><div style={{padding: 10, display: "flex", flexDirection: "row", cursor: "pointer"}}>
                                        <div style={{height: 35, marginRight: 10, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            <i className="fa fa-history" style={{color: "rgba(0,0,0,0.3)", fontSize: 17}}></i>
                                        </div>
                                        <div>
                                            <div>
                                                <p style={{fontSize: 14, fontWeight: "bolder", color: "rgba(0,0,0,0.8)"}}>
                                                    New York (LGA - Laguardia)
                                                </p>
                                                <p style={{fontSize: 14, color: "rgba(0,0,0,0.8)"}}>
                                                    United States
                                                </p>
                                            </div>
                                        </div>
                                    </div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="main-search_txt_input">
                            <i style={{fontSize: 20, marginRight: 5}} className="fa fa-map-marker"></i>
                            <input id="search_forms_to_where_input_fld" onClick={open_to_where_auto_complete_pane} type="text" autocomplete="off" placeholder="to where?" />
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={show_search_page} className="searchBtn">
                <i className="fa fa-search" style={{marginRight: 5, color: "rgba(255,255,255,0.4)"}}></i>Search
            </div>
        </div>
    );
}

let switch_btn_switched = false
function switch_input_rotate_func(){
    if(!switch_btn_switched){
        document.getElementById("main_switch_inputs_btn").style.transform = "rotate(360deg)";
        switch_btn_switched = true;
    }else{
        document.getElementById("main_switch_inputs_btn").style.transform = "rotate(0deg)";
        switch_btn_switched = false;
    }
    
}

function open_to_where_auto_complete_pane(){
    document.getElementById("to_where_airports_auto_complete_input").style.display = "block";
    document.getElementById("to_where_airports_auto_complete_input_fld").focus();
}
function open_from_where_auto_complete_pane(){
    document.getElementById("from_where_airports_auto_complete_input").style.display = "block"
    document.getElementById("from_where_airports_auto_complete_input_fld").focus();
}
function show_trip_round_settings_pane(){
    document.getElementById("select_trip_round_settings_pane").style.display = "block";
    document.getElementById("forms_main_class_guests_cabin_settings_pane").style.display = "block";

    document.getElementById("select_cabin_settings_pane").style.display = "none";
    document.getElementById("add_travelers_settings_pane").style.display = "none";
}
function show_cabin_settings_pane(){
    document.getElementById("select_cabin_settings_pane").style.display = "block";
    document.getElementById("forms_main_class_guests_cabin_settings_pane").style.display = "block";

    document.getElementById("select_trip_round_settings_pane").style.display = "none";
    document.getElementById("add_travelers_settings_pane").style.display = "none";
}
function show_travelers_settings_pane(){
    document.getElementById("add_travelers_settings_pane").style.display = "block";
    document.getElementById("forms_main_class_guests_cabin_settings_pane").style.display = "block";

    document.getElementById("select_trip_round_settings_pane").style.display = "none";
    document.getElementById("select_cabin_settings_pane").style.display = "none";
}

export default SearchForm;