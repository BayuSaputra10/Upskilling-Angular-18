// Pembuatan function umum
function greeting(name: string, address: string): string {
  return `Hai saya ${name} saat ini tinggal di ${address}`
}

console.log(greeting('John Doe', 'Jakarta Selatan'))

// Arrow Function
const acceptAnything = (anytihing: string | number | boolean | number[]) => {
  console.log(anytihing)
}

// const acceptAnything = (anytihing: string | number | boolean | number[]) => console.log(anytihing);

acceptAnything('Hola hola')
acceptAnything(2024)
acceptAnything([1, 2, 3, 4, 5])
acceptAnything(true)
