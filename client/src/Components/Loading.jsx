import React from "react";


const Loading = () => {
    return(
        <>
            <div className="  h-screen flex flex-col justify-center align-middle">
                <p class="mb-1 w-2/4 self-center text-lg font-medium   dark:text-white">Uploading...</p>
                <div class=" h-4 mb-4 w-2/4 self-center bg-gray-200 rounded-full  dark:bg-gray-700">
                    <div class="h-4 bg-blue-600 rounded-full dark:bg-blue-500 w-45" ></div>
                </div>
            </div>
        </>
    )
}

export default Loading;