function SearchForm(){
    return(
        <div className="main-search-form">
            <div style={{display: "flex"}}>
                <div style={{marginRight: 5, width: "calc(50% - 5px)"}}>
                    <div style={{display: "flex", flexDirection: "row", marginBottom: 10, padding: 10, borderRadius: 4}}>
                        <div style={{marginRight: 5}}>
                            <input style={{display: "none"}} type="radio" />
                            <label className="searchFormChkInputLbl active">Economy</label>
                        </div>
                        <div style={{marginRight: 5}}>
                            <input style={{display: "none"}} type="radio" />
                            <label className="searchFormChkInputLbl">Business</label>
                        </div>
                        <div>
                            <input style={{display: "none"}} type="radio" />
                            <label className="searchFormChkInputLbl">First Class</label>
                        </div>
                    </div>
                    <div style={{display: "flex", flexDirection: "row", marginBottom: 10}}>
                        <div style={{marginRight: 5, width: "calc(50% - 5px)"}}>
                            <div className="main-search_txt_input">
                                <i style={{fontSize: 20, marginRight: 5}} className="fa fa-user"></i>
                                <input type="number" placeholder="how many adults?"/>
                            </div>
                        </div>
                        <div style={{width: "50%"}}>
                            <div className="main-search_txt_input">
                                <i style={{fontSize: 20, marginRight: 5}} className="fa fa-user"></i>
                                <input type="number" placeholder="how many children?"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{width: "50%"}}>
                    <div style={{display: "flex", flexDirection: "row", marginBottom: 10, padding: 10, borderRadius: 4}}>
                        <div style={{marginRight: 5}}>
                            <input style={{display: "none"}} type="radio" />
                            <label  className="searchFormChkInputLbl active">One-way</label>
                        </div>
                        <div style={{marginRight: 5}}>
                            <input style={{display: "none"}} type="radio" />
                            <label className="searchFormChkInputLbl">Round-trip</label>
                        </div>
                        <div>
                            <input style={{display: "none"}} type="radio" />
                            <label className="searchFormChkInputLbl disabled">Multi-city</label>
                        </div>
                    </div>
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
                    <div className="each_flex-side">
                        <div className="main-search_txt_input">
                            <i style={{fontSize: 20, marginRight: 5}} className="fa fa-map-marker"></i>
                            <input type="text" placeholder="from where?" />
                        </div>
                    </div>
                    <div className="switchinputsBtn">
                        <p style={{textAlign: "center", color: "white"}}>
                            <i className="fa fa-exchange"></i>
                        </p>
                    </div>
                    <div className="each_flex-side">
                        <div className="main-search_txt_input">
                            <i style={{fontSize: 20, marginRight: 5}} className="fa fa-map-marker"></i>
                            <input type="text" placeholder="to where?" />
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

export default SearchForm;