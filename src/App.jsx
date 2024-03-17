import { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Cook from './components/Cook/Cook'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cook, setCooking] = useState([]);
  const [wontCook, setWontCook] = useState([]);
const [preparing, setPreparing] = useState([]);
const [time, setTime] = useState(0);
const [calories, setCalories] = useState(0);

  const handleAddToCook = (card) => {
 
    const isExist = wontCook.find(item => item.recipe_id === card.recipe_id);
  if(!isExist){
    const newCook = [...wontCook, card];
    setWontCook(newCook);
    toast.success('Successfully Added');
  }else{
    toast.warn('Already Exist');
  }

  }

const handlePreparing = (preparingItem) => {
  
const remainingItem = wontCook.filter(item => item.recipe_id !== preparingItem.recipe_id)
setWontCook(remainingItem);
setPreparing([...preparing, preparingItem]);
toast.success('Successfully Added For Cooking');

const newTime = (parseInt(time) + parseInt(preparingItem.preparing_time));
setTime(newTime);

const newCalories = (parseInt(calories) + parseInt(preparingItem.calories));
setCalories(newCalories);


}

  useEffect(() => {
    fetch('./cards.json')
    .then((res) => res.json())
    .then((data) => setCooking(data))
    
    }, [])
  return (
    <>
<Navbar></Navbar>
<Banner></Banner>
<div className='text-center mt-24 mb-12'>
  <h1 className='text-[#150B2B] text-4xl font-semibold'>Our Recipes</h1>
  
<p className='text-[#150b2b99] text-base leading-7 lg:w-[843px] text-center mx-auto mt-6'>
Dive into Our Recipes, a treasure trove of culinary delights! From classic comfort foods to exotic global flavors, each dish is a masterpiece of creativity and taste. Join our community and embark on a delicious journey!</p>
  
  </div>

  <div className='md:flex gap-8 lg:flex '>
  <div className='md:w-3/5'>
  <Cards cook={cook} handleAddToCook={handleAddToCook}></Cards>
  </div>


<div className=' flex-1'>
<Cook calories={calories} time={time} handlePreparing={handlePreparing} wontCook={wontCook} preparing={preparing}></Cook>

</div>
 
  </div>


  <ToastContainer />
    </>
  )
}

export default App
