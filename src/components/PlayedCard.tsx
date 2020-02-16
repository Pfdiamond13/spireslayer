import React from 'react';
import { CardType } from '../cardData';

interface Props {
  card: {name: string; type: CardType; src: string; dmg: number; block: number; energy: number};
}

const PlayedCard = (props: Props) => {
  const { card } = props;
  return (
    <li style={{ display: 'flex' }}>
      <img src={card.src} alt={card.name} width="155" height="200" />
      <div style={{ display: 'inline' }}>
        <div>
          <b>Name:</b>
          {card.name}
        </div>
        <div>
          <b>Damage:</b>
          {card.dmg}
        </div>
        <div>
          <b>Block:</b>
          {card.block}
        </div>
        <div>
          <b>Energy:</b>
          {card.energy}
        </div>
      </div>
    </li>
  );
};


export default PlayedCard;
