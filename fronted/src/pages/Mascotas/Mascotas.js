import React from "react";

const Mascotas=()=>{

    return(
        <div className=" max-w-[1640px] flex">
            <section>
                <div className="ml-20 my-5 border-2 border-l-orange-400 border-b-transparent border-t-transparent border-r-transparent">
                <h2 className="font-bold ">Mascotas</h2>
                </div>
                
                <ul>
                    <li className="my-5 ml-20">Perros</li>
                    <li className="my-5 ml-20">Gatos</li>
                    
                </ul>
            </section>
        </div>
    );
};

export default Mascotas;