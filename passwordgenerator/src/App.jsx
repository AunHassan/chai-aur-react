import { useCallback, useEffect, useRef, useState } from 'react'

// import './App.css'

function App() {
const [Password, setPassword] = useState("")
const [length, setlength] = useState(8)
const [numberallowed, setnumberallowed] = useState(false)
const [characterAllowed ,setCharacterAllowed] = useState(false)
const PasswordRefernce = useRef(null)

const PasswordGenerator = useCallback(
  () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "0123456789"
    if (characterAllowed) str += "`~!@#$%^&*-_=+\|;:'\",.<>/?\\"
    
    for (let i = 0; i <= length; i++) {
      let char =  Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)
  },
  [setPassword,length,numberallowed, characterAllowed])
  useEffect(() => {
    PasswordGenerator()
  }, [length,numberallowed,characterAllowed,PasswordGenerator])


  const copyPassword = useCallback(
    () => {
      PasswordRefernce.current?.select();
      
      window.navigator.clipboard.writeText(Password)
    },
    [Password],
  )
  
    
  
  


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-slate-400'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex mb-4'> 
        <input type="text"
        className='outline-none w-full py-1 px-3 rounded-l-xl'
        value={Password}
        placeholder='Password'
        readOnly
        ref={PasswordRefernce}
        />
        <button className='outlinw-none px-3 py-0.5 bg-blue-700 text-white shrink-0 rounded-r-xl '
        onClick={copyPassword} >copy</button>
      </div>
          <input type="range"  
          value={length}
          onChange={(e)=>{setlength(e.currentTarget.value)}}
          min ={8}
          max={100}
          className='cursor-pointer'/>
          <label htmlFor="length">Length : {length}</label>
          <input type="checkbox"
          onChange={()=>(setnumberallowed((prev) => !prev ))}
          id='numberinput'
           />
          <label htmlFor="number">Numbers </label>
          <input type="checkbox" 
          onChange={()=>(setCharacterAllowed((prev) => !prev ))} />
          <label htmlFor="character">Character</label>
    </div>
    </>
  )
}

export default App
