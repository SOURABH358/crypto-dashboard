function SideBar(){
    return(
        <section id = "side__bar" className="min-h-screen bg-darker-blue py-4 px-2">
            <div id ="logo" className="text-medium-blue px-4 text-2xl font-bold">COINF</div>
            <ul id = "menu__bar" className="list-none flex flex-col gap-6 py-12 text-grey pl-4">
                <li>Overview</li>
                <li>Trader Profile</li>
                <li>Echarts</li>
                <li>Mailbox</li>
                <li>Pages</li>
            </ul>
            <ul id = "others" className="">

            </ul>
        </section>
    )
}

export default SideBar;