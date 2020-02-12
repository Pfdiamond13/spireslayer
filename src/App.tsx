import React from 'react';
import './App.css';

// TODO Figure out how to do exhaust cards

interface Props {
}

interface State {
  dmgTotal: number,
  blockTotal: number,
  energy: number,
  listOfCardsPlayed: {name: string, dmg: number, block: number}[],
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
      energy: 0,
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
  // Update to increment number of Attacks played
  calculateDamge = (dmg:number) => {
    const { selfIsWeak, enemyIsVunerable, strength } = this.state;
    let totalDamage = dmg;
    if (selfIsWeak) {
      totalDamage = Math.floor(totalDamage - (totalDamage * 0.25));
    }
    if (enemyIsVunerable) {
      totalDamage = Math.floor(totalDamage + (totalDamage * 0.50));
    }
    if (strength > 0 || strength < 0) {
      totalDamage += strength;
    }
    return totalDamage;
  }

  // Change 0.25 to dynamic if certain relic
  // Update to increment number of blocks played
  calculateBlock = (block:number) => {
    const { selfIsFrail, dexterity } = this.state;
    let basicBlock = block;
    if (selfIsFrail) {
      basicBlock = Math.floor(basicBlock - (basicBlock * 0.25));
    }
    if (dexterity > 0 || dexterity < 0) {
      basicBlock += dexterity;
    }
    return basicBlock;
  }

  playCard = () => {
    let { dmgTotal, blockTotal, listOfCardsPlayed } = this.state;
    // REPLACE PLACEHOLDER CARD TYPES
    const card = {
      name: 'Strike', dmg: 6, block: 0, calculatedDmg: () => { return this.calculateDamge(card.dmg); }, calculatedBlock: () => { return this.calculateBlock(card.block); }, action: () => {}, type: 'attack',
      // name: 'Block', dmg: 0, block: 5, calculatedDmg: () => { return this.calculateDamge(card.dmg); }, calculatedBlock: () => { return this.calculateBlock(card.block); }, action: () => {}, type: 'skill',
    };
    const playedCard = { name: card.name, dmg: card.calculatedDmg(), block: card.calculatedBlock() };
    this.setState({ listOfCardsPlayed: [...listOfCardsPlayed, playedCard], dmgTotal: dmgTotal += playedCard.dmg, blockTotal: blockTotal += playedCard.block });
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
      blockTotal,
      energy,
      listOfCardsPlayed,
      strength,
      dexterity,
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
        Block:
        {card.block}
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
          Current Energy:
          {energy}
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
        <div>Cards Played:</div>
        <ul>{cardsPlayed}</ul>
        {/* Remove this button and make function update on state change of cards played */}
        <button type="button" onClick={this.playCard}>Play Card</button>
      </div>
    );
  }
}

export default App;
