import React from "react";

const HogarLimpieza=()=>{

    return(
        <div className=" max-w-[1640px] flex">
            <section>
                <div className="ml-20 my-5 border-2 border-l-orange-400 border-b-transparent border-t-transparent border-r-transparent">
                <h2 className="font-bold ">Hogas y Limpieza</h2>
                </div>
                
                <ul>
                    <li className="my-5 ml-20">Descartables</li>
                    <li className="my-5 ml-20">Papeles y Servilletas</li>
                    <li className="my-5 ml-20">Mascarillas</li>
                    <li className="my-5 ml-20">Lavanderia</li>
                    <li className="my-5 ml-20">Lavavajilla</li>
                    <li className="my-5 ml-20">Limpiadores</li>
                    <li className="my-5 ml-20">Desinfectantes</li>
                    <li className="my-5 ml-20">Complementos de Lavado</li>
    
                </ul>
            </section>
        </div>
    );
};

export default HogarLimpieza;