import React from "react";

const OrderTerms = () => {
    return(
        <div className="flex justify-center text-black">
            <div className="card card-large w-1/2 bg-[#F6F6F6] shadow-xl ">
                <div className="text-2xl font-medium">
                    Kebijakan
                </div>
                <div className="card-body">
                    <div className="bg-white join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item ">
                            <input type="radio" name="my-accordion-4" checked="checked border" /> 
                            <div className="collapse-title text-xl font-medium ">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content"> 
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem nostrum, fugiat facilis quo soluta id libero aliquid? Quidem culpa aspernatur tempora dolorem fuga nobis ducimus odio at in minima.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border">
                            <input type="radio" name="my-accordion-4" /> 
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content"> 
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe culpa, iure vitae cum iste provident illum porro nulla consequatur expedita odio! Rem ipsum magnam velit reprehenderit autem pariatur voluptate amet!</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border">
                            <input type="radio" name="my-accordion-4" /> 
                            <div className="collapse-title text-xl font-medium">
                                Click to open this one and close others
                            </div>
                            <div className="collapse-content"> 
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maiores in minima tempora rem earum veniam aliquid, ad soluta, placeat optio. Obcaecati esse at nulla quia architecto aspernatur, voluptatibus ab.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border">
                            <input type="radio" name="my-accordion-4" /> 
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