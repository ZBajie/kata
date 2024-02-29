/* eslint-disable react/prop-types */
import { useState } from "react"
const Dropdown = ({ carlist }) => {
  const [car, setCar] = useState("")
  const handleChange = (e) => {
    setCar(e.target.value)
  }
  return (
    <div>
      <select name="cars" id="car-select" onChange={handleChange}>
        {carlist.data.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
      {car && <p>{car}</p>}
    </div>
  )
}
export default Dropdown
