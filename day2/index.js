var fs = require('fs');

// Read file
fs.readFile("./data.txt", { encoding: 'utf-8' }, function (err, data) {
    if (err) {
        if (err.code == 'ENOENT') { console.error(err.message) }
        else { console.error(err) }
    }
    else {

        let string = data // string of all the numbers
        string = string.replaceAll(' ', '')
        let array = string.split('\n')

        let uniqueChars = [...new Set(array)];
        console.log(uniqueChars)

        const resultArray = []
        array.forEach((item) => {
            const arr = []
            arr.push(item)
            resultArray.push(arr)
        })

        const scoreArray1 = []
        resultArray.forEach((item, i) => {
            if(item[0] == 'CY') scoreArray1.push(2) 
            if(item[0] == 'BY') scoreArray1.push(5)
            if(item[0] == 'CX') scoreArray1.push(7)
            if(item[0] == 'BZ') scoreArray1.push(9)
            if(item[0] == 'AX') scoreArray1.push(4)
            if(item[0] == 'AY') scoreArray1.push(8)
            if(item[0] == 'CZ') scoreArray1.push(6)
            if(item[0] == 'BX') scoreArray1.push(1)
            if(item[0] == 'AZ') scoreArray1.push(3)
        })
        const sum1 = scoreArray1.reduce((acc, curr) => acc + curr, 0)
        console.log(sum1)


        const scoreArray2 = []
        resultArray.forEach((item, i) => {
            if (item[0] == 'CY') scoreArray2.push(3 + 3) 
            if (item[0] == 'BY') scoreArray2.push(3 + 2)
            if (item[0] == 'CX') scoreArray2.push(0 + 2)
            if (item[0] == 'BZ') scoreArray2.push(6 + 3)
            if (item[0] == 'AX') scoreArray2.push(0 + 3)
            if (item[0] == 'AY') scoreArray2.push(3 + 1)
            if (item[0] == 'CZ') scoreArray2.push(6 + 1)
            if (item[0] == 'BX') scoreArray2.push(0 + 1)
            if (item[0] == 'AZ') scoreArray2.push(6 + 2)
        })
        const sum2 = scoreArray2.reduce((acc, curr) => acc + curr, 0)
        console.log(sum2)


        //Second
        // X - Lose 0
        // Y - Draw 3
        // Z - Win 6

        // // Opponent
        // let A = 'Rock'
        // let B = 'Paper'
        // let C = 'Scissors'

        // //Me
        // let Y = 'Paper' 2
        // let X = 'Rock' 1
        // let Z = 'Scissors' 3

        // CY = 1
        // BY = 6
        // CX = 8
        // BZ = 8
        // AX = 6
        // AY = 8
        // CZ = 6
        // BX = 1
        // AZ = 1

        // Lose 0
        // Win 6
        // Draw 3

    }

})


