import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Cook from './components/Cook/Cook'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar></Navbar>
<Banner></Banner>
<div className='text-center mt-24 mb-12'>
  <h1 className='text-[#150B2B] text-4xl font-semibold'>Our Recipes</h1>
  
<p className='text-[#150b2b99] text-base leading-7 lg:w-[843px] text-center mx-auto mt-6'>
Dive into Our Recipes, a treasure trove of culinary delights! From classic comfort foods to exotic global flavors, each dish is a masterpiece of creativity and taste. Join our community and embark on a delicious journey!</p>
  
  </div>

  <div className='md:flex gap-8 lg:flex'>
  <div className='w-3/5'>
  <Cards></Cards>
  </div>


    <Cook></Cook>
  </div>



    </>
  )
}

export default App
