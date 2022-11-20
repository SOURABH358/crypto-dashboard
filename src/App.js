import React from "react";
import SideBar from "./components/sideBar";
import Main from "./components/Main";
function App(){
    return <section id = "container" className="max-w-screen min-h-screen grid grid-cols-[1fr,5fr]">
        <SideBar/>
        <Main/>
    </section>
}

export default App;