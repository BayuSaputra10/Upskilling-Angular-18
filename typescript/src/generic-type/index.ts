/**
 * Generic Type -> membuat sebuah komponen (aset) yang dapat diterapkan di berbagai tipe data, tapi dia juga dapat menjaga tipe data yang diterima saat digunakan.
 * Generic biasanya dibuat dengan keyword => T
 * Lantas apa bedanya dengan ANY ?
 */

// Function bisa
function indentity<T>(arg: T): T {
  return arg
}

// Arrow Function
// const indentityOther = <T>(arg: T): T => arg
const myAddress = indentity<string>('Jakarta Selatan')
console.log({ myAddress })

const myGPA = indentity<number>(4.0)
console.log({ myGPA })

function identityWithAny(arg: any): any {
  return arg
}

const myAddressWithAny = identityWithAny('Jakarta Selatan')
console.log({ myAddressWithAny })

const myGPAWithAny = identityWithAny(4.0)
console.log({ myGPAWithAny })
