import React from 'react'
import Card from './components/Card.jsx'

const App = () => {
  return (
    <div className='parent'>
    <Card user='Bhagya Rokde'  age={24}/>
    <Card user='Hrushikesh Rokde' age={28}/>
    </div>
  )
}

export default App
