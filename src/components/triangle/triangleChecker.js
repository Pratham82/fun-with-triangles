import React, { useState } from 'react'

export const TriangleChecker = () => {
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [third, setThird] = useState('')
  const [message, setMessage] = useState('')

  const calculate = () => {
    const triangleSum = first + second + third
    triangleSum !== 180
      ? setMessage('😿 The given angles does not create triangle')
      : setMessage('😄 The given angles creates a triangle')
  }
  return (
    <div className="App">
      <h1> Triangle Checker</h1>
      <h2>Hint: If all angles sum upto 180</h2>
      <h3>Enter 1st angle of triangle:</h3>
      <input
        type="number"
        className="inputStyles"
        value={first}
        onChange={(e) => setFirst(Number(e.target.value))}
      />
      {first > 0 && (
        <React.Fragment>
          <br />
          <h3>Enter 2nd angle of triangle:</h3>
          <input
            type="number"
            className="inputStyles"
            value={second}
            onChange={(e) => setSecond(Number(e.target.value))}
          />
          <br />
        </React.Fragment>
      )}
      {second > 0 && (
        <React.Fragment>
          <br />
          <h3>Enter 3rd angle of triangle:</h3>
          <input
            type="number"
            className="inputStyles"
            value={third}
            onChange={(e) => setThird(Number(e.target.value))}
          />
          <br />
        </React.Fragment>
      )}

      {third > 0 && (
        <button className="calculate" onClick={calculate}>
          Check
        </button>
      )}
      <div className="report">
        <h2>{message}</h2>
      </div>
    </div>
  )
}
