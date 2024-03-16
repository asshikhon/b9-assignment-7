import PropTypes from 'prop-types'
// let count = 1;
const Addcook = ({addcook, index, handlePreparing}) => {

    // const {recipe_name, preparing_time, calories, ingredients} = addcook;
    const {recipe_name, preparing_time, calories} = addcook;

    return (
       
        <div className=' '>
        
            <div className="overflow-x-auto  rounded-2xl mb-4">
  <table className="table">

    <tbody>
 
      <tr className="bg-base-200">

        
 <td className='text-base font-semibold'>{index+1}</td>
        <td className='text-[#282828b3] text-base mb-3'>{recipe_name}</td>
        <td className='text-[#282828b3] text-base mb-3'>{preparing_time}</td>
        <td className='text-[#282828b3] text-base mb-3'>{calories}</td>
<td>        <button onClick={() => handlePreparing(addcook)} className='btn text-[#150B2B] bg-[#0BE58A] text-lg text-center font-semibold my-3'>Preparing</button></td>
      </tr>

    </tbody>
  </table>
</div>

        </div>
    );
};

Addcook.propTypes ={

    addcook: PropTypes.object.isRequired,
    index: PropTypes.number,
    handlePreparing:PropTypes.func
}

export default Addcook;