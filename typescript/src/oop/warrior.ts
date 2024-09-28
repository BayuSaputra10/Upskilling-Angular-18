import Hero from './hero'

// Inheritance (Pewarisan)
// Dimana Class Warior mewariskan sifat dari Class Hero
export class Warrior extends Hero {
  private skin: string

  constructor(
    name: string,
    hp: number,
    mana: number,
    baseDamage: number,
    skin: string
  ) {
    super(name, hp, mana, baseDamage)
    this.skin = skin
  }

  // Overidding
  specialMove(target: Hero): void {
    const damage = this.baseDamage * 2
    console.log(
      `${this.name} uses Sword Slash with ${this.skin} skin on ${target.getName()} for ${damage} damage!`
    )
    target.receiveDamage(damage)
  }

  // Overloading
  heal(amount: number): void
  heal(target: Hero): void
  heal(param: any): void {
    if (typeof param === 'number') {
      this.hp += param
      console.log(
        `${this.name} heals self for ${param} HP. Current HP: ${this.hp}`
      )
    } else if (param instanceof Hero) {
      const healAmount = this.mana / 2
      this.setHP(healAmount)
      this.mana -= healAmount
      console.log(
        `${this.name} heals ${param.getName()} for ${healAmount} HP. Remaining mana: ${this.mana}`
      )
    }
  }
}
