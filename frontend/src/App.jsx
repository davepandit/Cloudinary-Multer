import { useState } from 'react'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Home />
      </div>
      <ToastContainer />
    </>
  )
}

export default App
