import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20)
      setCounter(counter + 1)
  }
  const deleteValue = () => {
    if (counter > 0)
      setCounter(counter - 1)
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}
      >Counter++</button>
      <br />
      <br />
      <button
        onClick={deleteValue}
      >Counter--</button>
    </>
  )
}

export default App
