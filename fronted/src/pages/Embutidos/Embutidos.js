import React from "react";

const Embutidos=()=>{

    return(
        <div className=" max-w-[1640px] flex">
            <section>
                <div className="ml-20 my-5 border-2 border-l-orange-400 border-b-transparent border-t-transparent border-r-transparent">
                <h2 className="font-bold ">Embutidos, Lacteos y Huevos</h2>
                </div>
                
                <ul>
                    <li className="my-5 ml-20">Leche</li>
                    <li className="my-5 ml-20">Huevo</li>
                    <li className="my-5 ml-20">Embutidos</li>
                    <li className="my-5 ml-20">Congelados</li>
                    <li className="my-5 ml-20">Yogurt</li>
                    
                </ul>
            </section>
        </div>
    );
};

export default Embutidos;