import { readFileSync } from 'node:fs'

const dataString = readFileSync('./data.txt', 'utf8', (err, data) => {
    if (err) throw err;
    return data
})

let dataArray = dataString.split('\n') // Array of all the strings with '' as divider

// const rucksacks = ["vJrwpWtwJgWrhcsFMMfFFhFp", "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL", "PmmdzqPrVvPwwTWBwg", "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn", "ttgJtRGJQctTZtZT", "CrZsJsPPZsGzwwsLwLmpwMDw"];

const rucksacks = [...dataArray]

const input = [
    [
        'vJrwpWtwJgWrhcsFMMfFFhFp',
        'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
        'PmmdzqPrVvPwwTWBwg'
    ],
    [
        'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
        'ttgJtRGJQctTZtZT',
        'CrZsJsPPZsGzwwsLwLmpwMDw',
    ]
]

const main = () => {
    const splittedRucksacks = splitRucksacks(rucksacks)
    const commonItems = goThroughRucksacks(splittedRucksacks)
    const listedbyPriority = calculatePriority(commonItems)
    const sum = listedbyPriority.reduce((acc, curr) => acc + curr, 0)
    console.log(sum)


    const groups = getArrayOfGroups(rucksacks)
    //console.log(groups)
    const badgeArray = findBadge(groups)
    //console.log(badgeArray.length)
    const badgePriority = calculatePriority(badgeArray)
    const badgeSum = badgePriority.reduce((acc, curr) => acc + curr, 0)
    console.log(badgeSum)
}

// Split the rucksacks into two compartments
const splitRucksacks = (array) => {
    const newArray = []
    for (const i of array) {
        const firstCompartment = i.slice(0, i.length / 2);
        const secondCompartment = i.slice(i.length / 2);
        newArray.push([firstCompartment, secondCompartment])
    }
    return newArray
}

// Go through all the rucksacks and find the common item
const goThroughRucksacks = (array) => {
    const commonItems = []
    for (const i of array) {
        const item = findCommonItem(i[0], i[1])
        commonItems.push(item)
    }
    return commonItems
}




// Find the item that appears in both compartments
const findCommonItem = (firstCompartment, secondCompartment) => {
    for (const i of firstCompartment) {
        if (secondCompartment.includes(i)) {
            return i
        }
    }
}

// Calculate the priority of the common items
const calculatePriority = (array) => {
    const newArray = []
    for (const i of array) {
        //if (typeof i === 'undefined') continue
        const priority = i.charCodeAt(0) - ((i == i.toLowerCase()) ? 96 : 38)
        newArray.push(priority)
    }
    return newArray
}


const getArrayOfGroups = (input) => {
    const groups = [];
  
    // Divide the list of rucksacks into groups of three
    input.forEach((cur, i) => {
      const groupIndex = Math.floor(i / 3);
  
      // Create an array for each group, if it doesn't exist
      if (!groups[groupIndex]) {
        groups[groupIndex] = [];
      }
  
      // Add the current rucksack to the appropriate group
      groups[groupIndex].push(cur);
    });
  
    return groups;
  }


const findBadge = (arrayOfGroups) => {
    console.log('Groups  ' + arrayOfGroups.length)
    const badgeArray = []
    arrayOfGroups.forEach(group => {
        // Go through each character in the first string of the group
        for (const character of group[0]) {
          // If the character is also in the other two strings, it is the common character
          if (group[1].includes(character) && group[2].includes(character)) {
            badgeArray.push(character)
            break
          }
        }
      });
      console.log('Badges  ' + badgeArray.length) // 129
      return badgeArray
}

main()