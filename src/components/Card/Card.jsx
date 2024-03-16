/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const Card = ({ card, handleAddToCook }) => {
  const {
    short_description,
    recipe_image,
    recipe_name,
    preparing_time,
    calories,
    ingredients,
  } = card;

  return (
    <div>
      <div className="card border-[1px] border-solid p-6 md:min-h-[830px] ">
        <figure className="">
          <img src={recipe_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="pt-6 space-y-4 border-b-[1px] border-solid pb-4">
          <h2 className=" text-[#282828] text-xl font-semibold">
            {recipe_name}
          </h2>
          <p className="text-[#878787] ">{short_description}</p>
        </div>

        <div className="border-b-[1px] border-solid pb-4">
          <h4 className="text-[#282828] text-lg font-medium py-4">
            Ingredients: {ingredients.length}
          </h4>

          <div>
            <ul className="text-[#878787]">
              {ingredients.map((item, idx) => (
                <li key={idx}>. {item} </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <p>{preparing_time}</p>
          </div>

          <div className="flex items-center gap-2 py-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>
            <p>{calories}</p>
          </div>
        </div>

        <button
          onClick={() => handleAddToCook(card)}
          className="btn w-[172px] text-[#150B2B] text-lg font-medium rounded-[50px] bg-[#0BE58A]"
        >
          Want to Cook
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  Card: PropTypes.object,
  handleAddToCook: PropTypes.func,
};
export default Card;
