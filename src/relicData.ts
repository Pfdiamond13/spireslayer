export interface Relic {
  name: string;
  src: string;
}

const relicList = {
  relics: [
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/1/1a/BurningBlood.png",
        name: "Burning Blood"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/e/ed/CrackedCore.png",
        name: "Cracked Core"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/f/fa/PureWater-0.png",
        name: "Pure Water"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/9/90/RingoftheSnake.png",
        name: "Ring of the Snake"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/4/4c/Akabeko.png",
        name: "Akabeko"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/c/c0/Anchor.png",
        name: "Anchor"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/e/e6/AncientTeaSet.png",
        name: "Ancient Tea Set"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/b/bb/ArtofWar.png",
        name: "Art of War"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/f/f5/BagofMarbles.png",
        name: "Bag of Marbles"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/a/ad/BagofPreparation.png",
        name: "Bag of Preparation"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/4/4e/BloodVial.png",
        name: "Blood Vial"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/3/3e/BronzeScales.png",
        name: "Bronze Scales"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/0/0f/CentennialPuzzle.png",
        name: "Centennial Puzzle"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/a/a1/CeramicFish.png",
        name: "Ceramic Fish"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/2/20/Damaru.png",
        name: "Damaru"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/b/b1/DataDisk.png",
        name: "Data Disk"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/d/d3/DreamCatcher.png",
        name: "Dream Catcher"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/7a/HappyFlower.png",
        name: "Happy Flower"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/2/23/JuzuBracelet.png",
        name: "Juzu Bracelet"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/f/f5/Lantern.png",
        name: "Lantern"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/e/e4/MawBank.png",
        name: "Maw Bank"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/1/13/MealTicket.png",
        name: "Meal Ticket"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/7d/Nunchaku.png",
        name: "Nunchaku"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/e/ec/OddlySmoothStone.png",
        name: "Oddly Smooth Stone"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/1/1a/Omamori.png",
        name: "Omamori"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/8/80/Orichalcum.png",
        name: "Orichalcum"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/70/PenNib.png",
        name: "Pen Nib"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/9/94/PotionBelt.png",
        name: "Potion Belt"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/e/ef/PreservedInsect.png",
        name: "Preserved Insect"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/4/4f/RedSkull.png",
        name: "Red Skull"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/9/9d/RegalPillow.png",
        name: "Regal Pillow"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/4/48/SmilingMask.png",
        name: "Smiling Mask"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/d/d7/SnakeSkull.png",
        name: "Snecko Skull"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/6/6d/Strawberry.png",
        name: "Strawberry"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/5/5c/Boot.png",
        name: "The Boot"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/6/6b/TinyChest.png",
        name: "Tiny Chest"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/2/2b/ToyOrnithopter.png",
        name: "Toy Ornithopter"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/d/dc/Vajra.png",
        name: "Vajra"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/0/07/WarPaint.png",
        name: "War Paint"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/9/9f/Whetstone.png",
        name: "Whetstone"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/1/1b/BlueCandle.png",
        name: "Blue Candle"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/f/f1/BottledFlame.png",
        name: "Bottled Flame"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/a/a9/BottledLightning.png",
        name: "Bottled Lightning"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/a/ac/BottledTornado.png",
        name: "Bottled Tornado"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/5/5c/DarkstonePeriapt.png",
        name: "Darkstone Periapt"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/9/9f/Yang-0.png",
        name: ""
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/f/f4/EternalFeather.png",
        name: "Eternal Feather"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/e/e3/FrozenEgg2.png",
        name: "Frozen Egg"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/2/2a/Cables.png",
        name: "Gold-Plated Cables"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/0/06/GremlinHorn.png",
        name: "Gremlin Horn"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/b/bb/Horn_cleat.png",
        name: "Horn Cleat"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/a/a3/InkBottle.png",
        name: "Ink Bottle"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/d/d7/Kunai.png",
        name: "Kunai"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/e/e5/LetterOpener.png",
        name: "Letter Opener"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/7a/Matryoshka.png",
        name: "Matryoshka"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/0/04/MeatontheBone.png",
        name: "Meat on the Bone"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/3/32/MercuryHourglass.png",
        name: "Mercury Hourglass"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/76/MoltenEgg2.png",
        name: "Molten Egg"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/4/4d/MummifiedHand.png",
        name: "Mummified Hand"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/8/81/NinjaScroll.png",
        name: "Ninja Scroll"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/5/52/OrnamentalFan.png",
        name: "Ornamental Fan"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/8/82/Pantograph.png",
        name: "Pantograph"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/c/c0/PaperCrane.png",
        name: "Paper Krane"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/9/99/PaperFrog.png",
        name: "Paper Phrog"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/b/b0/Pear.png",
        name: "Pear"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/6/6e/QuestionCard.png",
        name: "Question Card"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/2/24/SelfFormingClay.png",
        name: "Self-Forming Clay"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/a/ac/Shuriken.png",
        name: "Shuriken"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/e/eb/SingingBowl.png",
        name: "Singing Bowl"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/d/df/StrikeDummy.png",
        name: "Strike Dummy"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/1/15/Sundial.png",
        name: "Sundial"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/0/0f/SymbioticVirus.png",
        name: "Symbiotic Virus"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/4/44/Tear_drop_locket.png",
        name: "Teardrop Locket"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/f/fe/TheCourier.png",
        name: "The Courier"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/c/c4/ToxicEgg2.png",
        name: "Toxic Egg"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/5/5b/WhiteBeastStatue.png",
        name: "White Beast Statue"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/5/5c/BirdFacedUrn.png",
        name: "Bird-Faced Urn"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/e/ed/Calipers.png",
        name: "Calipers"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/a/a6/Captain_wheel.png",
        name: "Captain's Wheel"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/6/6d/ChampionBelt.png",
        name: "Champion Belt"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/e/ea/CharonsAshes.png",
        name: "Charon's Ashes"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/6/6a/CloakClasp.png",
        name: "Cloak Clasp"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/d/db/DeadBranch.png",
        name: "Dead Branch"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/79/Du-VuDoll.png",
        name: "Du-Vu Doll"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/d/dc/EmotionChip.png",
        name: "Emotion Chip"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/2/25/FossilizedHelix.png",
        name: "Fossilized Helix"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/9/93/GamblingChip.png",
        name: "Gambling Chip"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/8/85/Ginger.png",
        name: "Ginger"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/9/92/Girya.png",
        name: "Girya"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/b/b7/Golden_eye.png",
        name: "Golden Eye"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/1/14/IceCream.png",
        name: "Ice Cream"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/78/IncenseBurner.png",
        name: "Incense Burner"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/a/ae/LizardTail.png",
        name: "Lizard Tail"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/0/0e/MagicFlower.png",
        name: "Magic Flower"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/3/38/Mango.png",
        name: "Mango"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/3/38/OldCoin.png",
        name: "Old Coin"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/2/26/PeacePipe.png",
        name: "Peace Pipe"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/1/1c/Pocketwatch.png",
        name: "Pocketwatch"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/1/1f/PrayerWheel.png",
        name: "Prayer Wheel"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/77/Shovel.png",
        name: "Shovel"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/5/50/StoneCalendar.png",
        name: "Stone Calendar"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/9/92/TheSpecimen.png",
        name: "The Specimen"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/8/87/ThreadandNeedle.png",
        name: "Thread and Needle"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/78/Tingsha.png",
        name: "Tingsha"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/2/23/Torii.png",
        name: "Torii"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/f/f7/ToughBandages.png",
        name: "Tough Bandages"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/a/a3/TungstenRod.png",
        name: "Tungsten Rod"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/b/b7/Turnip.png",
        name: "Turnip"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/0/06/UnceasingTop.png",
        name: "Unceasing Top"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/70/WingedGreaves.png",
        name: "Wing Boots"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/8/83/Astrolabe.png",
        name: "Astrolabe"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/3/32/BlackBlood.png",
        name: "Black Blood"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/1/10/BlackStar.png",
        name: "Black Star"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/f/f7/BustedCrown.png",
        name: "Busted Crown"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/5/56/CallingBell.png",
        name: "Calling Bell"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/8/86/CoffeeDripper.png",
        name: "Coffee Dripper"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/e/e0/CursedKey.png",
        name: "Cursed Key"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/3/36/Ectoplasm.png",
        name: "Ectoplasm"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/6/64/EmptyCage.png",
        name: "Empty Cage"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/1/1d/FrozenCore.png",
        name: "Frozen Core"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/3/31/FusionHammer.png",
        name: "Fusion Hammer"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/5/5e/Holy_water.png",
        name: "Holy Water"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/9/96/HoveringKite.png",
        name: "Hovering Kite"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/f/fd/Inserter.png",
        name: "Inserter"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/d/df/MarkofPain.png",
        name: "Mark of Pain"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/4/4c/NuclearBattery.png",
        name: "Nuclear Battery"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/8/8d/PandorasBox.png",
        name: "Pandora's Box"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/1/1a/PhilosophersStone.png",
        name: "Philosopher's Stone"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/5/58/RingoftheSerpent.png",
        name: "Ring of the Serpent"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/3/36/RunicCube.png",
        name: "Runic Cube"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/6/6d/RunicDome.png",
        name: "Runic Dome"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/8/8e/RunicPyramid.png",
        name: "Runic Pyramid"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/a/a2/SacredBark.png",
        name: "Sacred Bark"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/9/99/SlaversCollar.png",
        name: "Slaver's Collar"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/5/5e/SneckoEye.png",
        name: "Snecko Eye"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/5/53/Sozu.png",
        name: "Sozu"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/5/53/TinyHouse.png",
        name: "Tiny House"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/b/b9/VelvetChoker.png",
        name: "Velvet Choker"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/8/8b/Violet_lotus.png",
        name: "Violet Lotus"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/e/e0/WristBlade.png",
        name: "Wrist Blade"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/6/61/BloodyIdol.png",
        name: "Bloody Idol"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/a/a0/CultistMask.png",
        name: "Cultist Headpiece"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/8/8e/Enchiridion.png",
        name: "Enchiridion"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/9/9d/FaceOfCleric.png",
        name: "Face of Cleric"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/5/58/GoldenIdol.png",
        name: "Golden Idol (Relic)"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/4/44/GremlinMask.png",
        name: "Gremlin Visage"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/0/0b/MarkoftheBloom.png",
        name: "Mark of the Bloom"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/2/2a/MutagenicStrength.png",
        name: "Mutagenic Strength"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/e/e0/NlothsMask.png",
        name: "N'loth's Hungry Face"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/78/Necronomicon.png",
        name: "Necronomicon"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/6/63/NeowsBlessing.png",
        name: "Neow's Lament"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/e/e2/NilrysCodex.png",
        name: "Nilry's Codex"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/5/53/NlothsGift.png",
        name: "Nloth's Gift"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/a/a0/OddMushroom.png",
        name: "Odd Mushroom"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/a/a4/RedMask.png",
        name: "Red Mask"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/74/SpiritPoop.png",
        name: "Spirit Poop"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/a/a2/SsserpentHead.png",
        name: "Ssserpent Head"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/4/41/WarpedTongs.png",
        name: "Warped Tongs"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/2/25/Brimstone.png",
        name: "Brimstone"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/3/37/Cauldron.png",
        name: "Cauldron"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/f/f9/ChemicalX.png",
        name: "Chemical X"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/d/d9/ClockworkSouvenir.png",
        name: "Clockwork Souvenir"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/1/11/DollysMirror.png",
        name: "Dolly's Mirror"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/9/97/FrozenEye.png",
        name: "Frozen Eye"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/d/d0/HandDrill.png",
        name: "Hand Drill"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/0/03/LeesWaffle.png",
        name: "Lee's Waffle"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/f/f2/MedicalKit.png",
        name: "Medical Kit"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/3/3a/Melange.png",
        name: "Melange"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/3/3d/MembershipCard.png",
        name: "Membership Card"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/6/6d/OrangePellets.png",
        name: "Orange Pellets"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/75/Orrery.png",
        name: "Orrery"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/c/c9/PrismaticShard.png",
        name: "Prismatic Shard"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/5/59/RunicCapacitor.png",
        name: "Runic Capacitor"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/9/93/Sling.png",
        name: "Sling of Courage"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/71/StrangeSpoon.png",
        name: "Strange Spoon"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/9/9a/TheAbacus.png",
        name: "The Abacus"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/4/46/Toolbox.png",
        name: "Toolbox"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/7e/TwistedFunnel.png",
        name: "Twisted Funnel"
      },
      {
        src: "https://vignette.wikia.nocookie.net/slay-the-spire/images/5/50/Circlet.png",
        name: "Circlet"
      }
    ]
}

export default relicList;