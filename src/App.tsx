import React from 'react';
import './App.css';

// TODO Figure out how to do exhaust cards

interface Props {
}

interface State {
  dmgTotal: number
  blockTotal: number
  listOfCardsPlayed: {name: string, dmg: number, block: number, type: string}[]
  strength: number,
  dexterity: number,
  selfIsWeak: boolean,
  selfIsFrail: boolean,
  enemyIsVunerable: boolean,
  listOfRelics: { name: string, attr:string }[],
  numberOfAttacks: number,
  numberOfBlocks: number,
  cardsExhausted: number,
}
class App extends React.Component< Props, State > {
  constructor(props: Props) {
    super(props);
    this.state = {
      dmgTotal: 0,
      blockTotal: 0,
      listOfCardsPlayed: [],
      strength: 0,
      dexterity: 0,
      selfIsWeak: false,
      selfIsFrail: false,
      enemyIsVunerable: false,
      listOfRelics: [],
      numberOfAttacks: 0,
      numberOfBlocks: 0,
      cardsExhausted: 0,
    };
  }

  // Change 0.25 to dynamic if certain relic
  // Update function to be based on per card not total?
  // Change how str works here currently broken on weak
  // Update to increment number of Attacks played
  calculateDamge = () => {
    const { listOfCardsPlayed, selfIsWeak, enemyIsVunerable, strength } = this.state;
    let basicDamage = listOfCardsPlayed.reduce((acc, obj) => (acc + obj.dmg), 0);
    if (selfIsWeak) {
      basicDamage = Math.floor(basicDamage - (basicDamage * 0.25));
    }
    if (enemyIsVunerable) {
      basicDamage = Math.floor(basicDamage + (basicDamage * 0.50));
    }
    if (strength > 0 || strength < 0) {
      basicDamage += (listOfCardsPlayed.length * strength);
    }
    this.setState({ dmgTotal: basicDamage });
  }

  // Change 0.25 to dynamic if certain relic
  // Update function to be based on per card not total?
  // Change how dex works here, currently broken with frail
  // Update to increment number of blocks played
  calculateBlock = () => {
    const { listOfCardsPlayed, selfIsFrail, dexterity } = this.state;
    let basicBlock = listOfCardsPlayed.reduce((acc, obj) => (acc + obj.block), 0);
    if (selfIsFrail) {
      basicBlock = Math.floor(basicBlock - (basicBlock * 0.25));
    }
    if (dexterity > 0 || dexterity < 0) {
      basicBlock += (listOfCardsPlayed.length * dexterity);
    }
    this.setState({ blockTotal: basicBlock });
  }

  // Replace static data with real cards
  // Cards need to show how dmg is effected by dmg or buffs/debuffs
  addCard = () => {
    this.setState({ listOfCardsPlayed: [...this.state.listOfCardsPlayed, { name: 'Strike', dmg: 6, block: 0, type: 'attack' }] });
  }

  // Ask Ben about this type
  controlDebuff = (e: any) => {
    if (e.target.value === 'frail') {
      this.setState((prevState) => ({ selfIsFrail: !prevState.selfIsFrail }));
    } else {
      this.setState((prevState) => ({ selfIsWeak: !prevState.selfIsWeak }));
    }
  }

  render() {
    const {
      dmgTotal,
      listOfCardsPlayed,
      strength,
      dexterity,
      blockTotal,
      listOfRelics,
      numberOfAttacks,
      numberOfBlocks,
      cardsExhausted,
    } = this.state;

    const cardsPlayed = listOfCardsPlayed.map((card) => (
      <li>
        Name:
        {card.name}
        Damage:
        {card.dmg}
      </li>
    ));

    const relics = listOfRelics.map((relic) => (
      <li>
        Name:
        {relic.name}
      </li>
    ));

    return (
      <div className="App">
        <div>Ironclad</div>
        <div>Current Relics:</div>
        <ul>{relics}</ul>
        <div>
          Current Strength:
          {strength}
        </div>
        <div>
          Current Dexterity:
          {dexterity}
        </div>
        <div>
          Current Debuffs:
          <label> Weak: </label>
          <input type="checkbox" value="weak" name="weak" onChange={(e) => this.controlDebuff(e)} />
          <label> Frail: </label>
          <input type="checkbox" value="frail" onChange={(e) => this.controlDebuff(e)} />
        </div>
        <div>
          Damage Total:
          {dmgTotal}
        </div>
        <div>
          Block Total:
          {blockTotal}
        </div>
        <div>
          Attacks Played:
          {numberOfAttacks}
        </div>
        <div>
          Blocks Played:
          {numberOfBlocks}
        </div>
        <div>
          Cards Exhausted:
          {cardsExhausted}
        </div>
        <button type="button" onClick={this.addCard}>Add Card:</button>
        <div>Cards Played:</div>
        <ul>{cardsPlayed}</ul>
        {/* Remove this button and make function update on state change of cards played */}
        <button type="button" onClick={this.calculateDamge}>Test Calculate Damage</button>
      </div>
    );
  }
}

export default App;
