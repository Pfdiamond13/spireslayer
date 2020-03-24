interface GameProps {
  enemyIsVulnerable: boolean;
  blockTotal: number;
  enemyIsWeak: boolean;
  strength: number;
  computedDamage?: number;
  computedBlock?: number;
}

export enum CardType {
  Attack = 'Attack',
  Skill = 'Skill',
  Power = 'Power',
}

type CardAction = (gameProps: GameProps, calculateDamage: (dmg: number | null) => number, calculateBlock: (block: number | null) => number) => GameProps;

export interface Card {
  name: string;
  type: CardType;
  src: string;
  standard: { energy: number, action: CardAction };
  upgraded: { energy: number, action: CardAction };
}

const generateDefaultAction: (dmg: number | null, block: number | null) => CardAction = (dmg, block) => {
  return (gameProps, calculateDamage, calculateBlock) => {
    return { ...gameProps, computedDamage: calculateDamage(dmg), computedBlock: calculateBlock(block) }
  }
}

const cardList: { cards: Card[] } = {
  cards: [
    {
      name: 'Strike', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/0/06/Strike_R.png', type: CardType.Attack,
      standard: { energy: 1, action: generateDefaultAction(6, null) },
      upgraded: { energy: 1, action: generateDefaultAction(9, null) }
    },
    {
      name: 'Block', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/7/7d/Defend_R.png', type: CardType.Skill,
      standard: { energy: 1, action: generateDefaultAction(null, 5) },
      upgraded: { energy: 1, action: generateDefaultAction(null, 8) },
    },
    {
      name: 'Bash', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/d/d8/Bash.png', type: CardType.Attack,
      standard: {
        energy: 2, action:
          (gameProps, calculateDamage, _calculateBlock) => {
            let newProps = { ...gameProps, enemyIsVulnerable: true, computedDamage: calculateDamage(8), computedBlock: 0 };
            return newProps;
          }
      },
      upgraded: {
        energy: 2, action:
          (gameProps, calculateDamage, _calculateBlock) => {
            let newProps = { ...gameProps, enemyIsVulnerable: true, computedDamage: calculateDamage(10), computedBlock: 0 };
            return newProps;
          }
      }
    },
    {
      name: 'Anger', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/3/3f/Anger.png', type: CardType.Attack,
      standard: { energy: 0, action: generateDefaultAction(6, null) },
      upgraded: { energy: 0, action: generateDefaultAction(8, null) }
    },
    {
      name: 'Armaments', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/c/c3/Armaments.png', type: CardType.Skill,
      standard: { energy: 1, action: generateDefaultAction(null, 5) },
      upgraded: { energy: 1, action: generateDefaultAction(null, 5) }
    },
    {
      name: 'Body Slam', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/1/10/BodySlam.png', type: CardType.Attack,
      standard: {
        energy: 1, action: (gameProps, calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, computedDamage: calculateDamage(gameProps.blockTotal), computedBlock: 0 }
          return newProps;
        }
      },
      upgraded: {
        energy: 0, action: (gameProps, calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, computedDamage: calculateDamage(gameProps.blockTotal), computedBlock: 0 }
          return newProps;
        }
      }
    },
    {
      name: 'Clash', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/f/fb/Clash.png', type: CardType.Attack,
      standard: { energy: 0, action: generateDefaultAction(14, null) },
      upgraded: { energy: 0, action: generateDefaultAction(18, null) }
    },
    {
      name: 'Cleave', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/c/c8/Cleave.png', type: CardType.Attack,
      standard: { energy: 1, action: generateDefaultAction(8, null) },
      upgraded: { energy: 1, action: generateDefaultAction(11, null) }
    },
    {
      name: 'Clothesline', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/8/8f/Clothesline.png', type: CardType.Attack,
      standard: {
        energy: 2, action:
          (gameProps, calculateDamage, _calculateBlock) => {
            let newProps = { ...gameProps, enemyIsWeak: true, computedDamage: calculateDamage(12), computedBlock: 0 };
            return newProps;
          }
      },
      upgraded: {
        energy: 2, action:
          (gameProps, calculateDamage, _calculateBlock) => {
            let newProps = { ...gameProps, enemyIsWeak: true, computedDamage: calculateDamage(14), computedBlock: 0 };
            return newProps;
          }
      }
    },
    {
      name: 'Headbutt', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/1/1a/Headbutt.png', type: CardType.Attack,
      standard: { energy: 1, action: generateDefaultAction(9, null) },
      upgraded: { energy: 1, action: generateDefaultAction(12, null) }
    },
    // { name: 'Heavy Blade', dmg: 14, block: 0, energy: 2, type: CardType.Attack, action: (gameProps) => {
    //   let newProps = { ...gameProps, dmgModifier: gameProps.strength * 3}
    //   return newProps;
    // }},
    {
      name: 'Iron Wave', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/9/9e/IronWave.png', type: CardType.Attack,
      standard: { energy: 1, action: generateDefaultAction(5, 5) },
      upgraded: { energy: 1, action: generateDefaultAction(7, 7) }
    },
    {
      name: 'Pommel Strike', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/3/35/PommelStrike.png', type: CardType.Attack,
      standard: { energy: 0, action: generateDefaultAction(9, null) },
      upgraded: { energy: 0, action: generateDefaultAction(10, null) }
    },
    {
      name: 'Sword Boomerang', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/1/18/SwordBoomerang.png', type: CardType.Attack,
      standard: {
        energy: 1, action: (gameProps, calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, computedDamage: 3 * calculateDamage(3), computedBlock: 0 }
          return newProps;
        }
      },
      upgraded: {
        energy: 1, action: (gameProps, calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, computedDamage: 4 * calculateDamage(3), computedBlock: 0 }
          return newProps;
        }
      }
    },
    {
      name: 'Thunderclap', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/8/8a/Thunderclap.png', type: CardType.Attack,
      standard: {
        energy: 1, action: (gameProps, calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, enemyIsVulnerable: true, computedDamage: calculateDamage(4), computedBlock: 0 }
          return newProps;
        }
      },
      upgraded: {
        energy: 1, action: (gameProps, calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, enemyIsVulnerable: true, computedDamage: calculateDamage(7), computedBlock: 0 }
          return newProps;
        }
      }
    },
    {
      name: 'Twin Strike', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/1/18/TwinStrike.png', type: CardType.Attack,
      standard: {
        energy: 1, action: (gameProps, calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, computedDamage: 2 * calculateDamage(5), computedBlock: 0 }
          return newProps;
        }
      },
      upgraded: {
        energy: 1, action: (gameProps, calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, computedDamage: 2 * calculateDamage(7), computedBlock: 0 }
          return newProps;
        }
      }
    },
    {
      name: 'Wild Strike', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/4/44/WildStrike.png', type: CardType.Attack,
      standard: { energy: 1, action: generateDefaultAction(12, null) },
      upgraded: { energy: 1, action: generateDefaultAction(17, null) }
    },
    {
      name: 'Blood for Blood', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/c/c8/BloodforBlood.png', type: CardType.Attack,
      standard: { energy: 4, action: generateDefaultAction(18, null) },
      upgraded: { energy: 4, action: generateDefaultAction(22, null) }
    },
    {
      name: 'Carnage', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/4/4f/Carnage.png', type: CardType.Attack,
      standard: { energy: 2, action: generateDefaultAction(20, null) },
      upgraded: { energy: 2, action: generateDefaultAction(28, null) }
    },
    {
      name: 'Dropkick', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/0/02/Dropkick.png', type: CardType.Attack,
      standard: { energy: 1, action: generateDefaultAction(5, null) },
      upgraded: { energy: 1, action: generateDefaultAction(8, null) }
    },
    {
      name: 'Hemokinesis', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/1/17/Hemokinesis.png', type: CardType.Attack,
      standard: { energy: 1, action: generateDefaultAction(14, null) },
      upgraded: { energy: 1, action: generateDefaultAction(18, null) }
    },
    {
      name: 'Pummel', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/e/ec/Pummel.png', type: CardType.Attack,
      standard: {
        energy: 1, action: (gameProps, calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, computedDamage: 4 * calculateDamage(2), computedBlock: 0 }
          return newProps;
        }
      },
      upgraded: {
        energy: 1, action: (gameProps, calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, computedDamage: 5 * calculateDamage(2), computedBlock: 0 }
          return newProps;
        }
      }
    },
    {
      name: 'Reckless Charge', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/f/f7/RecklessCharge.png', type: CardType.Attack,
      standard: { energy: 0, action: generateDefaultAction(7, null) },
      upgraded: { energy: 0, action: generateDefaultAction(10, null) }
    },
    {
      name: 'Uppercut', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/2/27/Uppercut.png', type: CardType.Attack,
      standard: {
        energy: 2, action: (gameProps, calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, enemyIsVulnerable: true, enemyIsWeak: true, computedDamage: calculateDamage(13), computedBlock: 0 }
          return newProps;
        }
      },
      upgraded: {
        energy: 2, action: (gameProps, calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, enemyIsVulnerable: true, enemyIsWeak: true, computedDamage: calculateDamage(13), computedBlock: 0 }
          return newProps;
        }
      }
    },
    {
      name: 'Bludgeon', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/9/96/Bludgeon.png', type: CardType.Attack,
      standard: { energy: 3, action: generateDefaultAction(32, null) },
      upgraded: { energy: 3, action: generateDefaultAction(42, null) }
    },
    {
      name: 'Feed', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/4/44/Feed.png', type: CardType.Attack,
      standard: { energy: 1, action: generateDefaultAction(10, null) },
      upgraded: { energy: 1, action: generateDefaultAction(12, null) }
    },
    {
      name: 'Immolate', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/5/5f/Immolate.png', type: CardType.Attack,
      standard: { energy: 2, action: generateDefaultAction(21, null) },
      upgraded: { energy: 2, action: generateDefaultAction(28, null) }
    },
    {
      name: 'Reaper', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/6/6a/Reaper.png', type: CardType.Attack,
      standard: { energy: 2, action: generateDefaultAction(4, null) },
      upgraded: { energy: 2, action: generateDefaultAction(5, null) }
    },
    {
      name: 'Evolve', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/5/5d/Evolve.png', type: CardType.Power,
      standard: { energy: 1, action: generateDefaultAction(null, null) },
      upgraded: { energy: 1, action: generateDefaultAction(null, null) }
    },
    {
      name: 'Dark Embrace', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/a/a6/DarkEmbrace.png', type: CardType.Power,
      standard: { energy: 2, action: generateDefaultAction(null, null) },
      upgraded: { energy: 1, action: generateDefaultAction(null, null) }
    },
    {
      name: 'Inflame', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/0/02/Inflame.png', type: CardType.Power,
      standard: {
        energy: 1, action: (gameProps, _calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, strength: gameProps.strength += 2 }
          return newProps;
        }
      },
      upgraded: {
        energy: 1, action: (gameProps, _calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, strength: gameProps.strength += 3 }
          return newProps;
        }
      }
    },
    {
      name: 'Demon Form', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/a/a1/DemonForm.png', type: CardType.Power,
      standard: { energy: 3, action: generateDefaultAction(null, null) },
      upgraded: { energy: 3, action: generateDefaultAction(null, null) }
    },
    {
      name: 'Brutality', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/b/ba/Brutality.png', type: CardType.Power,
      standard: { energy: 0, action: generateDefaultAction(null, null) },
      upgraded: { energy: 0, action: generateDefaultAction(null, null) }
    },
    {
      name: 'Berserk', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/4/44/Berserk.png', type: CardType.Power,
      standard: { energy: 0, action: generateDefaultAction(null, null) },
      upgraded: { energy: 0, action: generateDefaultAction(null, null) }
    },
    {
      name: 'Barricade', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/1/12/Barricade.png', type: CardType.Power,
      standard: { energy: 3, action: generateDefaultAction(null, null) },
      upgraded: { energy: 2, action: generateDefaultAction(null, null) }
    },
    {
      name: 'Dual Wield', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/6/61/DualWield.png', type: CardType.Skill,
      standard: { energy: 1, action: generateDefaultAction(null, null) },
      upgraded: { energy: 1, action: generateDefaultAction(null, null) }
    },
    {
      name: 'Entrench', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/a/a2/Entrench.png', type: CardType.Skill,
      standard: {
        energy: 2, action: (gameProps, _calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, computedBlock: gameProps.blockTotal }
          return newProps;
        }
      },
      upgraded: {
        energy: 1, action: (gameProps, _calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, computedBlock: gameProps.blockTotal }
          return newProps;
        }
      }
    },
    {
      name: 'Disarm', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/2/29/Disarm.png', type: CardType.Skill,
      standard: { energy: 1, action: generateDefaultAction(null, null) },
      upgraded: { energy: 1, action: generateDefaultAction(null, null) }
    },
    {
      name: 'Warcry', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/9/9a/Warcry.png', type: CardType.Skill,
      standard: { energy: 0, action: generateDefaultAction(null, null) },
      upgraded: { energy: 0, action: generateDefaultAction(null, null) }
    },
    {
      name: 'True Grit', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/4/46/TrueGrit.png', type: CardType.Skill,
      standard: { energy: 1, action: generateDefaultAction(null, 7) },
      upgraded: { energy: 1, action: generateDefaultAction(null, 9) }
    },
    {
      name: 'Battle Trance', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/3/3a/BattleTrance.png', type: CardType.Skill,
      standard: { energy: 0, action: generateDefaultAction(null, null) },
      upgraded: { energy: 0, action: generateDefaultAction(null, null) }
    },
    //   { name: 'Bloodletting', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/f/ff/Bloodletting.png', dmg: 0, block: 0, energy: 0, type: CardType.Skill,  
    //   standard: { energy: 0, action: generateDefaultAction(null, null) },
    //   upgraded: { energy: 0, action: generateDefaultAction(null, null) }
    // },
    {
      name: 'Burning Pact', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/9/98/BurningPact.png', type: CardType.Skill,
      standard: { energy: 1, action: generateDefaultAction(null, null) },
      upgraded: { energy: 1, action: generateDefaultAction(null, null) }
    },
    {
      name: 'Flex', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/5/5a/Flex.png', type: CardType.Skill,
      standard: {
        energy: 0, action: (gameProps, _calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, strength: gameProps.strength + 2 }
          return newProps;
        }
      },
      upgraded: {
        energy: 0, action: (gameProps, _calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, strength: gameProps.strength + 4 }
          return newProps;
        }
      }
    },
    {
      name: 'Havoc', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/5/5b/Havoc.png', type: CardType.Skill,
      standard: { energy: 1, action: generateDefaultAction(null, null) },
      upgraded: { energy: 0, action: generateDefaultAction(null, null) }
    },
    {
      name: 'Shrug It Off', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/4/4a/ShrugItOff.png', type: CardType.Skill,
      standard: { energy: 1, action: generateDefaultAction(null, 8) },
      upgraded: { energy: 1, action: generateDefaultAction(null, 11) }
    },
    {
      name: 'Shockwave', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/6/65/Shockwave.png', type: CardType.Skill,
      standard: {
        energy: 2, action: (gameProps, _calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, enemyIsVulnerable: true, enemyIsWeak: true }
          return newProps;
        }
      },
      upgraded: {
        energy: 2, action: (gameProps, _calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, enemyIsVulnerable: true, enemyIsWeak: true }
          return newProps;
        }
      }
    },
    {
      name: 'Sentinel', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/9/91/Sentinel.png', type: CardType.Skill, // TODO
      standard: { energy: 1, action: generateDefaultAction(null, 5) },
      upgraded: { energy: 1, action: generateDefaultAction(null, 7) }
    },
    {
      name: 'Seeing Red', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/b/ba/SecondWind.png', type: CardType.Skill,  // TODO
      standard: { energy: 1, action: generateDefaultAction(null, null) },
      upgraded: { energy: 0, action: generateDefaultAction(null, null) }
    },
    {
      name: 'Infernal Blade', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/0/0b/InfernalBlade.png', type: CardType.Skill,
      standard: { energy: 1, action: generateDefaultAction(null, null) },
      upgraded: { energy: 0, action: generateDefaultAction(null, null) }
    },
    {
      name: 'Ghostly Armor', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/7/71/GhostlyArmor.png', type: CardType.Skill,
      standard: { energy: 1, action: generateDefaultAction(null, 10) },
      upgraded: { energy: 1, action: generateDefaultAction(null, 13) }
    },
    {
      name: 'Intimidate', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/7/72/Intimidate.png', type: CardType.Skill,
      standard: {
        energy: 0, action: (gameProps, _calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, enemyIsWeak: true }
          return newProps;
        }
      },
      upgraded: {
        energy: 0, action: (gameProps, _calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, enemyIsWeak: true }
          return newProps;
        }
      }
    },
    {
      name: 'Power Through', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/4/4f/PowerThrough.png', type: CardType.Skill,
      standard: { energy: 1, action: generateDefaultAction(null, 15) },
      upgraded: { energy: 1, action: generateDefaultAction(null, 20) }
    },
    {
      name: 'Spot Weakness', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/5/56/SpotWeakness.png', type: CardType.Skill,
      standard: { energy: 1, action: generateDefaultAction(null, null) },
      upgraded: { energy: 1, action: generateDefaultAction(null, null) }
    },
    {
      name: 'Exhume', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/1/1b/Exhume.png', type: CardType.Skill,
      standard: { energy: 1, action: generateDefaultAction(null, null) },
      upgraded: { energy: 0, action: generateDefaultAction(null, null) },
    },
    {
      name: 'Impervious', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/e/e3/Impervious.png', type: CardType.Skill,
      standard: { energy: 2, action: generateDefaultAction(null, 30) },
      upgraded: { energy: 2, action: generateDefaultAction(null, 40) },
    },
    {
      name: 'Limit Break', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/8/8c/LimitBreak.png', type: CardType.Skill,
      standard: {
        energy: 1, action: (gameProps, _calculateDamage, _calculateBlock) => {
          let newProps = { ...gameProps, strength: gameProps.strength * 2 }
          return newProps;
        },
      },
      upgraded: {
        energy: 1, action: (gameProps, _calculateDamage, _calculateBlock) => {
          const newProps = { ...gameProps, strength: gameProps.strength * 2 }
          return newProps;
        },
      },
    },
    {
      name: 'Offering', src: 'https://vignette.wikia.nocookie.net/slay-the-spire/images/4/47/Offering.png', type: CardType.Skill,
      standard: { energy: -2, action: generateDefaultAction(null, null) },
      upgraded: { energy: -2, action: generateDefaultAction(null, null) },
    },
  ],
};

export default cardList;