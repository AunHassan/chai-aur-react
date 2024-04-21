import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color ,setcolor] = useState("black")

  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>
      <div className="flex justify-center items-end bg-white-600 rounded-xl gap-6 border-2 border-black">
        <button onClick={()=> setcolor("red")}>red</button>
        <button onClick={()=> setcolor("orange")}>orange</button>
        <button onClick={()=> setcolor("green")}>green</button>
        <button onClick={()=> setcolor("grey")}>grey</button>
        <button onClick={()=> setcolor("blue")}>blue</button>
        <button onClick={()=> setcolor("purple")}>purple</button>
      </div>
    </div>
  )
}

export default App
