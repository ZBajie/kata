import { useState } from "react"

const Counter = () => {
  const [number, setNumber] = useState(0)

  const handleUpClick = () => {
    setNumber(number + 1)
  }
  const handleDownClick = () => {
    setNumber(number - 1)
  }
  return (
    <div>
      <button onClick={handleUpClick}>up</button>
      <p>{number}</p>
      <button onClick={handleDownClick}>Down</button>
    </div>
  )
}
export default Counter
