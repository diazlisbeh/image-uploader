import React, { useEffect } from "react";
import check from "../assets/check.png";
import { useContext,useState } from "react";
import { Context } from "../Context/Context";

const CompleteUpload = () => {
    const {imageSrc} = useContext(Context);
    const [copied, setCopied] = useState(false);

    useEffect(() => { }, [imageSrc]);

    const copyLink = () => {
        navigator.clipboard.writeText(imageSrc.filePath);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }

    return(
        <>
            <div className="flex flex-col justify-self-center  w-full h-full ">
                <figure className="w-12 self-center m-5">
                    <img src={check} />
                </figure>
                <p className="mb-5">Uploaded Successfully!</p>
                <figure className="self-center w-20 mb-5 m-0">
                    <img src={imageSrc.filePath} ></img>
                </figure>
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
               
                <div className="relative w-40  self-center ">
                    <input type="text" id="inputLink" value={imageSrc.filePath}
                    className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></input>
                    
                    <button type='button' onClick={()=>copyLink()} 
                    className="text-white absolute right-0.5 bottom-0.5 h-12  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Copy Link</button>
                    
                </div>
                    {copied && (
                        <span className="text-green-500 w-68 text-right text-sm ml-2">Link Copied!</span>
                    )}
            </div>
        </>
    )
}

export default CompleteUpload;