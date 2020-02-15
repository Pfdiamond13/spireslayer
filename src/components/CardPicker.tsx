import React from 'react';
import cardImages from '../const/CardImages';


interface Props {
  onCardClick: (cardName: string) => void
}

const CardPicker = (props: Props) => {
  const cards = cardImages.map((cardImage) => {
    return (
      <div key={cardImage.name} onClick={() => {props.onCardClick(cardImage.name)}}>
        <img src={cardImage.src} alt={cardImage.name} width="155" height="200" />
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
