import securepaymentssvg from '../icons/securepayments.svg';
import bestdealssvg from '../icons/bestdeals.svg';
import customersupportsvg from '../icons/customersupport.svg';

var ChooseUs = ()=>{
    return (
        <div>
            <div className="wrapper">
                <h1 style={{textAlign: "center", marginTop: 20, color: "#c900b0", marginBottom: "10px", fontFamily: "Courgette"}}
                >We are the Best!</h1>
                <p style={{textAlign: "center", fontFamily: "Courgette"}}
                >Here is the reason why we claim to be the best in the market</p>
                <div className="why-choose-us-container" >
                    <div className="each-choose-us-container">
                        
                        <div style={{backgroundImage: `url('${securepaymentssvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                            height: 150, marginTop: 5, marginBottom: 5}}>

                        </div>
                        <p style={{color: "#c900b0", fontWeight: "bolder", textAlign: "center", marginBottom: 10, fontFamily: "Courgette"}}>
                            Secure Payment</p>
                        <p style={{color: "rgba(0,0,0,0.8)", textAlign: "center", fontFamily: "Courgette"}}>
                            This is a place holder text for the description of this info card</p>
                    </div>
                    <div className="each-choose-us-container">
                        
                        <div style={{backgroundImage: `url('${customersupportsvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                            height: 150, marginTop: 5, marginBottom: 5}}>

                        </div>
                        <p style={{color: "#c900b0", fontWeight: "bolder", textAlign: "center", marginBottom: 10, fontFamily: "Courgette"}}>
                            Customer Support</p>
                        <p style={{color: "rgba(0,0,0,0.8)", textAlign: "center", fontFamily: "Courgette"}}>
                            This is a place holder text for the description of this info card</p>
                    </div>
                    <div className="each-choose-us-container">
                        
                        <div style={{backgroundImage: `url('${bestdealssvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                            height: 150, marginTop: 5, marginBottom: 5}}>

                        </div>
                        <p style={{color: "#c900b0", fontWeight: "bolder", textAlign: "center", marginBottom: 10, fontFamily: "Courgette"}}>
                            Best Deals</p>
                        <p style={{color: "rgba(0,0,0,0.8)", textAlign: "center", fontFamily: "Courgette"}}>
                            This is a place holder text for the description of this info card</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseUs;