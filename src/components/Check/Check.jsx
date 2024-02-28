import { useState } from "react"

const Check = () => {
  const [cat, setCat] = useState(false)
  const [dog, setDog] = useState(false)

  const handleCat = () => {
    setCat(!cat)
  }
  const handleDog = () => {
    setDog(!dog)
  }
  return (
    <div>
      <h3>checkbox</h3>
      <div>
        <input type="checkbox" id="katt" name="katt" onChange={handleCat} />
        <label htmlFor="katt">Katt</label>
      </div>

      <div>
        <input type="checkbox" id="hund" name="hund" onChange={handleDog} />
        <label htmlFor="hund">Hund</label>
      </div>
      <div>
        {cat && <p>katt</p>}
        {cat && dog && <p> och </p>}
        {dog && <p>dog</p>}
      </div>
    </div>
  )
}
export default Check
