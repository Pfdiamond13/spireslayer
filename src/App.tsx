import React from 'react';
import './App.css';

interface Props {
}

interface State {
  dmgTotal: number
  listOfCardsPlayed: {name: string, dmg: number}[]
}
class App extends React.Component< Props, State > {
  constructor(props: Props) {
    super(props);
    this.state = { dmgTotal: 0, listOfCardsPlayed: [{ name: 'Test', dmg: 5 }] };
  }

  calculateDamge = () => {
    let basicDamage = this.state.listOfCardsPlayed.reduce((acc, obj) => (acc + obj.dmg), 0);
    this.setState({ dmgTotal: basicDamage });
  }

  render() {
    const { dmgTotal, listOfCardsPlayed } = this.state;
    const cardsPlayed = listOfCardsPlayed.map((card) => <li>Name:{card.name} Damage: {card.dmg}</li>);
    return (
      <div className="App">
        <div>Ironclad</div>
        <div>
          Damage Total:
          {dmgTotal}
        </div>
        <div>Add Card:</div>
        <div>Cards Played:</div>
        <ul>{cardsPlayed}</ul>
        <button onClick={this.calculateDamge}>Test</button>
      </div>
    );
  }
}

export default App;

// import React from 'react';

// interface Props {
//   currentChannel: string;
//   height: string;
//   width: string;
//   frameBorder: string;
//   scrolling: string;
//   allowFullScreen: boolean;
// }
// const TwitchPlayer: React.FC<Props> = ({
//   currentChannel, height, width, frameBorder, scrolling, allowFullScreen,
// }) => {
//   return (
//     <div className="App">
//       <iframe
//         title="twitchPlayer"
//         src={`https://player.twitch.tv/?channel=${currentChannel}`}
//         height={height}
//         width={width}
//         frameBorder={frameBorder}
//         scrolling={scrolling}
//         allowFullScreen={allowFullScreen}
//       />
//      </div>
//   );
// };


// export default TwitchPlayer;