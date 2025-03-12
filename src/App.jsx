//import { useState } from 'react'
import './App.css'
import LeftColumn from './components/layout/LeftColumn'
import RightColumn from './components/layout/RightColumn'

function App() {
  const name = 'Cody Fisher'
  const jobTitle = 'Full Stack Developer'
  return (
    <div className='content'>
     <LeftColumn/>
     <RightColumn name={name} jobTitle={jobTitle}/>
    </div>
  )
}

export default App
