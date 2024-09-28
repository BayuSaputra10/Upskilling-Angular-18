import { Mage } from './mage'
import { Warrior } from './warrior'

const warrior: Warrior = new Warrior('Arthas', 100, 50, 20, 'Golden')
const mage: Mage = new Mage('Jaina', 80, 100, 15)

console.log('Initial State:')
console.log(
  `${warrior.getName()} - HP: ${warrior.getHp()}, Mana: ${warrior.getMana()}`
)
console.log(`${mage.getName()} - HP: ${mage.getHp()}, Mana: ${mage.getMana()}`)

// Warrior menyerang Mage
warrior.attack(mage)
console.log(`${mage.getName()} HP after attack: ${mage.getHp()}`)

// Mage menggunakan special move pada Warrior
mage.specialMove(warrior)
console.log(`${warrior.getName()} HP after special move: ${warrior.getHp()}`)

// Mage menggunakan stun skill pada Warrior
mage.stunSkill(warrior)

// Warrior mencoba menyerang lagi (harus gagal karena stun)
warrior.attack(mage)

// Mengurangi durasi stun setiap turn
warrior.decrementStunDuration()
warrior.decrementStunDuration()

// Warrior mencoba menyerang lagi (harus berhasil karena stun telah berakhir)
warrior.attack(mage)

// Warrior menyembuhkan dirinya sendiri
warrior.heal(20)
console.log(`${warrior.getName()} HP after self-healing: ${warrior.getHp()}`)

// Warrior menyembuhkan Mage
warrior.heal(mage)
console.log(
  `${mage.getName()} HP after being healed by ${warrior.getName()}: ${mage.getHp()}`
)
