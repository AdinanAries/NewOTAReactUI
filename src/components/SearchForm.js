function SearchForm(){
    return(
        <div className="main-search-form">
            <div style={{display: "flex", marginBottom: 5}}>
                <div style={{marginRight: 5, width: "calc(50% - 5px)"}}>
                    <div className="forms_class_guests_cabin_settings_container">
                        <div id="forms_main_class_guests_cabin_settings_pane" className="forms_class_guests_cabin_settings_pane">
                            <p onClick={()=>document.getElementById("forms_main_class_guests_cabin_settings_pane").style.display = "none"} className="airports_auto_complete_close_btn">&times;</p>
                            <div id="add_travelers_settings_pane" style={{padding: 15, display: "none"}}>
                                <p style={{textAlign: "center", fontWeight: "bolder", marginTop: 10, marginBottom: 20}}>
                                    Add Travelers</p>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        Adults</div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                        <div style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 30, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            -</div>
                                        <div style={{width: 40, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            1</div>
                                        <div style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 30, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            +</div>
                                    </div>
                                </div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        Children</div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                        <div style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 30, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            -</div>
                                        <div style={{width: 40, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            0</div>
                                        <div style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 30, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            +</div>
                                    </div>
                                </div>
                                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        Infants</div>
                                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                                        <div style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 30, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            -</div>
                                        <div style={{width: 40, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            0</div>
                                        <div style={{cursor: "pointer", borderRadius: "100%", border: "1px solid rgba(0,0,0,0.3)", width: 30, height: 30, textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                            +</div>
                                    </div>
                                </div>
                            </div>
                            <div id="select_cabin_settings_pane" style={{padding: 15, display: "none"}}>
                                <p style={{textAlign: "center", fontWeight: "bolder", marginTop: 10, marginBottom: 20}}>
                                    Select Cabin</p>
                                <div style={{cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <label><div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        Economy</div></label>
                                    <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <input type="radio" />
                                    </div>
                                </div>
                                <div style={{cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <label><div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        Business</div></label>
                                    <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <input type="radio" />
                                    </div>
                                </div>
                                <div style={{cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <label><div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        First</div></label>
                                    <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <input type="radio" />
                                    </div>
                                </div>
                            </div>
                            <div id="select_trip_round_settings_pane" style={{padding: 15, display: "none"}}>
                                <p style={{textAlign: "center", fontWeight: "bolder", marginTop: 10, marginBottom: 20}}>
                                    Select Trip Round</p>
                                <div style={{cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <label><div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        Round-trip</div></label>
                                    <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <input type="radio" />
                                    </div>
                                </div>
                                <div style={{cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <label><div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        One-way</div></label>
                                    <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <input type="radio" />
                                    </div>
                                </div>
                                <div style={{cursor: "pointer", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom: 10}}>
                                    <label><div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        Multi-city</div></label>
                                    <div style={{height: 30, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                        <input type="radio" />
                                    </div>
                                </div>
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
                            One-way
                        </div>
                        <i style={{marginLeft: 10, color: "slateblue"}} className="fa fa-caret-down"></i>
                    </div>
                </div>
                <div style={{width: "50%"}}>
                    <div style={{width: "100%"}}>
                        <div className="main-search_txt_input">
                            <i style={{fontSize: 20, marginRight: 5}} className="fa fa-calendar-o"></i>
                            <input type="text" placeholder="departure - return"/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="two-search-inputs-container">
                    <div style={{position: "relative"}} className="each_flex-side">
                        <div id="from_where_airports_auto_complete_input" className="airports_inputs_with_auto_complete">
                            <p onClick={()=>document.getElementById("from_where_airports_auto_complete_input").style.display = "none"} className="airports_auto_complete_close_btn">&times;</p>
                            <input id="from_where_airports_auto_complete_input_fld" 
                                onBlur={()=>{
                                    setTimeout(()=>document.getElementById("from_where_airports_auto_complete_input").style.display = "none",
                                        200);
                                }} className="airports_auto_complete_input" type="text" placeholder="Where are you leaving from?"/>
                            <div className="airports_auto_complete_list_container">
                                <ul>
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
                                                    Ghana
                                                </p>
                                            </div>
                                        </div>
                                    </div></li>
                                    <li><div style={{padding: 10, cursor: "pointer"}}>
                                        <div>
                                            <p style={{fontSize: 14, fontWeight: "bolder", color: "rgba(0,0,0,0.8)"}}>
                                                <i className="fa fa-plane" style={{color: "slateblue", marginRight: 10, fontSize: 16}}></i>
                                                New York (LGA - Laguardia)
                                            </p>
                                            <p style={{marginLeft: 20, fontSize: 14, color: "rgba(0,0,0,0.8)"}}>
                                                Ghana
                                            </p>
                                        </div>
                                    </div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="main-search_txt_input">
                            <i style={{fontSize: 20, marginRight: 5}} className="fa fa-map-marker"></i>
                            <input onClick={open_from_where_auto_complete_pane} type="text" placeholder="from where?" />
                        </div>
                    </div>
                    <div className="switchinputsBtn">
                        <p style={{textAlign: "center"}}>
                            <i className="fa fa-exchange"></i>
                        </p>
                    </div>
                    <div style={{marginLeft: -7, position: "relative"}} className="each_flex-side">
                        <div id="to_where_airports_auto_complete_input" className="airports_inputs_with_auto_complete">
                            <p onClick={()=>document.getElementById("to_where_airports_auto_complete_input").style.display = "none"} className="airports_auto_complete_close_btn">&times;</p>
                            <input id="to_where_airports_auto_complete_input_fld" 
                                onBlur={()=>{
                                    setTimeout(()=>document.getElementById("to_where_airports_auto_complete_input").style.display = "none",
                                        200);
                                }} className="airports_auto_complete_input" type="text" placeholder="Where are you going to?"/>
                            <div className="airports_auto_complete_list_container">
                                <ul>
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
                                                    Ghana
                                                </p>
                                            </div>
                                        </div>
                                    </div></li>
                                    <li><div style={{padding: 10, cursor: "pointer"}}>
                                        <div>
                                            <p style={{fontSize: 14, fontWeight: "bolder", color: "rgba(0,0,0,0.8)"}}>
                                                <i className="fa fa-plane" style={{color: "slateblue", marginRight: 10, fontSize: 16}}></i>
                                                New York (LGA - Laguardia)
                                            </p>
                                            <p style={{marginLeft: 20, fontSize: 14, color: "rgba(0,0,0,0.8)"}}>
                                                Ghana
                                            </p>
                                        </div>
                                    </div></li>
                                </ul>
                            </div>
                        </div>
                        <div className="main-search_txt_input">
                            <i style={{fontSize: 20, marginRight: 5}} className="fa fa-map-marker"></i>
                            <input onClick={open_to_where_auto_complete_pane} type="text" placeholder="to where?" />
                        </div>
                    </div>
                </div>
            </div>
            <div  className="searchBtn">
                Search
            </div>
        </div>
    );
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