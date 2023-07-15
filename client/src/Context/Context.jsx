import React, {useContext,useState} from 'react';


const Context = React.createContext();

function ContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [imageSrc, setImageSrc] = useState("https://diazsa.blob.core.windows.net/images/image.svg");
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(false);
    const [progress, setProgress] = useState(0);
    const [totalBytes, setTotalBytes] = useState(0);

    return<Context.Provider value={{loading, 
                                    setLoading, 
                                    imageSrc, 
                                    setImageSrc,
                                    error,
                                    setError,
                                    completed,
                                    setCompleted,
                                    progress,
                                    setProgress,
                                    totalBytes,
                                    setTotalBytes}}>{children}</Context.Provider>
}

export { Context,ContextProvider};