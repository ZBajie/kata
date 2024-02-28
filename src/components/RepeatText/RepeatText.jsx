/* eslint-disable react/prop-types */
const RepeatText = ({ count, text }) => {
  const paragraphs = Array.from({ length: count }, (index) => {
    return <p key={index}>{text}</p>
  })
  return <article>{paragraphs}</article>
}

export default RepeatText
