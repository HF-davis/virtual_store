import React from "react";

const Hero=()=>{
    return (
        <div className="max-w-[1640px] mx-auto p-4">
            <div className="max-h-[500px] relative">
                {/**Overlay */}
                <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/60 flex flex-col justify-center">
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-orange-500">Best</span></h1>
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"> <span className="text-orange-500">Foods</span> Delivered</h1>
                </div>
                <img  className="w-full max-h-[500px] object-cover" src='https://static01.nyt.com/images/2016/10/20/science/foods-acne/foods-acne-videoSixteenByNineJumbo1600.jpg' alt="tomato salad"/>
            </div>
        </div>
    )
}

export default Hero;