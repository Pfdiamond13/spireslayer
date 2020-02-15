import React from 'react';
import './App.css';
import data, { Card } from './dummyData';
import CardPicker from './components/CardPicker';
// TODO Figure out how to do exhaust cards

interface Props {
}

interface State {
  dmgTotal: number,
  blockTotal: number,
  energy: number,
  listOfCardsPlayed: {name: string, dmg: number, block: number, energy: number}[],
  strength: number,
  dexterity: number,
  selfIsWeak: boolean,
  selfIsFrail: boolean,
  enemyIsVulnerable: boolean,
  enemyIsWeak: boolean,
  listOfRelics: { name: string, attr:string }[],
  numberOfAttacks: number,
  numberOfBlocks: number,
  cardsExhausted: number,
  selectedCard: Card,
  cards: Card[],
  showCardPicker: boolean,
}
class App extends React.Component< Props, State > {
  constructor(props: Props) {
    super(props);
    this.state = {
      dmgTotal: 0,
      blockTotal: 0,
      energy: 3,
      listOfCardsPlayed: [],
      strength: 0,
      dexterity: 0,
      selfIsWeak: false,
      selfIsFrail: false,
      enemyIsVulnerable: false,
      enemyIsWeak: false,
      listOfRelics: [],
      numberOfAttacks: 0,
      numberOfBlocks: 0,
      cardsExhausted: 0,
      selectedCard: data.cards[0],
      cards: data.cards,
      showCardPicker: false,
    };
  }

  // Change 0.25 to dynamic if certain relic
  // Update to increment number of Attacks played
  calculateDamage = (dmg: number | null) => {
    const { selfIsWeak, enemyIsVulnerable, strength } = this.state;
    if (dmg !== null) {
      let totalDamage = dmg;
      if (selfIsWeak) {
        totalDamage = Math.floor(totalDamage - (totalDamage * 0.25));
      }
      if (enemyIsVulnerable) {
        totalDamage = Math.floor(totalDamage + (totalDamage * 0.50));
      }
      if (strength > 0 || strength < 0) {
        totalDamage += strength;
      }
      return totalDamage;
    }
    return 0;
  }

  // Change 0.25 to dynamic if certain relic
  // Update to increment number of blocks played
  calculateBlock = (block:number | null) => {
    const { selfIsFrail, dexterity } = this.state;
    if (block !== null) {
      let basicBlock = block;
      if (selfIsFrail) {
        basicBlock = Math.floor(basicBlock - (basicBlock * 0.25));
      }
      if (dexterity > 0 || dexterity < 0) {
        basicBlock += dexterity;
      }
      return basicBlock;
    }
    return 0;
  }

  playCard = (card: Card) => {
    const {
      enemyIsVulnerable,
      blockTotal,
      enemyIsWeak,
      strength,
      dmgTotal,
      listOfCardsPlayed,
      energy,
    } = this.state;

    const gameProps = {
      enemyIsVulnerable,
      blockTotal,
      enemyIsWeak,
      strength,
    };
    const newProps = card.action(gameProps, this.calculateDamage, this.calculateBlock);

    const playedCard = {
      name: card.name,
      dmg: newProps.calculatedDamage || 0,
      block: newProps.calculatedBlock || 0,
      energy: card.energy,
    };
    this.setState({
      listOfCardsPlayed: [...listOfCardsPlayed, playedCard],
      dmgTotal: dmgTotal + playedCard.dmg,
      blockTotal: blockTotal + playedCard.block,
      energy: energy - playedCard.energy,
      enemyIsWeak: newProps.enemyIsWeak,
      enemyIsVulnerable: newProps.enemyIsVulnerable,

    });
  }

  // Ask Ben about this type
  controlDebuff = (e: any) => {
    if (e.target.value === 'frail') {
      this.setState((prevState) => ({ selfIsFrail: !prevState.selfIsFrail }));
    } else {
      this.setState((prevState) => ({ selfIsWeak: !prevState.selfIsWeak }));
    }
  }

  selectCard = (e: any) => {
    const { cards } = this.state;
    this.setState({ selectedCard: cards[e.target.getAttribute('data-index')] });
  }
  toggleShowCardPicker = () => {
    this.setState({showCardPicker: !this.state.showCardPicker});
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
      selectedCard,
      cards,
    } = this.state;

    const cardsPlayed = listOfCardsPlayed.map((card) => (
      <li>
        Name:
        {card.name}
        Damage:
        {card.dmg}
        Block:
        {card.block}
        Energy Cost:
        {card.energy}
      </li>
    ));

    const relics = listOfRelics.map((relic) => (
      <li>
        Name:
        {relic.name}
      </li>
    ));

    const listOfCards = cards.map((card, index) => (
      <option value={index}>{card.name}</option>
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
        <div>Select Card</div>
        {this.renderSelectedCard()}
        <div>Cards Played:</div>
        <ul>{cardsPlayed}</ul>
        {/* Remove this button and make function update on state change of cards played */}
        <button type="button" onClick={() => this.playCard(selectedCard)}>Play Card</button>
      </div>
    );
  }

  renderSelectedCard = () => {
    const { cards, selectedCard, showCardPicker } = this.state

    const renderedCardPicker = showCardPicker ? <CardPicker cards={cards} onCardClick={(e) => {this.selectCard(e); }} /> : null;
    return (
      <React.Fragment>
        <div>
          <span>Selected:</span>
          <img src={selectedCard.src} alt={selectedCard.name} width="155" height="200" />
        </div>
        <button onClick={this.toggleShowCardPicker}>Toggle Card Picker</button>
        {renderedCardPicker}
      </React.Fragment>
    )
  }
}

export default App;
