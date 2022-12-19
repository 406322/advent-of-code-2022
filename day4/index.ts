import { readFileSync } from "node:fs";

const text = readFileSync("data.txt", { encoding: "utf-8" }) 

const arr = text.split('\n')
.map(item => item.split(' ')
.flatMap(item => item.split(',')
.map(item => item.split('-'))
.flatMap(item => item.map(item => parseInt(item)))
))

const part1 = (arr: number[][]) => { 
    let count = 0
    arr.forEach((element: number[]) => {
        const fullyContaining1 = element[0] <= element[2] && element[1] >= element[3]
        const fullyContaining2 = element[0] >= element[2] && element[3] >= element[1]
        const fully = fullyContaining1 || fullyContaining2
        if (fully) count++
    })
    return count
}
console.log(part1(arr)) // Correct answer = 534

const part2 = (arr: number[][]) => {
    let count = 0
    let countTotal = 0
    arr.forEach((element: number[]) => {
        countTotal++
        const notContaining1 = element[1] < element[2]
        const notContaining2 = element[3] < element[0]
        const notContaining = notContaining1 || notContaining2
        if (notContaining) count++
    })
    return countTotal - count
}
console.log(part2(arr)) // Correct answer = 841
