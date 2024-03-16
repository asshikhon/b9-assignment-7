import PropTypes from "prop-types";
import Addcook from "../Addcook/Addcook";
import Cooking from "../Cooking/Cooking";

const Cook = ({ wontCook, handlePreparing, preparing}) => {
  return (
    <div className="w-full lg:w-2/5 h-[895px] max-h-auto border-[1px] border-solid p-6 rounded-xl mt-4 lg:mt-0">
      <div className="">
        <h1 className="text-[#282828] text-2xl font-semibold text-center pb-4">
          Want to cook: {wontCook.length}
        </h1>
        <hr className="w-[60%] mx-auto" />

        <table className="ml-8">
          <thead>
            <tr className="flex ">
              <th className="flex py-6 p-4 lg:pl-10 text-[#878787]">Name</th>
              <th className="flex py-6 p-4 lg:pl-20 text-[#878787]">Time</th>
              <th className="flex py-6 p-4 lg:pl-10 text-[#878787]">Calories</th>
            </tr>
          </thead>
        </table>

        {wontCook.map((cook, index) => (
          <Addcook handlePreparing={handlePreparing} key={cook.recipe_id} index={index} addcook={cook}></Addcook>
        ))}

<Cooking preparing={preparing}></Cooking>
      </div>
    </div>
  );
};

Cook.propTypes = {
  wontCook: PropTypes.array,
  handlePreparing: PropTypes.func,
  preparing: PropTypes.array,


};

export default Cook;
