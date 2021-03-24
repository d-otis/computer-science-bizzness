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


  // FLATIRON'S SOLUTION
  let sorted = []
  let currentMin;
  while(first.length != 0 && second.length != 0){
    currentMin = findMinAndRemove(first, second)
    sorted.push(currentMin)
  }

  return sorted.concat(first).concat(second)
}

// merge(costOfItemsAtTraderJoes, costOfItemsAtWholeFoods)

function mergeSort(array) {
  let midpoint = array.length / 2
  let firstHalf = array.slice(0, midpoint)
  let secondHalf = array.slice(midpoint, array.length)


  if (array.length < 2) {
    return array
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  } 
}

// mergeSort([2, 1])
console.log(mergeSort([7, 8, 1, 6]))

// https://github.com/learn-co-curriculum/merge-sort-codealong