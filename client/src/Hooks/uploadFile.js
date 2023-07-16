import React, { useContext } from "react";
import { Context } from "../Context/Context";

const useUploadFile = () => {
    const url = import.meta.env.VITE_URL;
    const {setLoading, setImageSrc,setError,setCompleted} = useContext(Context);

    const uploadFile = async (formData) => {
            setLoading(true);

        try{
            const response = await fetch(url,{
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            setImageSrc(data)
            setLoading(false)
            setCompleted(true)
        }catch(err){
            setError(true)
            console.log(err)
        }
    }
    return {uploadFile}
}

export default useUploadFile;