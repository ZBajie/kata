/*
Skapa en ny komponent ToDo som har en textruta, en knapp och en ul-lista. När man klickar på knappen så läggs texten i textrutan till som en punkt i ul-listan. Ifall textrutan är tom så läggs inget till.

UTMANING: När man klickar på ett element i listan så tas det bort.
*/
import { useState } from "react"
const Todo = () => {
  const [text, setText] = useState("")
  const [textArray, setTextArray] = useState([])
  let [textId, setTextId] = useState(0)

  const onSubmit = (e) => {
    e.preventDefault()
    //textArray.push({ id: textId++, text: text })
    setTextArray((prevTextArray) => [
      ...prevTextArray,
      { id: textId, text: text },
    ])
    setText("")
    setTextId(textId + 1)
    console.log(textArray)
  }
  const removeListItem = (itemId) => {
    setTextArray(textArray.filter((a) => a.id !== itemId))
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <textarea
          name="text"
          rows={5}
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input type="submit" value="Post" />
      </form>

      <ul>
        {textArray.map((item) => (
          <li key={item.id} onClick={() => removeListItem(item.id)}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Todo
