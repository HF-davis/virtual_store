import React from "react";

const Cerveza=()=>{
    return(
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-4 ml-10">
            {cerveza.map((item,index)=>(
                   <div key={index} className="border shadow-lg  border-neutral-300 rounded-lg hover:scale-105 duration-300">
                        <img src={item.image} alt={item.name} className="w-[300px] h-[300px]"/>
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-bold">{item.name}</p>
                            <p>
                                <span className="bg-orange-500 text-white p-1 rounded-full">{item.price}</span>
                            </p>
                        </div>
                   </div> 
                ))}
        </div>
    );

};

export default Cerveza;