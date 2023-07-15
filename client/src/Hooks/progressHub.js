import React, { useContext } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { Context } from "../Context/Context";

const useProgressHub = () => {

    // const {totalBytes,setProgress,progress} = useContext(Context);
    // const [progress, setProgress] = React.useState(0);

   

    const progressHub = (totalBytes,progress,setProgress) => {
        const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7092/progressHub")
        .build();

    connection.start()
        .then(() =>{
            connection.on("progress",(progressAsync) =>  {
               
                let percentage = (progressAsync * 100) / totalBytes;
                if(percentage !== Infinity && percentage !== isNaN){
                    // console.log(Math.round( percentage))
                    setProgress( percentage);
                }
                
            });
        }).catch((err) => console.log(err));
    }

    return {progressHub}
}

export default useProgressHub;