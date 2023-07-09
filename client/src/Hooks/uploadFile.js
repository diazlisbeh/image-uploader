import React, { useContext } from "react";
import { Context } from "../Context/Context";

const useUploadFile = () => {
    // const url = import.meta.env.URL;
    const url = 'https://localhost:7092/UploadFile';
    const [file, setFile] = React.useState(null);
    const {setLoading, setImageSrc,setError,setCompleted} = useContext(Context);

    const uploadFile = async (formData) => {
        
                setLoading(true)
            const response = await fetch(url,{
                method: 'POST',
                body: formData
            }).then(res =>{
                res.text();
            }).then(data => {
                setImageSrc(data)
                setLoading(false)
                setCompleted(true)
                console.log(data)
            }).catch(err => {
                setError(true)
                console.log(err)
            })

            // if(response.ok){
                // setLoading(true)
                // const data = await response.text();
                // setLoading(false)
                // setImageSrc(data)
                // console.log(data)
            // }else{
                // setError(true)
            // }
        
            
        
    }
    return {uploadFile}
}

export default useUploadFile;