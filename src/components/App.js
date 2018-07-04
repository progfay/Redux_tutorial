import React from 'react'

const countChange = (func) => {
  return e => {
    e.preventDefault()
    func()
  }
}

export default (props) => {
  console.log(props)
  return (
    <div>
      <button onClick={countChange(props.countup)}> {'+'} </button>
      <h1> { props.count } </h1>
      <button onClick={countChange(props.countdown)}> {'-'} </button>
    </div>
  )
}
