import React, { useState } from "react";

const OrderTerms = () => {
        const [activeCollapse, setActiveCollapse] = useState(null);
        const handleCollapseClick = (index) => {
            setActiveCollapse(index === activeCollapse ? null : index);
        };
            return(
        <div className="flex justify-center text-black">
            <div className="card card-large w-1/2 bg-[#F6F6F6] shadow-xl ">
                <div className="text-2xl font-medium">
                    Kebijakan
                </div>
                <div className="card-body">
                    <div className="bg-white join join-vertical w-full">
                        <div 
                        className={`collapse collapse-arrow join-item ${
                        activeCollapse === 1 ? "border" : ""
                        }`}>
                            <input 
                            type="radio"
                            name="my-accordion-4"
                            checked={activeCollapse === 1}
                            onChange={() => handleCollapseClick(1)} 
                            /> 
                            <div className="collapse-title text-xl font-medium ">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content"> 
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem nostrum, fugiat facilis quo soluta id libero aliquid? Quidem culpa aspernatur tempora dolorem fuga nobis ducimus odio at in minima.</p>
                            </div>
                        </div>
                        
                        <div 
                            className={`collapse collapse-arrow join-item ${
                            activeCollapse === 2 ? "border" : ""
                        }`} >
                            <input 
                            type="radio"
                            name="my-accordion-4"
                            checked={activeCollapse === 2}
                            onChange={() => handleCollapseClick(2)} 
                            /> 
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content"> 
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe culpa, iure vitae cum iste provident illum porro nulla consequatur expedita odio! Rem ipsum magnam velit reprehenderit autem pariatur voluptate amet!</p>
                            </div>
                        </div>
                        
                        <div 
                        className={`collapse collapse-arrow join-item ${
                        activeCollapse === 3 ? "border" : ""
                        }`}>
                            <input 
                            type="radio"
                            name="my-accordion-4"
                            checked={activeCollapse === 3}
                            onChange={() => handleCollapseClick(3)} 
                            /> 
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content"> 
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maiores in minima tempora rem earum veniam aliquid, ad soluta, placeat optio. Obcaecati esse at nulla quia architecto aspernatur, voluptatibus ab.</p>
                            </div>
                        </div>

                        <div 
                        className={`collapse collapse-arrow join-item ${
                            activeCollapse === 4 ? "border" : ""
                          }`}
                        >
                            <input 
                            type="radio"
                            name="my-accordion-4"
                            checked={activeCollapse === 4}
                            onChange={() => handleCollapseClick(4)} /> 
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content"> 
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maiores in minima tempora rem earum veniam aliquid, ad soluta, placeat optio. Obcaecati esse at nulla quia architecto aspernatur, voluptatibus ab.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    );
}
export default OrderTerms;