import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar></Navbar>
<Banner></Banner>

<Cards></Cards>
      <h1 className='text-4xl'>React</h1>

    </>
  )
}

export default App
