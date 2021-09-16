import React from 'react'
import { TriangleArea } from './components/triangle/triangleArea'
import { TriangleChecker } from './components/triangle/triangleChecker'
import { TriangleQuiz } from './components/triangle/triangleQuiz'
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { Navbar } from './components/layouts/Navbar'
import { NotFound } from './components/layouts/NotFound'
import { HypotenuseChecker } from './components/triangle/hypotenuseChecker'
import CustomFooter from './components/layouts/customFooter'

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Navbar />
        <main className="">
          <Switch>
            <Route path="/" component={TriangleQuiz} exact={true} />
            <Route path="/triangle-checker" component={TriangleChecker} />
            <Route path="/triangle-area" component={TriangleArea} />
            <Route path="/find-hypotenuse" component={HypotenuseChecker} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
        <CustomFooter color="white" size="2x" />
      </Router>
    </BrowserRouter>
  )
}

export default App
