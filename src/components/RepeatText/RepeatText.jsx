/* eslint-disable react/prop-types */
const RepeatText = ({ count, text }) => {
  const paragraphs = Array.from({ length: count }, (t, i) => {
    return <p key={i}>{text}</p>
  })
  return <article>{paragraphs}</article>
}

export default RepeatText
