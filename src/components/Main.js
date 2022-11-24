import Header from "./Header";
import Cards from "./Cards";
import CentreComponent from "./CentreComponent";
import BottomComponent from "./BottomComponent";
function Main(){
    return (
        <section id="main" className="min-h-screen bg-darkest-blue">
            <Header/>
            <Cards/>
            <CentreComponent/>
            <BottomComponent/>
        </section>
    )
}

export default Main;