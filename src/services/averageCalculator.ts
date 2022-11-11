export function averageCalculator (num1: number, num2: number) {
  let average = (Math.round((num1 + num2) / 2).toFixed(2).toString())
  console.log(`${num1} + ${num2} / 2 = ${average} (rounded up)`)
  return average
}