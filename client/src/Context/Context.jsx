import React, {useContext,useState} from 'react';


const Context = React.createContext();

function ContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [imageSrc, setImageSrc] = useState('');
    const [completed, setCompleted] = useState(false);
    const [error, setError] = useState(false);

    return<Context.Provider value={{loading, setLoading, imageSrc, setImageSrc,error,setError,completed,setCompleted}}>{children}</Context.Provider>
}

export { Context,ContextProvider};