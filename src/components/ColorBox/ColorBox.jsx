/* eslint-disable react/prop-types */
/*
Skapa en komponent ColorBox som tar emot en array av strängar med färgnamn i CSS. Komponenten är en div med flera div-kvadrater i sig på rad. De inre divarna är färgade enligt arrayen (och lika många kvadrater som element i arrayen).

UTMANING: Lägg till en textbox och en knapp. När man klickar på knappen så läggs texten i textboxen till arrayen av färgnamn. En till färgad kvadrat läggs till med den färg man skrev i textboxen.
*/
import "./ColorBox.css"
import { useState } from "react"

const ColorBox = ({ colors }) => {
  const [favoritColor, setFavoritColor] = useState("")
  const [colorArray, setColors] = useState(colors.data)

  const handleOnClick = () => {
    setColors((prevColorArray) => [...prevColorArray, favoritColor])
    setFavoritColor("")
  }
  return (
    <section>
      <div>
        {colorArray.map((col, i) => {
          return (
            <div
              key={i}
              className="color-box"
              style={{
                backgroundColor: col,
              }}
            ></div>
          )
        })}
      </div>
      <div>
        <input
          type="text"
          value={favoritColor}
          onChange={(e) => setFavoritColor(e.target.value)}
          placeholder="Your favorite color"
          required
        />
        <button onClick={handleOnClick}>Post</button>
      </div>
    </section>
  )
}
export default ColorBox
