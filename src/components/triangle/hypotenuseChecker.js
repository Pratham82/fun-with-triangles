import React, { useState } from 'react'

export const HypotenuseChecker = () => {
  const [side1, setSide1] = useState('')
  const [side2, setSide2] = useState('')
  const [message, setMessage] = useState('')

  const resetValues = () => {
    setSide1('')
    setSide2('')
    setMessage('')
  }
  const calculate = () => {
    const res = Math.trunc(Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2)))
    setMessage(`Hypotenuse of the triangle from given sides is: ${res} units `)
  }
  return (
    <div className="App">
      <h1>Hypotenuse Checker</h1>
      <h2>hypotenuse: c = √a² + b²</h2>
      <h3>Enter first side of triangle:</h3>
      <input
        type="number"
        className="inputStyles"
        value={side1}
        onChange={(e) => setSide1(Number(e.target.value))}
      />
      {side1 > 0 && (
        <React.Fragment>
          <br />
          <h3>Enter second side of triangle:</h3>
          <input
            type="number"
            className="inputStyles"
            value={side2}
            onChange={(e) => setSide2(Number(e.target.value))}
          />
          <br />
        </React.Fragment>
      )}
      {side2 > 0 && (
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
