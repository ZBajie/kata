import "./App.css"
import Header from "./components/Header/Header"
import RepeatText from "./components/RepeatText/RepeatText"

function App() {
  return (
    <>
      <Header title="Welcome kata" />
      <RepeatText count="4" text="Welcome home kata" />
    </>
  )
}

export default App
