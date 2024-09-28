// if, if..else, swicth case
type Employee = {
  id: string
  name: string
  salary: number
  position?: string //bersifat optinal
}

const john: Employee = { id: '1', name: 'John', salary: 8000000 }

if (john.salary > 5000000) {
  john.position = 'Direktur'
} else if (john.salary > 400000) {
  john.position = 'Manajer'
} else {
  john.position = 'Staff'
}

console.log(
  `Data Karyawan dengan nama ${john.name} mempunyai jabatan sebagai ${john.position}`
)

// Switch Case
switch (true) {
  case john.salary > 5000000:
    john.position = 'Direktur'
    break
  case john.salary > 400000:
    john.position = 'Manajer'
    break
  default:
    john.position = 'Staff'
    break
}

// template literal -> `kata kata ${variable}`
const output = `Data Karyawan dengan nama ${john.name} mempunyai jabatan sebagai ${john.position} dan memiliki gaji sebesar ${john.salary}`
console.log(output)
