var fs = require('fs');

// Read file
fs.readFile("./data.txt", {encoding: 'utf-8'}, function(err, data) {
    if (err) {if (err.code == 'ENOENT') {console.error(err.message)} 
    else {console.error(err)}} 
    else {

        const arrayLarge = [] // Outer Array
        const string = data // string of all the numbers
        let array = string.split('\n') // Array of all the strings with '' as divider

        // Make Array with arrays of strings
        while (array.length > 0) {
            let index = array.indexOf('') // index of the first ''
            arrayLarge.push(array.slice(0, index)) // first array of strings pushed to outer Array
            array = array.slice(index + 1, ) //removing the first array
          }

          // Convert strings to numbers
          const numbersArray = []
          arrayLarge.forEach((e) => {
            const x = e.map(str => {
                return Number(str);
              })
              numbersArray.push(x)
          })

          // Reduce all the inner arrays
          const reducedArray = []
          numbersArray.forEach((item) => {
            const sumWithInitial = item.reduce((acc, curr) => acc + curr, 0)
            reducedArray.push(sumWithInitial)
          })

          // Sort the array
          const sorted = reducedArray.sort((a, b) => b - a)
          console.log(sorted)
        }      
})

