/*
* This program is the binary search program.
*
* @author  Ahmad El-khawaldeh
* @version 1.0
* @since   2021-12-07
*/

import * as readline from 'readline'

function compareNumbers (ver1: number, ver2: number) {
  return ver1 - ver2
}

function getRandomInt (min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

function binarySearch (array: number[], searchNum: number,
  lowIndex: number, highIndex: number) {
  if (lowIndex > highIndex) {
    return -1
  } else {
    const medium: number = Math.round((highIndex + lowIndex) / 2)
    let returnValue: number
    if (array[medium] > searchNum) {
      returnValue = binarySearch(array, searchNum,
        lowIndex, medium - 1)
      return returnValue
    } else if (array[medium] < searchNum) {
      returnValue = binarySearch(array, searchNum,
        medium + 1, highIndex)
      return returnValue
    } else {
      return medium
    }
  }
}

const generatedNum :number[] = new Array(250)

for (let i: number = 0; i < generatedNum.length; i++) {
  generatedNum[i] = getRandomInt(0, 1000)
}

generatedNum.sort(compareNumbers)

console.log(generatedNum)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question(
  'What number are you searching for in the array (integer between 0 and 999): '
  , function (input) {
    try {
      const answer: number = binarySearch(generatedNum, parseInt(input), 0, 250)
      if (answer === -1) {
        console.log('Error invalid input.')
      } else {
        console.log('The number is in index ' + answer + '.')
      }
    } catch (exeption) {
      console.log('please insert an integer.')
    }
    rl.close()
    console.log('\nDone.')
  })
