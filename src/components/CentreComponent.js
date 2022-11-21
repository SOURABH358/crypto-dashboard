function CentreComponent(){
    return (
        <section id="centre__component" className="h-[20rem] p-4 flex gap-4 shadow-md">
            <div className="w-[65%] h-full rounded-lg bg-darker-blue text-white p-4">
                <h3 className="">Price</h3>
                <p className="text-grey text-[0.9rem] pt-2">The price of Bitcoin over the last day</p>
            </div>
            <div className="h-full w-[35%] bg-darker-blue rounded-lg shadow-md p-4">
                <h3 className="font-bold text-[1.25rem] text-white">Market Status</h3>
            </div>
        </section>
    )
}

export default CentreComponent;