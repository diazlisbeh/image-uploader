import React from "react";


const Error = () => {
    return(
        <>
            <div className="flex flex-col gap-8 justify-self-center  justify-center items-center w-full h-96  ">
                <h3 className="text-4xl font-medium">An Error has ocurred :{"("}</h3>
                <figure className="w-12 self-center m-5">
                    <img src="https://cdn-icons-png.flaticon.com/128/463/463612.png" />    
                </figure>    
            </div>
        </>
    )
}

export default Error;