import React from 'react'
import Element from './Element'
const useRenderCount = () => {
  const renderCount = React.useRef(0)
  React.useEffect(() => {
    renderCount.current++
  })
  return renderCount
}
function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }
  return array
}
// Do not modify code above this block
/**
  Debug and solve the re-rendering issue with this page,
  also resolve the problem preventing the shuffle from working
*/
export default function TestTwo() {
  const [state, setState] = React.useState('')
  const [elements, setElements] = React.useState([
    'friday',
    'blue',
    'green',
    'turtle',
  ])
  const renderCount = useRenderCount()
  const randomize = () => {
    let result = shuffle(elements)
    setElements((prev) => [...result])
  }
  const handleChange = (e: any) => {
    setState(e.target.value)
  }
  return (
    <div>
      <h2>Test Two</h2>
      <input value={state} onChange={handleChange} />
      <button
        onClick={() => {
          randomize()
        }}
      >
        shuffle
      </button>
      {elements.map((el, index) => (
        <Element renderCount={renderCount} label={el} key={index} />
      ))}
    </div>
  )
}
