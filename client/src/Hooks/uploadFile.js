import React, { useContext } from "react";
import { Context } from "../Context/Context";

const useUploadFile = () => {
    // const url = import.meta.env.URL;
    const url = 'https://localhost:7092/UploadFile';
    const {setLoading,imageSrc, setImageSrc,setError,setCompleted} = useContext(Context);

    const uploadFile = async (formData) => {
            setLoading(true);

        try{
            const response = await fetch(url,{
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            console.log(data)
            setImageSrc(data)
            setLoading(false)
            setCompleted(true)
            console.log(imageSrc)

        }catch(err){
            setError(true)
            console.log(err)
        }

    }
    return {uploadFile}
}

export default useUploadFile;