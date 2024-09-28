import { Todo, TodoAuthor } from '../interface/todo'

export interface IHero {
  name: string
  hp: number
  mana: number
  baseDamage: number
  isStunned: boolean
  stunDuration: number

  attack(target: IHero): void
  receiveDamage(damage: number): void
  heal(target: IHero): void
  specialMove(hero: IHero): void
}

interface ABC extends IHero, Todo, TodoAuthor {}
