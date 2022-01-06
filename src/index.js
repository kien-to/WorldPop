import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { tenHighestPopulation } from './tenHighest'

const sumPop = () => {
  var sum = 0;
  for (let i = 0; i < tenHighestPopulation.length; i++){
    sum += tenHighestPopulation[i].population;
  }
  return sum
}

console.log(sumPop());

// Country component
const Pop = ({ pop: { country, population } }) => {
  const progress = population/sumPop()*1000;
  return (
    <div className='grid'>
      <span className='country'>{country} </span>
      <span style = {{display: 'inline-block', width: progress, backgroundColor: 'orange', height: '20px'}}></span>
      <span className='population'>{population}</span>
    </div>
  )
}

// countries component
const Pops = ({ pops }) => {
  const popList = pops.map((pop) => (
    <Pop key={pop.country} pop={pop} />
  ))
  return <div>{popList}</div>
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <div>
        <h1>World Population</h1>
        <Pops pops={tenHighestPopulation} />
      </div>
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)