import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileUpload from './Components/FileUpload'
import Loading from './Components/Loading'
import CompleteUpload from './Components/CompleteUpload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FileUpload/>   
      {/* <Loading/> */}
      {/* <CompleteUpload/> */}

    </>

  )
}

export default App
