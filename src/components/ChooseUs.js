import securepaymentssvg from '../icons/securepayments.svg';
import bestdealssvg from '../icons/bestdeals.svg';
import customersupportsvg from '../icons/customersupport.svg';

var ChooseUs = ()=>{
    return (
        <div>
            <div className="wrapper">
                <h1 style={{textAlign: "center", marginTop: 20}}
                >We are the Best!</h1>
                <p style={{textAlign: "center"}}
                >Here is the reason why we claim to be the best in the market</p>
                <div className="why-choose-us-container" >
                    <div className="each-choose-us-container">
                        
                        <div style={{backgroundImage: `url('${securepaymentssvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                            height: 150, marginTop: 5, marginBottom: 5}}>

                        </div>
                        <p style={{color: "#c900b0", fontWeight: "bolder", textAlign: "center", marginBottom: 10}}>
                            Secure Payment</p>
                        <p style={{color: "rgba(0,0,0,0.8)", textAlign: "center"}}>
                            This is a place holder text for the description of this info card</p>
                    </div>
                    <div className="each-choose-us-container">
                        
                        <div style={{backgroundImage: `url('${customersupportsvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                            height: 150, marginTop: 5, marginBottom: 5}}>

                        </div>
                        <p style={{color: "#c900b0", fontWeight: "bolder", textAlign: "center", marginBottom: 10}}>
                            Customer Support</p>
                        <p style={{color: "rgba(0,0,0,0.8)", textAlign: "center"}}>
                            This is a place holder text for the description of this info card</p>
                    </div>
                    <div className="each-choose-us-container">
                        
                        <div style={{backgroundImage: `url('${bestdealssvg}')`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center",
                            height: 150, marginTop: 5, marginBottom: 5}}>

                        </div>
                        <p style={{color: "#c900b0", fontWeight: "bolder", textAlign: "center", marginBottom: 10}}>
                            Best Deals</p>
                        <p style={{color: "rgba(0,0,0,0.8)", textAlign: "center"}}>
                            This is a place holder text for the description of this info card</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseUs;