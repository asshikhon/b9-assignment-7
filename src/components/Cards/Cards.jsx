import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
const [cards, setCards] = useState([]);

useEffect(() => {
fetch('./cards.json')
.then((res) => res.json())
.then((data) => setCards(data))

})

    return (
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 


{
    cards.map((card) => <Card key={card.id} card={card}></Card>)
}

</div>
    );
};

export default Cards;