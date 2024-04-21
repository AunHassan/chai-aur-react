import { useState } from "react"

function App() {
  const [counter, setcounter] = useState(0)
  if (counter < 0 ) setcounter(0);
  else if (counter >20 ) setcounter(20);
  return (
    <>
  <h1>chai aur aun</h1>
  <h2>counter</h2>
  <button onClick={() => setcounter(counter + 1 )}>increase</button>
  <h1>{counter}</h1>
  <button onClick={() => setcounter(counter - 1 )}>decrease</button>

  </>
    )
}

export default App
