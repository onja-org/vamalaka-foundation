import React from 'react'
import './App.css'
import { HomePage } from './Pages/HomePage'
import footerLinks from './utils/FooterLinks'

function App() {
  return (
    <div className='App'>
      <HomePage footerLinks={footerLinks} />
    </div>
  )
}

export default App
