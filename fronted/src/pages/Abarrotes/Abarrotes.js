import React from "react";

const Abarrotes=()=>{

    return(
        <div className=" max-w-[1640px] flex">
            <section>
                <div className="ml-20 my-5 border-2 border-l-orange-400 border-b-transparent border-t-transparent border-r-transparent">
                <h2 className="font-bold ">Abarrotes</h2>
                </div>
                
                <ul>
                    <li className="my-5 ml-20">Básicos</li>
                    <li className="my-5 ml-20">Alimentos en Conserva</li>
                    <li className="my-5 ml-20">Desayunos</li>
                    <li className="my-5 ml-20">Cremas y Salsas</li>
                    <li className="my-5 ml-20">Postres y Reposterias</li>
                    
                </ul>
            </section>
        </div>
    );
};

export default Abarrotes;