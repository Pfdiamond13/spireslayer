import React from 'react';
import { Relic } from '../relicData';


interface Props {
  relics: Relic[];
  onRelicClick: (e: any) => void;
}

const RelicPicker = (props: Props) => {
  const relics = props.relics.map((relicImage, idx) => {
    return (
      <div key={relicImage.name} onClick={(e) => {props.onRelicClick(e)}}>
        <img src={relicImage.src} alt={relicImage.name} width="73" height="80" data-index={idx}/>
      </div>
    );
  });

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {relics}
    </div>
  );
};

export default RelicPicker;
