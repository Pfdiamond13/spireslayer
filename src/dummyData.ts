interface GameProps {
  enemyIsVulnerable: boolean;
  blockTotal: number;
  enemyIsWeak: boolean;
  strength: number;
  computedDamage?: number;
  computedBlock?: number;
}

enum CardType {
  Attack = 'Attack',
  Skill = 'Skill',
  Power = 'Power',
}

type CardAction = (gameProps: GameProps, calculateDamage: (dmg: number | null) => number, calculateBlock: (block: number | null) => number) => GameProps;

export interface Card {
  name: string;
  dmg: number;
  block: number;
  energy: number;
  type: CardType;
  action: CardAction;
  src: string;
}

const generateDefaultAction: (dmg: number | null, block: number | null) => CardAction = (dmg, block) => {
  return (gameProps, calculateDamage, calculateBlock) => {
    return {...gameProps, computedDamage: calculateDamage(dmg), computedBlock: calculateBlock(block)}
  }
}

const data: { cards: Card[] } = {
  cards: [
    { name: 'Strike', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/0/06/Strike_R.png', dmg: 6, block: 0, energy: 1, type: CardType.Attack, action: generateDefaultAction(6, null)},
    { name: 'Block', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/7/7d/Defend_R.png', dmg: 0, block: 5, energy: 1, type: CardType.Skill, action: generateDefaultAction(null, 5)},
    { name: 'Bash', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/d/d8/Bash.png', dmg: 8, block: 0, energy: 2, type: CardType.Attack, action:
      (gameProps, calculateDamage, _calculateBlock) => {
        let newProps = { ...gameProps, enemyIsVulnerable: true, computedDamage: calculateDamage(8), computedBlock: 0 };
        return newProps;
      } },
    { name: 'Anger', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/3/3f/Anger.png', dmg: 6, block: 0, energy: 0, type: CardType.Attack,  action:generateDefaultAction(6, null)},
    { name: 'Armaments', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/c/c3/Armaments.png', dmg: 0, block: 5, energy: 1, type: CardType.Skill, action:generateDefaultAction(null, 5)},
    { name: 'Body Slam', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/1/10/BodySlam.png', dmg: 0, block: 0, energy: 1, type: CardType.Attack, action: (gameProps, calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, computedDamage: calculateDamage(gameProps.blockTotal), computedBlock: 0}
      return newProps;
    }},
    { name: 'Clash', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/f/fb/Clash.png', dmg: 14, block: 0, energy: 0, type: CardType.Attack,  action: generateDefaultAction(14, null)},
    { name: 'Cleave', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/c/c8/Cleave.png', dmg: 8, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(8, null)},
    { name: 'Clothesline', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/8/8f/Clothesline.png', dmg: 12, block: 0, energy: 2, type: CardType.Attack, action:
    (gameProps, calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, enemyIsWeak: true, computedDamage: calculateDamage(12), computedBlock: 0 };
      return newProps;
    } },
    { name: 'Headbutt', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/1/1a/Headbutt.png', dmg: 9, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(9, null)},
    // { name: 'Heavy Blade', dmg: 14, block: 0, energy: 2, type: CardType.Attack, action: (gameProps) => {
    //   let newProps = { ...gameProps, dmgModifier: gameProps.strength * 3}
    //   return newProps;
    // }},
    { name: 'Iron Wave', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/9/9e/IronWave.png', dmg: 5, block: 5, energy: 1, type: CardType.Attack,  action: generateDefaultAction(5, 5)},
    { name: 'Pommel Strike', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/3/35/PommelStrike.png', dmg: 9, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(9 , null)},
    { name: 'Sword Boomerang', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/1/18/SwordBoomerang.png', dmg: 3, block: 0, energy: 1, type: CardType.Attack,  action: (gameProps, calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, computedDamage: 3 * calculateDamage(3), computedBlock: 0}
      return newProps;
    }},
    { name: 'Thunderclap', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/8/8a/Thunderclap.png', dmg: 4, block: 0, energy: 1, type: CardType.Attack, action: (gameProps, calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, enemyIsVulnerable: true, computedDamage: calculateDamage(4), computedBlock: 0 }
      return newProps;
    }},
    { name: 'Twin Strike', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/1/18/TwinStrike.png', dmg: 5, block: 0, energy: 1, type: CardType.Attack,  action: (gameProps, calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, computedDamage: 2 * calculateDamage(5), computedBlock: 0}
      return newProps;
    }},
    { name: 'Wild Strike', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/4/44/WildStrike.png', dmg: 12, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(12, null)},
    { name: 'Blood for Blood', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/c/c8/BloodforBlood.png', dmg: 18, block: 0, energy: 4, type: CardType.Attack,  action: generateDefaultAction(18, null)},
    { name: 'Carnage', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/4/4f/Carnage.png', dmg: 20, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(20, null)},
    { name: 'Dropkick', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/0/02/Dropkick.png', dmg: 5, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(5, null)},
    { name: 'Hemokinesis', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/1/17/Hemokinesis.png', dmg: 14, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(14, null)},
    { name: 'Pummel', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/e/ec/Pummel.png', dmg: 2, block: 0, energy: 1, type: CardType.Attack,  action: (gameProps, calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, computedDamage: 4 * calculateDamage(2), computedBlock: 0}
      return newProps;
    }},
    { name: 'Reckless Charge', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/f/f7/RecklessCharge.png', dmg: 7, block: 0, energy: 0, type: CardType.Attack,  action: generateDefaultAction(7, null)},
    { name: 'Uppercut', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/2/27/Uppercut.png', dmg: 13, block: 0, energy: 2, type: CardType.Attack, action: (gameProps, calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, enemyIsVulnerable: true, enemyIsWeak: true, computedDamage: calculateDamage(13), computedBlock: 0 }
      return newProps;
    }},
    { name: 'Bludgeon', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/9/96/Bludgeon.png', dmg: 32, block: 0, energy: 3, type: CardType.Attack,  action: generateDefaultAction(32, null)},
    { name: 'Feed', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/4/44/Feed.png', dmg: 10, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(10, null)},
    { name: 'Immolate', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/5/5f/Immolate.png', dmg: 21, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(21, null)},
    { name: 'Reaper', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/6/6a/Reaper.png', dmg: 4, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(4, null)},
    { name: 'Evolve', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/5/5d/Evolve.png', dmg: 0, block: 0, energy: 1, type: CardType.Power,  action: generateDefaultAction(null, null)},
    { name: 'Dark Embrace', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/a/a6/DarkEmbrace.png', dmg: 0, block: 0, energy: 2, type: CardType.Power,  action: generateDefaultAction(null, null)},
    { name: 'Inflame', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/0/02/Inflame.png', dmg: 0, block: 0, energy: 1, type: CardType.Power, action: (gameProps, _calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, strength: gameProps.strength += 2 }
      return newProps;
    }},
    { name: 'Demon Form', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/a/a1/DemonForm.png', dmg: 0, block: 0, energy: 3, type: CardType.Power,  action: generateDefaultAction(null, null)},
    { name: 'Brutality', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/b/ba/Brutality.png', dmg: 0, block: 0, energy: 0, type: CardType.Power,  action: generateDefaultAction(null, null)},
    { name: 'Berserk', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/4/44/Berserk.png',  dmg: 0, block: 0, energy: 0, type: CardType.Power,  action: generateDefaultAction(null, null)},
    { name: 'Barricade', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/1/12/Barricade.png', dmg: 0, block: 0, energy: 3, type: CardType.Power,  action: generateDefaultAction(null, null)},
    { name: 'Dual Wield', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/6/61/DualWield.png', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Entrench', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/a/a2/Entrench.png', dmg: 0, block: 0, energy: 2, type: CardType.Skill, action: (gameProps, _calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, computedBlock: gameProps.blockTotal}
      return newProps;
    }},
    { name: 'Disarm', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/2/29/Disarm.png', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Warcry', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/9/9a/Warcry.png', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'True Grit', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/4/46/TrueGrit.png', dmg: 0, block: 7, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, 7)},
    { name: 'Battle Trance', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/3/3a/BattleTrance.png', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Bloodletting', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/f/ff/Bloodletting.png', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Burning Pact', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/6/61/BurningPact.png', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Flex', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/5/5a/Flex.png', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: (gameProps, _calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, strength: gameProps.strength + 4}
      return newProps;
    }},
    { name: 'Havoc', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/5/5b/Havoc.png', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Shrug It Off', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/4/4a/ShrugItOff.png', dmg: 0, block: 8, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Shockwave', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/6/65/Shockwave.png', dmg: 0, block: 0, energy: 2, type: CardType.Skill, action: (gameProps, _calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, enemyIsVulnerable: true, enemyIsWeak: true }
      return newProps;
    }},
    { name: 'Sentinel', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/9/91/Sentinel.png', dmg: 0, block: 5, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, 5)},
    { name: 'Seeing Red', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/b/ba/SecondWind.png', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Infernal Blade', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/0/0b/InfernalBlade.png', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Ghostly Armor', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/7/71/GhostlyArmor.png', dmg: 0, block: 10, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, 10)},
    { name: 'Intimidate', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/7/72/Intimidate.png', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: (gameProps, _calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, enemyIsWeak: true }
      return newProps;
    }},
    { name: 'Power Through', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/4/4f/PowerThrough.png',  dmg: 0, block: 15, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, 15)},
    { name: 'Spot Weakness', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/5/56/SpotWeakness.png', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Exhume', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/1/1b/Exhume.png', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Impervious', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/e/e3/Impervious.png', dmg: 0, block: 30, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, 30)},
    { name: 'Limit Break', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/8/8c/LimitBreak.png', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: (gameProps, _calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, strength: gameProps.strength * 2}
      return newProps;
    }},
    { name: 'Offering', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/4/47/Offering.png', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: generateDefaultAction(null, null)},
  ],
};

export default data;