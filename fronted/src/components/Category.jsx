import React from "react";
import { categorias } from "../data/categorias";
import {Link} from 'react-router-dom';
const Category=()=>{
    return(
        <div className="max-w-[1640px] m-auto px-4 py-12">
                
                    
                

            <h1 className="text-orange-600 font-bold text-4xl text-center my-8">Categorias</h1>
            
            {/**Categories */}

            
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

                {/**Bebidas Alcoholicas */}

                
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <nav><Link to="BebidasAlcoholicas">
                    <h2 className="font-bold sm:text-xl text-orange-500">{categorias[0].name}</h2>
                    <img src={categorias[0].image} alt={categorias[0].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />
                        
                        </Link></nav>   
                    
                </div>

                {/**Bebidas no Alcoholicas */}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <nav><Link to="BebidasNoAlcoholicas">
                        
                    <h2 className="font-bold sm:text-xl text-orange-500">{categorias[1].name}</h2>
                    <img src={categorias[1].image} alt={categorias[1].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />

                        </Link></nav>
                    
                    
                    
                    
                </div>

                {/**CCigarros */}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <nav><Link to="Cigarros">
                    <h2 className="font-bold sm:text-xl text-orange-500">{categorias[2].name}</h2>
                    <img src={categorias[2].image} alt={categorias[2].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />
                        </Link></nav>
                
                    
                </div>

                {/**Helados */}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <nav><Link to="Helados">
                    <h2 className="font-bold sm:text-xl text-orange-500">{categorias[3].name}</h2>
                    <img src={categorias[3].image} alt={categorias[3].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />
                        </Link></nav>
                
                    
                </div>
                
                {/**Confiteria */}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <nav><Link to="Confiteria">
                    <h2 className="font-bold sm:text-xl text-orange-500">{categorias[4].name}</h2>
                        <img src={categorias[4].image} alt={categorias[4].name}
                        className="w-[250px] my-5 h-[150px] rounded-md"
                        />
                        
                        </Link></nav>
                
                </div>

                {/**Panes*/}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <nav><Link to="Panes">
                    <h2 className="font-bold sm:text-xl text-orange-500">{categorias[5].name}</h2>
                    <img src={categorias[5].image} alt={categorias[5].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />
                    </Link></nav>
                    
                       
                </div>

                {/**Abarrotes*/}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <nav><Link to="Abarrotes">
                    <h2 className="font-bold sm:text-xl text-orange-500">{categorias[6].name}</h2>
                    <img src={categorias[6].image} alt={categorias[6].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />
                    </Link></nav>
                    
                       
                </div>

                {/**Embutidos*/}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <nav><Link to="Embutidos">
                    <h2 className="font-bold sm:text-xl text-orange-500">{categorias[7].name}</h2>
                    <img src={categorias[7].image} alt={categorias[7].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />
                    </Link></nav>
                    
                       
                </div>

                {/**Hogar Limpieza*/}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <nav><Link to="HogarLimpieza">
                    <h2 className="font-bold sm:text-xl text-orange-500">{categorias[8].name}</h2>
                    <img src={categorias[8].image} alt={categorias[8].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />
                    </Link></nav>
                    
                       
                </div>

                {/**Cuidado Personal */}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <nav><Link to="CuidadoPersonal">
                    <h2 className="font-bold sm:text-xl text-orange-500">{categorias[9].name}</h2>
                        <img src={categorias[9].image} alt={categorias[9].name}
                        className="w-[250px] my-5 h-[150px] rounded-md"
                        />
                        
                    </Link></nav>
                                    
                </div>

                {/**Hielo */}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                   <nav><Link to="Hielo">
                   <h2 className="font-bold sm:text-xl text-orange-500">{categorias[10].name}</h2>
                    <img src={categorias[10].image} alt={categorias[10].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />
                     
                    </Link></nav>
                   
                   
                    
                </div>

                {/**Mascotas */}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                   <nav><Link to="Mascotas">
                   <h2 className="font-bold sm:text-xl text-orange-500">{categorias[11].name}</h2>
                    <img src={categorias[11].image} alt={categorias[11].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />
                     
                    </Link></nav>
                   
                   
                    
                </div>

                {/**Electronicos */}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                   <nav><Link to="Electronicos">
                   <h2 className="font-bold sm:text-xl text-orange-500">{categorias[12].name}</h2>
                    <img src={categorias[12].image} alt={categorias[12].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />
                     
                    </Link></nav>
                   
                   
                    
                </div>

                {/**Piqueos y Snack*/}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <nav><Link to="PiqueoySancks">
                    <h2 className="font-bold sm:text-xl text-orange-500">{categorias[13].name}</h2>
                    <img src={categorias[13].image} alt={categorias[13].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />
                    </Link></nav>
                    
                       
                </div>
                
                {/**Preservativos */}
                <div className="bg-gray-300 rounded-lg p-4 justify-between items-center cursor-pointer hover:scale-105 duration-300 ">
                    <nav><Link to="Preservativos">
                        
                    <h2 className="font-bold sm:text-xl text-orange-500">{categorias[14].name}</h2>
                    <img src={categorias[14].image} alt={categorias[14].name}
                    className="w-[250px] my-5 h-[150px] rounded-md"
                    />
                        </Link></nav>
                    
                             
                </div>
                  

            </div>
        </div>
    )
}

export default Category;