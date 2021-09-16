import React, { useState } from 'react'

export const TriangleQuiz = () => {
  const [score, setScore] = useState('')
  const [message, setMessage] = useState('')

  const questions = {
    '01. This type of triangle has one 90 degree angle ': [
      'A. Acute',
      'B. Right',
      'C. Obtuse',
    ],
    '2. A ________ triangle is one where all 3 angles measure less than 90 degrees.':
      ['A. Acute', 'B. Right', 'C. Obtuse'],
    '3. A triangle where all sides are congruent is called': [
      'A. Scalene',
      'B. Isosceles',
      'C. Equilateral',
    ],
    '4. An isosceles triangle has': [
      'A. No congruent sides',
      'B. 2 congruent sides',
      'C. 3 congruent sides',
    ],
    '5. All 3 interior angles of a triangle add up to': [
      'A. 90 degrees',
      'B. 180 degrees',
      'C. 360 degrees',
    ],
  }
  const correctAnswers = [
    'B. Right',
    'A. Acute',
    'C. Equilateral',
    'B. 2 congruent sides',
    'B. 180 degrees',
  ]
  // console.log(selected)

  let responses = []
  let responsesObj = {}
  const handleSelect = (e, questionIndex) => {
    // Save the responses in an array

    // Get the answer
    const {
      target: { value },
    } = e
    console.log(value)
    // setSelected(e.target.value)

    // Get the question index
    console.log(questionIndex)

    console.log(value === correctAnswers[questionIndex])
    const isCorrect = value === correctAnswers[questionIndex]

    responses.push({
      question: questionIndex,
      ans: value,
      isCorrect: isCorrect,
    })

    responsesObj[questionIndex] = isCorrect
  }

  const calcResult = () => {
    // Calculate answers given
    const answers = Object.entries(responsesObj).map(([key, val]) => val)
    let correctAnswers = answers.filter((val) => val === true).length
    const finalScore = `Final Score: ${correctAnswers}`
    setScore(finalScore)

    const responseMessage = `Questions answered ${answers.length} out of which ${correctAnswers} were correct`

    answers.length === 0
      ? setMessage("🤨 You haven't answered any questions, please answer some")
      : setMessage(responseMessage)

    // Reset radio buttons
    // responsesObj = {}
  }

  return (
    <div className="App">
      <h1>Triangle QUIZ</h1>
      {Object.entries(questions).map(([question, answers], questionIndex) => (
        <div className="questionsContainer">
          <form style={{ textAlign: 'center', margin: '0 50px' }}>
            <p>{question}</p>
            {answers.map((answer) => (
              <React.Fragment>
                <input
                  type="radio"
                  value={answer}
                  name="ans"
                  onChange={(e) => handleSelect(e, questionIndex)}
                />
                &nbsp;
                <label htmlFor={answer}>{answer}</label> &nbsp;
                <br />
              </React.Fragment>
            ))}
          </form>
        </div>
      ))}
      <h2 className="res">{message}</h2>
      <h3 className="res">{score}</h3>
      <button className="calculate" onClick={calcResult}>
        Check
      </button>
      &nbsp; &nbsp;
      <button className="calculate" onClick={() => window.location.reload()}>
        Reset answers ♻️
      </button>
    </div>
  )
}
