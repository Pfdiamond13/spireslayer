interface GameProps {
  enemyIsVulnerable: boolean;
  blockTotal: number;
  enemyIsWeak: boolean;
  strength: number;
  calculatedDamage?: number;
  calculatedBlock?: number;
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
    return {...gameProps, calculatedDamage: calculateDamage(dmg), calculatedBlock: calculateBlock(block)}
  }
}

const data: { cards: Card[] } = {
  cards: [
    { name: 'Strike', dmg: 6, block: 0, energy: 1, type: CardType.Attack, action: generateDefaultAction(6, null)},
    // { name: 'Block', dmg: 0, block: 5, energy: 1, type: CardType.Skill, action: defAction},
    { name: 'Bash', dmg: 8, block: 0, energy: 2, type: CardType.Attack, action: 
      (gameProps, calculateDamage, _calculateBlock) => {
        let newProps = { ...gameProps, enemyIsVulnerable: true, calculatedDamage: calculateDamage(8), calculatedBlock: 0 };
        return newProps;
      } },
    // { name: 'Anger', dmg: 6, block: 0, energy: 0, type: CardType.Attack,  action: defAction},
    // { name: 'Armaments', dmg: 0, block: 5, energy: 1, type: CardType.Skill, action: defAction},
    // { name: 'Body Slam', dmg: 0, block: 0, energy: 1, type: CardType.Attack, action: (gameProps) => {
    //   let newProps = { ...gameProps, dmgModifier: gameProps.blockTotal}
    //   return newProps;
    // }},
    // { name: 'Clash', dmg: 14, block: 0, energy: 0, type: CardType.Attack,  action: defAction},
    // { name: 'Cleave', dmg: 8, block: 0, energy: 1, type: CardType.Attack,  action: defAction},
    // { name: 'Clothesline', dmg: 12, block: 0, energy: 2, type: CardType.Attack, action: 
    // (gameProps) => {
    //   let newProps = { ...gameProps, enemyIsWeak: true };
    //   return newProps;
    // } },
    // { name: 'Headbutt', dmg: 9, block: 0, energy: 1, type: CardType.Attack,  action: defAction},
    // { name: 'Heavy Blade', dmg: 14, block: 0, energy: 2, type: CardType.Attack, action: (gameProps) => {
    //   let newProps = { ...gameProps, dmgModifier: gameProps.strength * 3}
    //   return newProps;
    // }},
    // { name: 'Iron Wave', dmg: 5, block: 5, energy: 1, type: CardType.Attack,  action: defAction},
    // { name: 'Pommel Strike', dmg: 9, block: 0, energy: 1, type: CardType.Attack,  action: defAction},
    // { name: 'Sword Boomerang', dmg: 3, block: 0, energy: 1, type: CardType.Attack,  action: (gameProps) => {
    //   let newProps = { ...gameProps, dmgModifier: gameProps.dmg * 3}
    //   return newProps;
    // }},
    // { name: 'Thunderclap', dmg: 4, block: 0, energy: 1, type: CardType.Attack, action: (gameProps) => {
    //   let newProps = { ...gameProps, enemyIsVulnerable: true }
    //   return newProps;
    // }},
    // { name: 'Twin Strike', dmg: 5, block: 0, energy: 1, type: CardType.Attack,  action: (gameProps) => {
    //   let newProps = { ...gameProps, dmgModifier: gameProps.dmg * 2}
    //   return newProps;
    // }},
    // { name: 'Wild Strike', dmg: 12, block: 0, energy: 1, type: CardType.Attack,  action: defAction},
    // { name: 'Pommel Strike', dmg: 18, block: 0, energy: 4, type: CardType.Attack,  action: defAction},
    // { name: 'Carnage', dmg: 20, block: 0, energy: 1, type: CardType.Attack,  action: defAction},
    // { name: 'Dropkick', dmg: 5, block: 0, energy: 1, type: CardType.Attack,  action: defAction},
    // { name: 'Hemokinesis', dmg: 14, block: 0, energy: 1, type: CardType.Attack,  action: defAction},
    // { name: 'Pummel', dmg: 2, block: 0, energy: 1, type: CardType.Attack,  action: (gameProps) => {
    //   let newProps = { ...gameProps, dmgModifier: gameProps.dmg * 4}
    //   return newProps;
    // }},
    // { name: 'Reckless Charge', dmg: 7, block: 0, energy: 0, type: CardType.Attack,  action: defAction},
    // { name: 'Uppercut', dmg: 13, block: 0, energy: 2, type: CardType.Attack, action: (gameProps) => {
    //   let newProps = { ...gameProps, enemyIsVulnerable: true, enemyIsWeak: true }
    //   return newProps;
    // }},
    // { name: 'Bludgeon', dmg: 32, block: 0, energy: 3, type: CardType.Attack,  action: defAction},
    // { name: 'Feed', dmg: 10, block: 0, energy: 1, type: CardType.Attack,  action: defAction},
    // { name: 'Immolate', dmg: 21, block: 0, energy: 1, type: CardType.Attack,  action: defAction},
    // { name: 'Reaper', dmg: 4, block: 0, energy: 1, type: CardType.Attack,  action: defAction},
    // { name: 'Evolve', dmg: 0, block: 0, energy: 1, type: CardType.Power,  action: defAction},
    // { name: 'Dark Embrace', dmg: 0, block: 0, energy: 2, type: CardType.Power,  action: defAction},
    // { name: 'Inflame', dmg: 0, block: 0, energy: 1, type: CardType.Power, action: (gameProps) => {
    //   let newProps = { ...gameProps, strength: gameProps.strength += 2 }
    //   return newProps;
    // }},
    // { name: 'Demon Form', dmg: 0, block: 0, energy: 3, type: CardType.Power,  action: defAction},
    // { name: 'Brutality', dmg: 0, block: 0, energy: 0, type: CardType.Power,  action: defAction},
    // { name: 'Berserk', dmg: 0, block: 0, energy: 0, type: CardType.Power,  action: defAction},
    // { name: 'Barricade', dmg: 0, block: 0, energy: 3, type: CardType.Power,  action: defAction},
    // { name: 'Dual Wield', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: defAction},
    // { name: 'Entrench', dmg: 0, block: 0, energy: 2, type: CardType.Skill, action: (gameProps) => {
    //   let newProps = { ...gameProps, blockTotal: gameProps.blockTotal * 2}
    //   return newProps;
    // }},
    // { name: 'Disarm', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: defAction},
    // { name: 'Warcry', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: defAction},
    // { name: 'True Grit', dmg: 0, block: 7, energy: 1, type: CardType.Skill,  action: defAction},
    // { name: 'Battle Trance', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: defAction},
    // { name: 'Bloodletting', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: defAction},
    // { name: 'Dual Wield', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: defAction},
    // { name: 'Flex', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: (gameProps) => {
    //   let newProps = { ...gameProps, strength: gameProps.strength + 4}
    //   return newProps;
    // }},
    // { name: 'Havoc', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: defAction},
    // { name: 'Shrug It Off', dmg: 0, block: 8, energy: 1, type: CardType.Skill,  action: defAction},
    // { name: 'Shockwave', dmg: 0, block: 0, energy: 2, type: CardType.Skill, action: (gameProps) => {
    //   let newProps = { ...gameProps, enemyIsVulnerable: true, enemyIsWeak: true }
    //   return newProps;
    // }},
    // { name: 'Sentinel', dmg: 0, block: 5, energy: 1, type: CardType.Skill,  action: defAction},
    // { name: 'Seeing Red', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: defAction},
    // { name: 'Infernal Blade', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: defAction},
    // { name: 'Ghostly Armor', dmg: 0, block: 10, energy: 1, type: CardType.Skill,  action: defAction},
    // { name: 'Intimidate', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: (gameProps) => {
    //   let newProps = { ...gameProps, enemyIsWeak: true }
    //   return newProps;
    // }},
    // { name: 'Power Through', dmg: 0, block: 15, energy: 1, type: CardType.Skill,  action: defAction},
    // { name: 'Spot Weakness', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: defAction},
    // { name: 'Exhume', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: defAction},
    // { name: 'Impervious', dmg: 0, block: 30, energy: 1, type: CardType.Skill,  action: defAction},
    // { name: 'Limit Break', dmg: 0, block: 0, energy: 1, type: CardType.Skill,  action: (gameProps) => {
    //   let newProps = { ...gameProps, strength: gameProps.strength ** 2}
    //   return newProps;
    // }},
    // { name: 'Offering', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  action: defAction},
  ],
};

export default data;