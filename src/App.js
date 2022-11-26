import React from "react";
import SideBar from "./components/sideBar";
import Main from "./components/Main";
function App(){
    return <section id = "container" className="max-w-screen min-h-screen flex">
        <SideBar/>
        <Main/>
    </section>
}

export default App;