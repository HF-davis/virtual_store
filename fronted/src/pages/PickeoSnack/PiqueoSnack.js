import React from "react";

const PiqueoSnack=()=>{

    return(
        <div className=" max-w-[1640px] flex">
        <section>
            <div className="ml-20 my-5 border-2 border-l-orange-400 border-b-transparent border-t-transparent border-r-transparent">
            <h2 className="font-bold ">Piqueos y Snacks</h2>
            </div>
            
            <ul>
                <li className="my-5 ml-20">Papas</li>
                <li className="my-5 ml-20">Piqueos</li>
                <li className="my-5 ml-20">Frutos Secos</li>
                <li className="my-5 ml-20">Habas y Mani</li>
                <li className="my-5 ml-20">Pop Corn</li>
                <li className="my-5 ml-20">Chifles Camotes</li>
        
            </ul>
        </section>
    </div>
    );
}

export default PiqueoSnack;