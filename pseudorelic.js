let currentRelics = [];
const kunai = {
  name: "Kunai",
  onRelicSelect: () => {
    console.log('Nothing happens');
  },
  afterCardPlayed: (card, gameProps, relicProps) => {
    if (card.type === "Attack") {
      let { strength } = gameProps;
      const count = (relicProps.count + 1) % 3
      if (count === 0 ) {
        strength += 1
      }
      return {
        gameProps: { ...gameProps, strength },
        relicProps: { ...relicProps, count },
      };
    }
  },
}

const selectRelic = (relic, gameProps) => {
  currentRelics.push({...relic, relicProps: { count: 0 });
  relic.onRelicSelect(gameProps, relicProps);
}

const playCard = (card, gameProps, currentRelics) => {
  newGameProps = {...gameProps};
  card.play();
  currentRelics.forEach((relic) => {
    const out = relic.afterCardPlayed(card, gameProps, relic.relicProps);
    newGameProps = { ...out.gameProps };
    relic.relicProps = { ...out.relicProps };
  });
  setState({ gameProps: newGameProps, currentRelics });
}