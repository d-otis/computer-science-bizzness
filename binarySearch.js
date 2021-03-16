function binarySearch(string, letter) {
  let startpoint = 0
  let endpoint = string.length - 1
  let guessPosition = parseInt((endpoint - startpoint) / 2)

  while (startpoint != endpoint) {
    console.log(`startpoint is ${startpoint}, endpoint is ${endpoint} and guessposition is ${guessPosition}`)

    if (string[guessPosition] < letter) {
      console.log('too low')
      startpoint = guessPosition
      guessPosition = startpoint + Math.round((endpoint - startpoint) / 2)
    } else if (string[guessPosition] > letter) {
      console.log('too high')
      endpoint = guessPosition
      guessPosition = startpoint + parseInt((endpoint - startpoint) / 2)
    } else {
      console.log('just right')
      return true
    }
  }

  if (string === letter) {
    console.log('one letter BINGO')
    return true
  } else {
    console.log('sorry')
    return false
  }
}

// let string = "aabeeeeeeffhhiiiimmooorsssssstttttttwww"
let string = "ABCDEFGH"

binarySearch(string, "H")