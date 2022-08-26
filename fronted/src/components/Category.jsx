import React from "react";
import { categories } from "../data/data";

const Category=()=>{
    return(
        <div className="max-w-[1640px] m-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center my-8">Categorias</h1>
            {/**Categories */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {categories.map((item,index)=>(
                    <div key={index} className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300">
                        <h2 className="font-bold sm:text-xl">{item.name}</h2>
                        <img src={item.image} alt={item.image}
                        className="w-[250px] my-5 h-[150px] rounded-md"
                        /> 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category;