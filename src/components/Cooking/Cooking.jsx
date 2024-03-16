import PropTypes from 'prop-types'

const Cooking = ({preparing}) => {


  return (
    <div>
      <h1 className="text-[#282828] text-2xl font-semibold text-center pb-4 pt-6">
        Currently cooking:{preparing.length}
      </h1>
      <hr className="w-[60%] mx-auto" />

      <div className="overflow-x-auto rounded-xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className=" py-6 text-[#878787] text-base font-medium">Name</th>
              <th className=" py-6 text-[#878787] text-base font-medium">Time</th>
              <th className=" py-6 text-[#878787] text-base font-medium">Calories</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {preparing.map((item, index) => {
                const {recipe_name, preparing_time, calories} = item;
              return (
                <tr key={item.recipe_id} className="bg-base-200">
                  <th className='text-base font-semibold'>{index+1}</th>
                  <td className='text-[#282828b3] text-base mb-3'>{recipe_name}</td>
                  <td className='text-[#282828b3] text-base mb-3'>{preparing_time}</td>
                  <td className='text-[#282828b3] text-base mb-3'>{calories}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Cooking.propTypes = {
    preparing: PropTypes.array
}

export default Cooking;
