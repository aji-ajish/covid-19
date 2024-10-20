import React from 'react'
import Header from './components/header/Header'
import './App.css'
import State from './components/state/State'
import TotalCases from './components/TotalCases/TotalCases'
import PieChart from './components/PieChart/PieChart'
import LineChart from './components/LineChart/LineChart'

const App = () => {
  return (
    <main>
      <Header />
      <div className='container'>
        <div className='card'>
          <State />
        </div>

        <div className='card'>
          <TotalCases />
        </div>
      </div>
      <div className='container'>
        <div className='card'>
          <PieChart />
        </div>

        <div className='card'>
          <LineChart />
        </div>
      </div>
    </main>
  )
}

export default App
