
import Card from "../Card/Card";
import PropTypes from 'prop-types'

const Cards = ({handleAddToCook, cook}) => {



    return (
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-24">
 


{
    cook.map((card) => <Card key={card.recipe_id} card={card} handleAddToCook={handleAddToCook}></Card>)
}

</div>
    );
};

Cards.propTypes = {
    handleAddToCook: PropTypes.func,
    cook: PropTypes.array,

  
}

export default Cards;