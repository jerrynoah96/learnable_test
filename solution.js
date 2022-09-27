
// this function returns how often an item occurs in an array
function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
}


// this function returns the Nth rarest item in an array
function returnNthRarestNum(arr, nth){

// first create a new array that contains the items without duplicate
let duplicateRemoved = [...new Set(arr)];

for(let i = 0; i < duplicateRemoved.length; i++ ){
	const occurrence = getOccurrence(arr, duplicateRemoved[i]);
	if(occurrence == nth){
  return duplicateRemoved[i];
	
  }
}
}

const res = returnNthRarestNum([1, 1, 1, 2, 4, 5, 4, 6, 7, 7, 4], 2);
console.log(res, "result");
