import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p className='bg-black text-white text-2xl p-4'>FUTUREME setup</p>
    </div>
  )
}

export default App
