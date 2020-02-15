import React from 'react';
import { Card } from '../dummyData';


interface Props {
  cards: Card[];
  onCardClick: (e: any) => void
}

const CardPicker = (props: Props) => {
  const cards = props.cards.map((cardImage, idx) => {
    return (
      <div key={cardImage.name} onClick={(e) => {props.onCardClick(e)}}>
        <img src={cardImage.src} alt={cardImage.name} width="155" height="200" data-index={idx}/>
      </div>
    );
  });

  return (
    <div style={{display: 'flex', flexWrap: 'wrap'}}>
      {cards}
    </div>
  );
};

export default CardPicker;
