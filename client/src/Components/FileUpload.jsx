import React from "react";
import { useState,useContext,useEffect } from "react";
import { Context } from "../Context/Context";
import useUploadFile from "../Hooks/uploadFile";
import useProgressHub from "../Hooks/progressHub";

const FileUpload = () => {
    const {uploadFile} = useUploadFile();
    const [file, setFile] = useState(null);
    const {imageSrc,setImageSrc,progress,setProgress} = useContext(Context);
    const {progressHub} = useProgressHub();
    const [dropped, setDropped] = useState(false);
    const [totalBytes, setTotalBytes] = useState(0);
    const [fileError, setFileError] = useState(false);
    
    const onDrop = (e) => {
        e.preventDefault();
        
        if(e.dataTransfer.files[0].type.includes('image')){
        setFile(e.dataTransfer.files[0]);

            setDropped(true);
       
            let reader = new FileReader();
            reader.onload = function(e){
                setImageSrc(e.target.result);   
                setTotalBytes(e.total);
            }
            reader.readAsDataURL(e.dataTransfer.files[0]);
        }else{
            setFileError(true);
            setTimeout(() =>{setFileError(false)},5000)
        }
    }

    const dragenter = (e) => {
        e.preventDefault();
    }

    const onFile = (e) => {
        e.preventDefault();
        console.log(e.target.files[0]);
        setFile(e.target.files[0]);
        
       
        let reader = new FileReader();
        reader.onload = function(e){
            setImageSrc(e.target.result);   
            setTotalBytes(e.total);
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    const testClick = () => {
        const formData = new FormData();
        formData.append('file',file);
        uploadFile(formData);
    }

    useEffect(() => {
       progressHub(totalBytes,setProgress);
    }, [totalBytes]);


    return(
        <>
            <div className="flex flex-col justify-self-center min-h-screen  items-center justify-center bg-gray-100 font-sans">
                <div className=''>
                    <h1 className='text-3xl leading-loose'>Upload a File</h1>
                    <p className='text-base leading-loose mb-4'>File should be Jpeg,Png...</p>
                </div>

                <div onDragOver={dragenter} 
                    onDrop={onDrop} 
                    onDragEnter={dragenter}
                
                className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-5/12 h-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6" >
                            <img src={imageSrc} alt="" className="w-5/12 h-50 mb-3 max-w-xs text-gray-400 object-scale-down " />
                            <p className={`${dropped ? "hidden" : "mb-2 text-sm text-gray-500 dark:text-gray-400"}`}><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className={`${dropped ? "hidden" : "text-xs text-gray-500 dark:text-gray-400"}`}>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div> 
                <p className='mt-4 mb-4'>Or</p> 
                <input onChange={onFile}  typeof="file" accept="image/*"
                className="block w-5/12 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
                <button onClick={testClick}
                type="button" disabled={!file}
                className={ file ?
                    "text-white bg-blue-700 mt-8 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                : "py-2.5 px-5 mr-2 mb-2 mt-8 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"}>Upload</button>                   
            </div>  
            {fileError &&       
                <div  className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">Error!</span> The File should be an image.
                </div>
                }
        </>
    );
}

export default FileUpload;