// mage.ts
import Hero from './hero'

export class Mage extends Hero {
  constructor(name: string, hp: number, mana: number, baseDamage: number) {
    super(name, hp, mana, baseDamage)
  }

  specialMove(target: Hero): void {
    const damage = this.baseDamage * 2
    console.log(
      `${this.name} uses Fireball on ${target.getName()} for ${damage} damage!`
    )
    target.receiveDamage(damage)
  }

  stunSkill(target: Hero): void {
    console.log(`${this.getName()} stuns ${target.getName()}!`)
    target.stun(2) // Stuns the target for 2 turns
  }
}
