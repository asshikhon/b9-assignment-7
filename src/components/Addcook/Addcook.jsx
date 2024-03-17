import PropTypes from 'prop-types'

const Addcook = ({addcook, index, handlePreparing}) => {


    const {recipe_name, preparing_time, calories} = addcook;

    return (
       
        <div className=''>
        
            <div className="overflow-x-auto w-auto">
  <table className="table">

    <tbody>
 
      <tr className="bg-base-200">

        
 <td className='text-base font-semibold'>{index+1}</td>
        <td className='text-[#282828b3] text-[15px]'>{recipe_name}</td>
        <td className='text-[#282828b3] text-[15px]'>{preparing_time} minutes</td>
        <td className='text-[#282828b3] text-[15px]'>{calories} calories</td>
<td>        <button onClick={() => handlePreparing(addcook)} className='btn text-[#150B2B] bg-[#0BE58A] text-lg text-center font-semibold rounded-3xl'>Preparing</button></td>
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