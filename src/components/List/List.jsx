/* eslint-disable react/prop-types */
const List = ({ animals }) => {
  return (
    <ul>
      {animals.animals.map((item, i) => {
        return <li key={i}>{item}</li>
      })}
    </ul>
  )
}

export default List
