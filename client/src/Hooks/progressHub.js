import React, { useContext } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";
import { Context } from "../Context/Context";

const useProgressHub = () => {

    const {progress, setProgress} = useContext(Context);

    const progressHub = () => {
        const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:7092/progressHub")
        .build();

    connection.start()
        .then(() =>{
            connection.on("ReceiveProgressUpdate",(progress) =>  {
                setProgress(progress);
                console.log(progress);
            });
        }).catch((err) => console.log(err));
    }

    return {progressHub}
}

export default useProgressHub;