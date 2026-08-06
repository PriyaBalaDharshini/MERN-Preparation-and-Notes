const arr = [1, 2, 3]
arr.push(4, 5, 6)
console.log(arr);
arr.pop()
console.log(arr);
arr.shift()
console.log(arr);
arr.unshift(0)
console.log(arr);

//slice(start, end) — copy a portion, does NOT modify original
const arr1 = [1, 2, 3, 4, 5];
const sliced = arr1.slice(2, 6); //o/p - slice(start-index-value, end-index-1-value)
console.log(sliced);
console.log(arr1); // Original array remains unchanged

//Removing Elements
const array = [1, 2, 3, 4, 5];
const removed = array.splice(1, 2);   // start at index 1, remove 2 elements
console.log(array);        // [1, 4, 5] — original MUTATED
console.log(removed);    // [2, 3] — splice RETURNS the removed elements as an array

//Adding elements (deleteCount = 0)
const array2 = [1, 2, 5];
array2.splice(2, 0, 3, 4);   // at index 2, remove 0 elements, insert 3 and 4
console.log(array2);   // [1, 2, 3, 4, 5]

//Replacing elements
const arr3 = [1, 2, 3];
arr3.splice(1, 1, "two");   // at index 1, remove 1 element, insert "two"
console.log(arr3);   // [1, "two", 3]

//map() — transform each element, returns NEW array
const arr4 = [1, 2, 3];
const doubled = arr4.map(num => num * 2);
console.log(doubled);   // [4, 6, 8]
console.log(arr4);        // [1, 2, 3] — original UNCHANGED

const user = [{ name: "Priya", age: 30 }, { name: "Poovei", age: 31 }, { name: "Bala", age: 32 }]
const names = user.map(i => ({ name: i.name, age: i.age }))
console.log(names) // ["Priya", "Poovei", "Bala"]

const arr5 = [2, 4, 6, 8];
const sum = arr5.reduce((acc, curr) => acc + curr, 0)
console.log(sum) 


const nums = [10, 1, 21, 2];
nums.sort();
console.log(nums); 

nums.sort((a, b) => a - b);
console.log(nums);

nums.sort((a, b) => b - a);
console.log(nums);
