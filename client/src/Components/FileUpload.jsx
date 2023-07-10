import React from "react";
import { useState,useContext,useEffect } from "react";
import { Context } from "../Context/Context";
import useUploadFile from "../Hooks/uploadFile";
import useProgressHub from "../Hooks/progressHub";

const FileUpload = () => {
    const [imageSrc, setImageSrc] = useState("https://diazsa.blob.core.windows.net/images/image.svg");
    const {uploadFile} = useUploadFile();
    const [file, setFile] = useState(null);
    const {setTotalBytes} = useContext(Context);
    const {progressHub} = useProgressHub();
    
    const onDrop = (e) => {
        e.preventDefault();

        setFile(e.dataTransfer.files[0]);

        let reader = new FileReader();
        reader.onload = function(e){
            setImageSrc(e.target.result);   
            console.log(e.total);
            setTotalBytes(e.total);
        }
        reader.readAsDataURL(e.dataTransfer.files[0]);
      
    }

    const dragenter = (e) => {
        e.preventDefault();
    }

    const testClick = () => {
        const formData = new FormData();
        formData.append('file',file);
        uploadFile(formData);
    }

    useEffect(() => {
       progressHub();
    }, []);


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
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-5/12 h-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6" >
                            <img src={imageSrc} alt="" class="w-6/12 h-6/12 mb-3 text-gray-400" />
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                </div> 
                <p className='mt-4'>Or..</p> 
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white justify-self-start self-start" for="file_input">Upload file</label>
                <input class="block w-5/12 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
      
            </div>
            <button onClick={testClick}
            type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Yellow</button>
           
        </>
    );
}

export default FileUpload;