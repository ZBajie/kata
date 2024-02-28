import "./App.css"
import animalList from "./components/List/animals.json"
import Header from "./components/Header/Header"
import RepeatText from "./components/RepeatText/RepeatText"
import List from "./components/List/List"
import Counter from "./components/Counter/Counter"
import Check from "./components/Check/Check"
import Radio from "./components/Radio/Radio"
function App() {
  return (
    <>
      <Header title="Welcome kata" />
      <RepeatText count="4" text="Welcome home kata" />
      <List animals={animalList} />
      <Counter />
      <Check />
      <Radio />
    </>
  )
}

export default App
