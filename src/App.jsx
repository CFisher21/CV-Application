//import { useState } from 'react'
import './App.css'
import LeftColumn from './components/layout/LeftColumn'
import RightColumn from './components/layout/RightColumn'

function App() {
  
  return (
    <div className='content'>
     <LeftColumn/>
     <RightColumn/>
    </div>
  )
}

export default App
