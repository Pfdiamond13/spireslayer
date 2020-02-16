import React from 'react';

interface Props {
  relic: {name: string; src: string};
}

const AcquiredRelic = (props: Props) => {
  const { relic } = props;
  return (
    <li style={{ display: 'flex' }}>
      <img src={relic.src} alt={relic.name} width="73" height="80" />
      <div style={{ display: 'inline' }}>
        <div>
          <b>Name:</b>
          {relic.name}
        </div>
      </div>
    </li>
  );
};


export default AcquiredRelic;
