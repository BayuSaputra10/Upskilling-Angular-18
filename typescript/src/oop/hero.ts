export default abstract class Hero {
  // Encapsulation
  // Private
  // Protected
  // Public
  protected name: string
  protected hp: number
  protected mana: number
  protected baseDamage: number
  protected isStunned: boolean = false
  protected stunDuration: number = 0

  // constructor
  // method
  constructor(name: string, hp: number, mana: number, baseDamage: number) {
    // untuk memanggil atribute yang sudah didefinisikan di dalam class,
    // menggunakan keyword this
    this.name = name
    this.hp = hp
    this.mana = mana
    this.baseDamage = baseDamage
  }

  // Method (beghavior)
  attack(target: Hero): void {
    if (!this.isStunned) {
      console.log(
        `${this.name} attacks ${target.name} for ${this.baseDamage} damage`
      )
      target.receiveDamage(this.baseDamage)
    } else {
      console.log(`${this.name} is stunned and cannot attack`)
    }
  }

  receiveDamage(damage: number): void {
    this.hp -= damage
    console.log(
      `${this.name} receives ${damage} damage. Remaining HP: ${this.hp}`
    )
  }

  heal(target: Hero): void {
    const healAmount = this.mana / 2
    target.hp += healAmount
    this.mana -= healAmount
    console.log(
      `${this.name} heals ${target.name} for ${healAmount} HP. Remaining mana: ${this.mana}`
    )
  }

  // Kita berikan sebuah method untuk diimplementasikan untuk subclass
  abstract specialMove(hero: Hero): void

  // getter and setter
  getName(): string {
    return this.name
  }

  getHp(): number {
    return this.hp
  }

  getMana(): number {
    return this.mana
  }

  getBaseDamage(): number {
    return this.baseDamage
  }

  setHP(amount: number): void {
    this.hp += amount
  }

  setHeal(amount: number): void {
    this.hp += amount / 2
  }

  setMana(amount: number): void {
    this.mana -= amount / 2
  }

  stun(duration: number): void {
    this.isStunned = true
    this.stunDuration = duration
    console.log(`${this.name} is stunned for ${duration} turns`)
  }

  decrementStunDuration(): void {
    if (this.isStunned && this.stunDuration > 0) {
      this.stunDuration -= 1
      if (this.stunDuration === 0) {
        this.isStunned = false
        console.log(`${this.name} is no longer stunned`)
      }
    }
  }
}
