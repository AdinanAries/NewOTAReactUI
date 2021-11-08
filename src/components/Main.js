import SearchForm from "./SearchForm";
import ChooseUs from "./ChooseUs";
import DownloadMobileApp from "./DownloadMobileApp";

function Main(){
    return (
        <main>
            <div className="hero-section">
                <div style={{maxWidth: 1500, margin: "auto"}}>
                    <div style={{marginLeft: 30, maxWidth: 900}}>
                        <SearchForm />
                    </div>
                </div>
            </div>
            <ChooseUs />
            <DownloadMobileApp />
        </main>
    );
}

export default Main;