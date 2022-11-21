import Header from "./Header";
import Cards from "./Cards";
import CentreComponent from "./CentreComponent";
function Main(){
    return (
        <section id="main" className="min-h-screen bg-darkest-blue">
            <Header/>
            <Cards/>
            <CentreComponent/>
        </section>
    )
}

export default Main;