import { HubConnectionBuilder } from "@microsoft/signalr";

const useProgressHub = () => {
    const urlhub = import.meta.env.VITE_URL_HUB;
    const progressHub = (totalBytes,setProgress) => {
        const connection = new HubConnectionBuilder()
        .withUrl(urlhub)
        .build();

    connection.start()
        .then(() =>{
            connection.on("progress",(progressAsync) =>  {
                let percentage = (progressAsync * 100) / totalBytes;
                if(percentage !== Infinity && percentage !== isNaN){
                    setProgress( percentage);
                }
            });
        }).catch((err) => console.log(err));
    }

    return {progressHub}
}

export default useProgressHub;