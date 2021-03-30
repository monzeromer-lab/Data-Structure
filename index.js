/* Searching */

function SequentialSearch(){
const array = [1,2,3,4,5,6,7,8,9,10]
let arrayNumbersLength = array.length-1;
let NeededNumber = 7
let pos = 0
let con = true
function ReloadPos(){
pos = 0
con = true
}
function SecSort( Arr , Length , Need){
    ReloadPos()
    for (pos; pos < Length && con == true; pos++) {
        if(Arr[pos] == Need){
            console.log(Arr[pos])
            con = false
            return true
        }
    } 
}
let process = SecSort(array , arrayNumbersLength , NeededNumber)
if (process){
    console.log(true)
} else {
    console.log(false)
}
}
console.log(SequentialSearch())

/* Sorting */
//Bubble Sorting
const buArray = [7,234523,23,3452]
const buNumber = buArray.length
let bubbleSort = (inputArr , inputLength) => {
    for (let i = 0; i < inputLength; i++) {
        for (let j = 0; j < inputLength; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j]
                inputArr[j] = inputArr[j + 1]
                inputArr[j + 1] = tmp
            }
        }
    }
    return inputArr;
};
console.log(bubbleSort(buArray , buNumber))

//Selection Sort
const selectionSort = (originalList) => {
    const list = originalList
    const len = list.length
    for (let i = 0; i < len; i++) {
      let min = i
      for (let j = i + 1; j < len; j++) {
        if (list[min] > list[j]) {
          min = j
        }
      }
      if (min !== i) {
        // a new minimum is found. Swap that with the current element
        ;[list[i], list[min]] = [list[min], list[i]]
      }
    }
    return list
  }
  
  const listOfNumbers = [1, 6, 3, 4, 5]
  console.log(selectionSort(listOfNumbers)) 