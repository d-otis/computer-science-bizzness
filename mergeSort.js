import { selectionSort, minAndRemove } from './selectionSort.js'

let costOfItemsAtTraderJoes =  [1, 2, 6, 7, 8]
let costOfItemsAtWholeFoods =  [3, 4, 5, 9, 10]
 
function merge(first, second) {
  let sorted = []

  for (let i = 0; i < first.length; i++) {
    first[i] < second[i] ? sorted.push(first[i], second[i]) : sorted.push(second[i], first[i])
  }

  return sorted
}


merge(costOfItemsAtTraderJoes, costOfItemsAtWholeFoods)