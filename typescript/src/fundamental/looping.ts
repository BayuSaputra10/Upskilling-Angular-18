/**
 * Looping Sederhana
 * 1. For Loop => iterasi sederhana
 * 2. While Loop => iterasi sederhana
 * 3. Do..While Loop => iterasi sederhana
 * 4. For..of Loop => iterasi dalam sebuah array
 * 5. For..in Loop => iterasi dalam sebuah object
 *
 * Looping Modern
 * 1. forEach => iterasi tiap elemen dan tidak mengembalikan suatu nilai
 * 2. map => iterasi yang membuat sebuah array baru dari tiap elemen iterasi
 * 3. filter => iterasi yang membuat sebuah array yang memenuhi suatu kondisi
 * 4. reduce => iterasi untuk memberikan hasil kalkulasi (add, sub)
 * 5. smome
 * 6. every
 * 7. find
 * 8. findIndex
 */

/**
 * Object
 * { key: value }
 */

const nums: number[] = [1, 2, 3, 4, 5]
// For.
let sumFor = 0
for (let index = 0; index < nums.length; index++) {
  sumFor += nums[index]
}
console.log(`sumFor: ${sumFor}`)

// while
let sumWhile = 0
let i = 0
while (i < nums.length) {
  sumWhile += nums[i]
  i++
}
console.log(`sumWhile: ${sumWhile}`)

// do..while
let sumDoWhile = 0
let j = 0
do {
  sumDoWhile += nums[j]
  j++
} while (j < nums.length)
console.log(`sumDoWhile: ${sumDoWhile}`)

// For..of
let sumForOf = 0
for (const num of nums) {
  sumForOf += num
}
console.log(`sumForOf: ${sumForOf}`)

// For..in
let sumForIn = 0
for (const index in nums) {
  sumForIn += nums[index]
}
console.log(`sumForIn: ${sumForIn}`)

// forEach
let sumForEach = 0
nums.forEach((num) => (sumForEach += num))
console.log(`sumForEach: ${sumForEach}`)

// map
let sumMap = 0
const numbersFromMap = nums
  .map((num) => {
    sumMap += num
    if (num % 2 === 0) {
      return num
    }
    return null
  })
  .filter((num) => num !== null)
console.log(`sumMap: ${sumMap}`)
console.log('numbersFromMap:', numbersFromMap)

// reduce
const sumReduce = nums.reduce((prev, current) => prev + current, 0)
console.log(`sumReduce: ${sumReduce}`)
