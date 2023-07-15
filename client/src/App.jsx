import './App.css'
import FileUpload from './Components/FileUpload'
import Loading from './Components/Loading'
import CompleteUpload from './Components/CompleteUpload'
import { ContextProvider,Context } from './Context/Context'
import { useContext } from 'react'

function App() {
  const {loading,completed,totalBytes} = useContext(Context); 

  return (
    <>
    {(!loading && !completed) && <FileUpload/>}
      {(loading && !completed) && <Loading/>} 
      {(completed && !loading) && <CompleteUpload/>}
      {/* <Loading/> */}
    </>
  )
}

export default App
