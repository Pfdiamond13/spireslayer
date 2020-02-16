import React from 'react';
import './App.css';
import cardList, { Card, CardType } from './cardData';
import relicList from './relicData';
import CardPicker from './components/CardPicker';
import PlayedCard from './components/PlayedCard';
import RelicPicker from './components/RelicPicker';
import AcquiredRelic from './components/AcquiredRelic';
// TODO Figure out how to do exhaust cards


interface State {
  dmgTotal: number;
  blockTotal: number;
  energy: number;
  listOfCardsPlayed: {name: string; type: CardType; src: string; dmg: number; block: number; energy: number}[];
  strength: number;
  dexterity: number;
  selfIsWeak: boolean;
  selfIsFrail: boolean;
  enemyIsVulnerable: boolean;
  enemyIsWeak: boolean;
  relics: { name: string; src: string }[];
  cardsExhausted: number;
  selectedCard: Card;
  selectedRelic: { name: string; src: string };
  cards: Card[];
  showCardPicker: boolean;
  showRelicPicker: boolean;
  acquiredRelics: { name: string; src: string }[];
}
class App extends React.Component< {}, State > {
  constructor(props: {}) {
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
      relics: relicList.relics,
      acquiredRelics: [],
      cardsExhausted: 0,
      selectedCard: cardList.cards[0],
      selectedRelic: relicList.relics[0],
      cards: cardList.cards,
      showCardPicker: false,
      showRelicPicker: false,
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
  calculateBlock = (block: number | null) => {
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

  playCard = (card: Card, isUpgraded: boolean) => {
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
    const newProps = isUpgraded
      ? card.upgraded.action(gameProps, this.calculateDamage, this.calculateBlock)
      : card.standard.action(gameProps, this.calculateDamage, this.calculateBlock);

    const playedCard = {
      name: card.name,
      type: card.type,
      src: card.src,
      dmg: newProps.computedDamage || 0,
      block: newProps.computedBlock || 0,
      energy: isUpgraded ? card.upgraded.energy : card.standard.energy,
      isUpgraded,
    };
    this.setState({
      listOfCardsPlayed: [...listOfCardsPlayed, playedCard],
      dmgTotal: dmgTotal + playedCard.dmg,
      blockTotal: blockTotal + playedCard.block,
      energy: energy - playedCard.energy,
      enemyIsWeak: newProps.enemyIsWeak,
      enemyIsVulnerable: newProps.enemyIsVulnerable,
      strength: newProps.strength,

    });
  }

  pickRelic = (relic: any) => {
    const { acquiredRelics } = this.state;
    this.setState({acquiredRelics: [...acquiredRelics, relic]})
  }

  controlDebuff = (e: any) => {
    if (e.target.value === 'frail') {
      this.setState((prevState) => ({ selfIsFrail: !prevState.selfIsFrail }));
    } else {
      this.setState((prevState) => ({ selfIsWeak: !prevState.selfIsWeak }));
    }
  }

  selectCard = (e: any) => {
    const { cards } = this.state;
    this.setState({ selectedCard: cards[e.target.getAttribute('data-index')], showCardPicker: false });
  }

  selectRelic = (e: any) => {
    const { relics } = this.state;
    this.setState({ selectedRelic: relics[e.target.getAttribute('data-index')], showRelicPicker: false });
  }

  toggleShowCardPicker = () => {
    const { showCardPicker } = this.state;
    this.setState({ showCardPicker: !showCardPicker });
  }

  toggleShowRelicPicker = () => {
    const { showRelicPicker } = this.state;
    this.setState({ showRelicPicker: !showRelicPicker });
  }

  renderSelectedCard = () => {
    const { cards, selectedCard, showCardPicker } = this.state;

    const renderedCardPicker = showCardPicker
      ? <CardPicker cards={cards} onCardClick={(e) => { this.selectCard(e); }} /> : null;
    return (
      <>
        <div>
          <span>Selected Card:</span>
          <img src={selectedCard.src} alt={selectedCard.name} width="155" height="200" />
        </div>
        <button type="button" onClick={this.toggleShowCardPicker}>Toggle Card Picker</button>
        {renderedCardPicker}
      </>
    );
  }

  renderSelectedRelic = () => {
    const { relics, selectedRelic, showRelicPicker } = this.state;

    const renderedCardPicker = showRelicPicker
      ? <RelicPicker relics={relics} onRelicClick={(e) => { this.selectRelic(e); }} /> : null;
    return (
      <>
        <div>
          <span>Selected Relic:</span>
          <img src={selectedRelic.src} alt={selectedRelic.name} width="73" height="80" />
        </div>
        <button type="button" onClick={this.toggleShowRelicPicker}>Toggle Relic Picker</button>
        {renderedCardPicker}
      </>
    );
  }

  render() {
    const {
      dmgTotal,
      blockTotal,
      energy,
      listOfCardsPlayed,
      strength,
      dexterity,
      acquiredRelics,
      cardsExhausted,
      selectedCard,
      selfIsWeak,
      selfIsFrail,
      enemyIsVulnerable,
      selectedRelic,
    } = this.state;

    const cardsPlayed = listOfCardsPlayed.map((card, idx) => {
      return (
        <div key={`${card.name}-${idx}`}>
          <PlayedCard card={card} />
        </div>
      )
    });

    const numberOfAttacks = listOfCardsPlayed.reduce((prev, card) => {
      return prev + (card.type === CardType.Attack ? 1 : 0);
    }, 0);

    const numberOfSkills = listOfCardsPlayed.reduce((prev, card) => {
      return prev + (card.type === CardType.Skill ? 1 : 0);
    }, 0);

    const listOfAcquiredRelics = acquiredRelics.map((relic, idx) => (
      <div key={`${relic.name}-${idx}`}>
      <AcquiredRelic relic={relic} />
    </div>
    ));

    return (
      <div className="App">
        <div>Ironclad</div>
        {this.renderSelectedRelic()}
        <button type="button" onClick={() => this.pickRelic(selectedRelic)}>Add Relic</button>
        <div>Current Relics:</div>
        <ul>{listOfAcquiredRelics}</ul>
        <div>
          <b>Current Strength:</b>
          <img alt="strength" src="https://vignette.wikia.nocookie.net/slay-the-spire/images/8/8b/Strength.png/" height="20px" />
          {strength}
        </div>
        <div>
          <b>Current Dexterity:</b>
          <img alt="dexterity" src="https://vignette.wikia.nocookie.net/slay-the-spire/images/0/0d/Dexterity.png" height="20px" />
          {dexterity}
        </div>
        <div>
          <b>Current Energy:</b>
          {energy}
        </div>
        <div>
          Current Debuffs:
          <b>Weak:</b>
          <img alt="Weak" src="https://vignette.wikia.nocookie.net/slay-the-spire/images/b/b9/Icon_Weak.png" height="20px" />
          <input type="checkbox" value="weak" checked={selfIsWeak} name="weak" onChange={(e) => this.controlDebuff(e)} />
          <b> Frail: </b>
          <img alt="Frail" src="https://vignette.wikia.nocookie.net/slay-the-spire/images/4/48/Icon_Frail.png" height="20px" />
          <input type="checkbox" value="frail" checked={selfIsFrail} onChange={(e) => this.controlDebuff(e)} />
        </div>
        <div>
          Enemy Debuffs:
          <b> Vulnerable: </b>
          <img alt="Vulnerable" src="https://vignette.wikia.nocookie.net/slay-the-spire/images/a/ae/Icon_Vulnerable.png" height="20px" />
          <input type="checkbox" value="enemyIsVulnerable" checked={enemyIsVulnerable} name="enemyIsVulnerable" readOnly />
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
          Skills Played:
          {numberOfSkills}
        </div>
        <div>
          Cards Exhausted:
          {cardsExhausted}
        </div>
        <div>Select Card</div>
        {this.renderSelectedCard()}
        {/* Remove this button and make function update on state change of cards played */}
        <button type="button" onClick={() => this.playCard(selectedCard, false)}>Play Card</button>
        <div>Cards Played:</div>
        <ul>{cardsPlayed}</ul>
      </div>
    );
  }
}

export default App;
