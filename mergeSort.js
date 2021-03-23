let costOfItemsAtTraderJoes =  [1, 2, 6, 7, 8]
let costOfItemsAtWholeFoods =  [3, 4, 5, 9, 10]

function findMinAndRemove(firstHalf, secondHalf){
  let minfirstHalf = firstHalf[0]
  let minsecondHalf = secondHalf[0]
 
  if(minfirstHalf < minsecondHalf){
    return firstHalf.shift()
  } else {
    return secondHalf.shift()
  }
}
 
function merge(first, second) {
  let sorted = []

  while (first.length || second.length) {
    first[0] < second[0] ? sorted.push(first.shift()) : sorted.push(second.shift())
  }

  return sorted
}


merge(costOfItemsAtTraderJoes, costOfItemsAtWholeFoods)