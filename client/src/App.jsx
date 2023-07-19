import './App.css'
import FileUpload from './Components/FileUpload'
import Loading from './Components/Loading'
import CompleteUpload from './Components/CompleteUpload'
import { ContextProvider,Context } from './Context/Context'
import { useContext } from 'react'
import Error from './Components/Error'

function App() {
  const {loading,completed,error} = useContext(Context); 

  return (
    <>
    {(!loading && !completed && !error) && <FileUpload/>}
      {(loading && !completed && !error) && <Loading/>} 
      {(completed && !loading && !error) && <CompleteUpload/>}
      {(error  && !completed) && <Error/>}
      {/* <Loading/> */}
    </>
  )
}

export default App
