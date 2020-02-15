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
}

const generateDefaultAction: (dmg: number | null, block: number | null) => CardAction = (dmg, block) => {
  return (gameProps, calculateDamage, calculateBlock) => {
    return {...gameProps, computedDamage: calculateDamage(dmg), computedBlock: calculateBlock(block)}
  }
}

const data: { cards: Card[] } = {
  cards: [
    { name: 'Strike', dmg: 6, block: 0, energy: 1, type: CardType.Attack, action: generateDefaultAction(6, null)},
    { name: 'Block', dmg: 0, block: 5, energy: 1, type: CardType.Skill, action: generateDefaultAction(null, 0)},
    { name: 'Bash', dmg: 8, block: 0, energy: 2, type: CardType.Attack, action: 
      (gameProps, calculateDamage, _calculateBlock) => {
        let newProps = { ...gameProps, enemyIsVulnerable: true, computedDamage: calculateDamage(8), computedBlock: 0 };
        return newProps;
      } },
    { name: 'Anger', dmg: 6, block: 0, energy: 0, type: CardType.Attack,  action:generateDefaultAction(6, null)},
    { name: 'Armaments', dmg: 0, block: 5, energy: 1, type: CardType.Skill, action:generateDefaultAction(null, 5)},
    { name: 'Body Slam', dmg: 0, block: 0, energy: 1, type: CardType.Attack, action: (gameProps, calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, computedDamage: calculateDamage(gameProps.blockTotal), computedBlock: 0}
      return newProps;
    }},
    { name: 'Clash', dmg: 14, block: 0, energy: 0, type: CardType.Attack,  action: generateDefaultAction(14, null)},
    { name: 'Cleave', dmg: 8, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(8, null)},
    { name: 'Clothesline', dmg: 12, block: 0, energy: 2, type: CardType.Attack, action: 
    (gameProps, calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, enemyIsWeak: true, computedDamage: calculateDamage(12), computedBlock: 0 };
      return newProps;
    } },
    { name: 'Headbutt', dmg: 9, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(9, null)},
    // { name: 'Heavy Blade', dmg: 14, block: 0, energy: 2, type: CardType.Attack, action: (gameProps) => {
    //   let newProps = { ...gameProps, dmgModifier: gameProps.strength * 3}
    //   return newProps;
    // }},
    { name: 'Iron Wave', dmg: 5, block: 5, energy: 1, type: CardType.Attack,  action: generateDefaultAction(5, 5)},
    { name: 'Pommel Strike', dmg: 9, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(9 , null)},
    { name: 'Sword Boomerang', dmg: 3, block: 0, energy: 1, type: CardType.Attack,  action: (gameProps, calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, computedDamage: 3 * calculateDamage(3), computedBlock: 0}
      return newProps;
    }},
    { name: 'Thunderclap', dmg: 4, block: 0, energy: 1, type: CardType.Attack, action: (gameProps, calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, enemyIsVulnerable: true, computedDamage: calculateDamage(4), computedBlock: 0 }
      return newProps;
    }},
    { name: 'Twin Strike', dmg: 5, block: 0, energy: 1, type: CardType.Attack,  action: (gameProps, calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, computedDamage: 2 * calculateDamage(5), computedBlock: 0}
      return newProps;
    }},
    { name: 'Wild Strike', dmg: 12, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(12, null)},
    { name: 'Blood for Blood', dmg: 18, block: 0, energy: 4, type: CardType.Attack,  action: generateDefaultAction(18, null)},
    { name: 'Carnage', dmg: 20, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(20, null)},
    { name: 'Dropkick', dmg: 5, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(5, null)},
    { name: 'Hemokinesis', dmg: 14, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(14, null)},
    { name: 'Pummel', dmg: 2, block: 0, energy: 1, type: CardType.Attack,  action: (gameProps, calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, computedDamage: 4 * calculateDamage(2), computedBlock: 0}
      return newProps;
    }},
    { name: 'Reckless Charge', dmg: 7, block: 0, energy: 0, type: CardType.Attack,  action: generateDefaultAction(7, null)},
    { name: 'Uppercut', dmg: 13, block: 0, energy: 2, type: CardType.Attack, action: (gameProps, calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, enemyIsVulnerable: true, enemyIsWeak: true, computedDamage: calculateDamage(13), computedBlock: 0 }
      return newProps;
    }},
    { name: 'Bludgeon', dmg: 32, block: 0, energy: 3, type: CardType.Attack,  action: generateDefaultAction(32, null)},
    { name: 'Feed', dmg: 10, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(10, null)},
    { name: 'Immolate', dmg: 21, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(21, null)},
    { name: 'Reaper', dmg: 4, block: 0, energy: 1, type: CardType.Attack,  action: generateDefaultAction(4, null)},
    { name: 'Evolve', dmg: 0, block: 0, energy: 1, type: CardType.Power,  action: generateDefaultAction(null, null)},
    { name: 'Dark Embrace', dmg: 0, block: 0, energy: 2, type: CardType.Power,  action: generateDefaultAction(null, null)},
    { name: 'Inflame', dmg: 0, block: 0, energy: 1, type: CardType.Power, action: (gameProps, _calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, strength: gameProps.strength += 2 }
      return newProps;
    }},
    { name: 'Demon Form', dmg: 0, block: 0, energy: 3, type: CardType.Power,  action: generateDefaultAction(null, null)},
    { name: 'Brutality', dmg: 0, block: 0, energy: 0, type: CardType.Power,  action: generateDefaultAction(null, null)},
    { name: 'Berserk', dmg: 0, block: 0, energy: 0, type: CardType.Power,  action: generateDefaultAction(null, null)},
    { name: 'Barricade', dmg: 0, block: 0, energy: 3, type: CardType.Power,  action: generateDefaultAction(null, null)},
    { name: 'Dual Wield', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Entrench', dmg: 0, block: 0, energy: 2, type: CardType.Skill, action: (gameProps, _calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, blockTotal: gameProps.blockTotal * 2}
      return newProps;
    }},
    { name: 'Disarm', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Warcry', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'True Grit', dmg: 0, block: 7, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, 7)},
    { name: 'Battle Trance', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Bloodletting', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Dual Wield', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Flex', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: (gameProps, _calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, strength: gameProps.strength + 4}
      return newProps;
    }},
    { name: 'Havoc', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Shrug It Off', dmg: 0, block: 8, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Shockwave', dmg: 0, block: 0, energy: 2, type: CardType.Skill, action: (gameProps, _calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, enemyIsVulnerable: true, enemyIsWeak: true }
      return newProps;
    }},
    { name: 'Sentinel', dmg: 0, block: 5, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, 5)},
    { name: 'Seeing Red', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Infernal Blade', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Ghostly Armor', dmg: 0, block: 10, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, 10)},
    { name: 'Intimidate', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: (gameProps, _calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, enemyIsWeak: true }
      return newProps;
    }},
    { name: 'Power Through', dmg: 0, block: 15, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, 15)},
    { name: 'Spot Weakness', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Exhume', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, null)},
    { name: 'Impervious', dmg: 0, block: 30, energy: 1, type: CardType.Skill,  action: generateDefaultAction(null, 30)},
    { name: 'Limit Break', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: (gameProps, _calculateDamage, _calculateBlock) => {
      let newProps = { ...gameProps, strength: gameProps.strength ** 2}
      return newProps;
    }},
    { name: 'Offering', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: generateDefaultAction(null, null)},
  ],
};

export default data;