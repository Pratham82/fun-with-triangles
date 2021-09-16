import React, { useState } from 'react'

export const TriangleArea = () => {
  const [first, setFirst] = useState('')
  const [second, setSecond] = useState('')
  const [message, setMessage] = useState('')

  const resetValues = () => {
    setFirst('')
    setSecond('')
    setMessage('')
  }
  const calculate = () => {
    console.log('Calc called')
    const res = (first * second) / 2
    setMessage(
      `Area of the triangle from given base and height is: ${res} units `
    )
  }
  return (
    <div className="App">
      <h1>Area of Triangle</h1>
      <h2> area = ½(base * height)</h2>
      <h3>Enter base of triangle:</h3>
      <input
        type="number"
        className="inputStyles"
        value={first}
        onChange={(e) => setFirst(Number(e.target.value))}
      />
      {first > 0 && (
        <React.Fragment>
          <br />
          <h3>Enter 2nd side of triangle:</h3>
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
          <button className="calculate" onClick={calculate}>
            Check
          </button>
          &nbsp; &nbsp;
          <button className="calculate" onClick={resetValues}>
            ♻️
          </button>
        </React.Fragment>
      )}
      <div className="report">
        <h2 className="res">{message}</h2>
      </div>
    </div>
  )
}
