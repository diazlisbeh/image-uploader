import React from "react";

const FileUpload = () => {
    const onDrop = (e) => {
        e.preventDefault();
        console.log(e.dataTransfer.files);
    }

    const dragenter = (e) => {
        e.preventDefault();
        console.log(e.dataTransfer.files);
    }


    return(
        <>
            <div className="flex flex-col justify-self-center min-h-screen  items-center justify-center bg-gray-100 font-sans">
                <div className=''>
                    <h1 className='text-3xl leading-loose'>Upload a File</h1>
                    <p className='text-base leading-loose mb-4'>File should be Jpeg,Png...</p>
                </div>

                <div onDragOver={dragenter} onDrop={onDrop} className="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-5/12 h-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-5 pb-6" >
                            <img src="https://diazsa.blob.core.windows.net/images/image.svg" alt="" class="w-6/12 h-6/12 mb-3 text-gray-400" />
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
        </>
    );
}

export default FileUpload;