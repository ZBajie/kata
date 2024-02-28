import { useState } from "react"

const Radio = () => {
  const [name, setName] = useState("")
  const handleChange = (e) => {
    setName(e.target.value)
  }
  return (
    <div>
      <fieldset>
        <legend>Select a maintenance drone:</legend>

        <div>
          <input
            type="radio"
            id="huey"
            name="drone"
            value="huey"
            onChange={handleChange}
          />
          <label htmlFor="huey">Huey</label>
        </div>

        <div>
          <input
            type="radio"
            id="dewey"
            name="drone"
            value="dewey"
            onChange={handleChange}
          />
          <label htmlFor="dewey">Dewey</label>
        </div>

        <div>
          <input
            type="radio"
            id="louie"
            name="drone"
            value="louie"
            onChange={handleChange}
          />
          <label htmlFor="louie">Louie</label>
        </div>
      </fieldset>

      <div>{name}</div>
    </div>
  )
}
export default Radio
