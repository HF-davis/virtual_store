import React from "react";

const Panes=()=>{

    return(
        <div className=" max-w-[1640px] flex">
            <section>
                <div className="ml-20 my-5 border-2 border-l-orange-400 border-b-transparent border-t-transparent border-r-transparent">
                <h2 className="font-bold ">Panes</h2>
                </div>
                
                <ul>
                    <li className="my-5 ml-20">Panes</li>
                    <li className="my-5 ml-20">Keke</li>
                    <li className="my-5 ml-20">Tostadas</li>
                    <li className="my-5 ml-20">Biscuits</li>
                    <li className="my-5 ml-20">Panetones</li>
                    
                </ul>
            </section>
        </div>
    );
};

export default Panes;