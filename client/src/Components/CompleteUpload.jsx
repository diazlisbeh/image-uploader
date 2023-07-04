import React from "react";
import check from "../assets/check.png";

const CompleteUpload = () => {


    return(
        <>
            <div className="flex flex-col justify-self-center  w-full h-full ">
                <figure className="w-12 self-center m-5">
                    <img src={check} />
                </figure>
                <p className="mb-5">Uploaded Successfully!</p>
                <figure className="self-center w-40 mb-5">
                    <img src="https://diazsa.blob.core.windows.net/images/Ai1.png" ></img>
                </figure>
                <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative w-40  self-center ">
                    <input type="search" id="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <button type='button' className="text-white absolute right-0.5 bottom-0.5 h-12  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Copy Link</button>
                </div>
            </div>
        </>
    )
}

export default CompleteUpload;