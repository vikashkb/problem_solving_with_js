//******************************************************************************
//* Write a function called same, which accepts two arrays. The function       *
//* should return true if every value in the array has it's corresponding      *
//* value squared in the second array. The frequency of value must be same.    *
//******************************************************************************
//
//Step 1: Understand the problem:
//	- Can I restate the problem in my own word.
//		So will be given two arrays, we have to find out whether the first
//		array has it's corresponding squared element is the second array.
//
//	- What are the inputs that go into the solution.
//		Two arrays
//
//	- What are the outputs that come out of the solution.
//		true/false
//
//	- Do I have enough information to solve the problem.
//		No. Few things I need to know
//
//		1. Does the array will have repetitions: (ans yes)
//
//		2. Does the passed array can be of different size: (ans yes)
//
//	- Lable the important peices of data in the problem.
//		- Function name: isSquaredSame()
//		- Parameteres : array1, array2
//		- return values : true/false
//
//Step 2: Explore the concrete examples:
//	- Simple examples
//		[1,2,3], [1,4,9] : true
//		[1,2,3], [4,9,1] : true //order does'nt matter
//	- More complex examples
//		[1,2,2], [4,4,1] : true
//		[1,2,2], [4,1] : false //each value should have corresponding squared
//									value
//		[1,2], [4,4,1] : false //same (vise versa)
//	- Empty inputs
//		[], [] : true
//
//	- Invalid inputs
//		['1','2'], ['4', '1'] ? : will be only having integer values
//
//Step 3: Break it down
// Solution:
//		- Check the length of both array, if not same return false
//
//		- if same then check for each element in array1 check whether
//			corresponding squared element is present in the array2 or not
//
// Step 4: Solve/Simplify
//	- Core difficulty: handling repetition: will only cosider unique values
//						initially
//
//function isSquaredSame(arr1, arr2) {
//	if(arr1.length != arr2.length)
//		return false;
//	let found = false;
//	for(let i of arr1) {
//		for(let j of arr2) {
//			if(i === j) {
//				found = true;
//				break;
//			}
//		}
//		if(!found)
//			return false;
//	}
//
//	return true;
//
//}
//
//Now lets try to handle repetition of the values
//
//function isSquaredSame(arr1, arr2) {
//	if(arr1.length != arr2.length)
//		return false;
//	let visited = Array(arr2.length).fill(false);
//	for(let i in arr1) {
//		let found = false;
//		for(let j in arr2) {
//			if(arr1[i] * arr1[i] === arr2[j] && !visited[j]) {
//				found = true;
//				visited[j] = true;
//				break;
//			}
//		}
//		if(!found)
//			return false;
//	}
//
//	return true;
//
//}
//
//Step 5: Lookback and refactor
//function isSquaredSame(arr1, arr2) {
//	if(arr1.length != arr2.length)
//		return false;
//	let visited = Array(arr2.length).fill(false);
//	for(let i in arr1) {
//		let found = false;
//		for(let j in arr2) {
//			if(arr1[i] * arr1[i] === arr2[j] && !visited[j]) {
//				found = true;
//				visited[j] = true;
//				break;
//			}
//		}
//		if(!found)
//			return false;
//	}
//
//	return true;
//
//}
//Step 5: No refactoring is there to handle
// but this solution takes O(n^2) times and O(1) space
// there is a solution that will take O(nlogn) and O(1) space
//
// step 3: Break it down
//		- if length not same return false
//		- sort both the array, and compare on by one
//
// step 4: Solve/Simplify
//		No core difficulty while solving this approach
//function isSquaredSame(arr1, arr2) {
//	if(arr1.length != arr2.length)
//		return false;
//	arr1.sort();
//	arr2.sort();
//	for(let i in arr1) {
//		if(arr1[i] * arr1[i] !== arr2[i]) {
//			return false;
//		}
//	}
//
//	return true;
//
//}
// step 5: Look back and refactor
//	No rectoring needed
//	But this solution have O(nlogn) time complexity
//	we can improve this time to O(n) time complexity and
//	O(n) space complexity
//
//		step 3: Break it down
//			- if length not same return false
//			- traverse second array and place it inside
//				the object
//
//		step 4: Solve/ Simplity
//			- Core difficulty: how to handle repetition
//			- currenlty ignoring the repetion will back to it
//
//function isSquaredSame(arr1, arr2) {
//	if(arr1.length != arr2.length)
//		return false;
//	let hash_map = {};
//	for(let val of arr2) {
//		hash_map[val] = 1;
//	}
//	for(let i of arr1) {
//		if(!hash_map[i*i]) {
//			return false;
//		}
//	}
//
//	return true;
//
//}
// Take back core difficulty: now lets try to handle repetition
//function isSquaredSame(arr1, arr2) {
//	if(arr1.length != arr2.length)
//		return false;
//	let hash_map = {};
//	for(let val of arr2) {
//		hash_map[val] = ++hash_map[val] || 1;
//	}
//
//	for(let i of arr1) {
//		if(!hash_map[i*i]) {
//			return false;
//		} else {
//			hash_map[i*i]--;
//		}
//	}
//
//	return true;
//
//}
// step 5: Look back and refactor:
//		It is most effecient solution in terms of time complexity
//
//		We can solve this by one more approach by using two hash_maps
//		but it will cost us O(n)+O(n) space comlexity
//
//		the above solution is perfect but just let try this approach
//		as will
//
//		step 3: Break it down
//			- if length is not same return false
//			- create two objects to contain each value along
//				with frequency
//			- compare both object first
//			- then compare frequenty of each value
//
//		step 4: solve/simplify
//			core difficulty: comparing frequency, ignoring this
//
//
//function isSquaredSame(arr1, arr2) {
//	if(arr1.length != arr2.length)
//		return false;
//	let hash_map1 = {};
//	let hash_map2 = {};
//	for(let val of arr1) {
//		hash_map1[val] = ++hash_map1[val] || 1;
//	}
//	for(let val of arr2) {
//		hash_map2[val] = ++hash_map2[val] || 1;
//	}
//
//	for(let i in hash_map1) {
//		if(!hash_map2[i*i])
//			return false;
//	}
//
//	return true;
//
//}
	// Now lets incorporate freqeuncy as well
function isSquaredSame(arr1, arr2) {
	if(arr1.length != arr2.length)
		return false;
	let hash_map1 = {};
	let hash_map2 = {};
	for(let val of arr1) {
		hash_map1[val] = ++hash_map1[val] || 1;
	}
	for(let val of arr2) {
		hash_map2[val] = ++hash_map2[val] || 1;
	}

	for(let i in hash_map1) {
		if(!hash_map2[i*i])
			return false;
		else if(hash_map1[i] !== hash_map2[i*i]) {
			return false;
		}
	}

	return true;

}
// step 5: Look back and refactor: no need
console.log(isSquaredSame([1,2,3], [1,9,4]));
console.log(isSquaredSame([1,2,2], [4,1,9]));
console.log(isSquaredSame([1,2,2], [4,1,4]));

