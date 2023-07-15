import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";

const Loading = () => {

    const {progress} = useContext(Context);

    useEffect(() => { console.log(Math.round(progress))      }, [progress]);   

    return(
        <>
            <div className="  h-screen flex flex-col justify-center align-middle">
                <p className="mb-1 w-2/4 self-center text-lg font-medium   dark:text-white">Uploading...</p>
                <div className=" h-4 mb-4 w-2/4 self-center bg-gray-200 rounded-full  dark:bg-gray-700">
                    <div className={`h-4 bg-blue-600 rounded-full dark:bg-blue-500 `} style={{width: progress+'%'}}  ></div>
                </div>
            </div>
        </>
    )
}

export default Loading;