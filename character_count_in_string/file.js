//******************************************************************************
//* Write a functio which takes in a string and returns counts of each         *
//* character in the string.                                                   *
//******************************************************************************
//
// Step 1: Understand the problem
//	1. Can I restate the problem in my own word?
//		So we have to implement a function that will take a string as input
//		and will retrun the count of each character.
//
//	2. What are the inputs that goes into the problem?
//		a string which ends with null char
//
//	3. What are the ouputs that should come from the solution?
//		How should it be look?
//		(ans: in examples)
//
//	4. Do I have enough information to solve the problem?
//		String is going to end with null char. (ans: yes)
//		what will be the max length of the string, can it be handle by integer
//		data type. (ans: yes)
//		todo: add more (if any) note: can be encountered while solving the
//				problem
//
//	5. How should I lable the important peices of data that are part of the
//		problem.
//		function signatuer if not given
//			function name: charCount()
//			input parameters: str of type string
//		output:
//
// Step 2: Explore the concrete examples
//	1. Explore simple example
//		charCount("aaaa"); output: {a:4} or {a:4, b:0....z:0}
//			(ans: consider first one)
//		charCount("hello); {h:1, e:1, l:2, o:1}
//
//	2. Progress to more complex examples
//		- Spaces?, number?, spacial characters?
//			"my phone number is 8085"
//			"my pass is $%i-#"
//			(ans: consider alph numberic only, i.e. number, and letters only)
//		- Case important
//			"Hello hi"
//			(ans: ignore casing)
//
//	3. Explore examples with empty inputs
//		charCount(""); output: {}/error/null etc
//
//	4. Explore examples with invalid inputs
//		- what if the input is not string (that is not within "")
//		- passed other data structures not string?
//
// Step 3: Break it Down
//
//function charCount(str){
//	create a object that will contain the output
//	traverse each character in the string
//		if the character is alphanumric and it is not available in the
//			object then insert that char into the object and assign count
//			to be 1
//		else if the character is there in the object already then
//			increament its count inside resultant object
//	return the output object
//}
//
// Step 4: Solve/Simplify
//	Simplify:
//		- Find the core difficulty in what you ary trying to do
//		- Temporarily ignore that difficulty
//		- Write a simplified solution
//		- Then incorporate that difficulty back in
//
//	Ex: In the above example we can think that difficulty as incorporating
//		the alphanumeric character.
//
//		So currently we are going to ignore the use of alphanumeric character
//		we will counting each and every kind of character.
//
//function charCount(str){
//	// create a object that will contain the output
//	let res = {};
//	// traverse each character in the string
//	for(let i = 0; i < str.length; i++) {
//		//console.log(str[i]);
//		// if the character is alphanumric and it is not available in the
//		//	object then insert that char into the object and assign count
//		//	to be 1
//		if(!res[str[i]]) {
//			res[str[i]] = 1;
//		} else {
//		// else (if the character is there in the object already) then
//		//	increament its count inside resultant object
//			res[str[i]] += 1;
//		}
//	}
//	return res;
//	// return the output object
//}
// In the above code we have ignored the one of the core difficulty of the
// problem.
//
// Now lets try to put that difficutly back in.
//
//function charCount(str){
//	// create a object that will contain the output
//	let res = {};
//	str.toLowerCase();
//	// traverse each character in the string
//	for(let i = 0; i < str.length; i++) {
//		if((str[i] <= 'z' &&  str[i] >= 'a')
//		|| (str[i] <= '9' && str[i] >= '0')) {
//			// if the character is alphanumric and it is not available in the
//			//	object then insert that char into the object and assign count
//			//	to be 1
//			if(!res[str[i]]) {
//				res[str[i]] = 1;
//			} else {
//			// else (if the character is there in the object already) then
//			//	increament its count inside resultant object
//				res[str[i]] += 1;
//			}
//		}
//	}
//	// return the output object
//	return res;
//}
//
//
//console.log(charCount("vVikash"));
//
// Step 5: Look back and Refactor (if any)
//
// Refactoring question
//	- Can you check the results?
//	- Can you derive the result differently?
//	- Can you understand it at a glance?
//	- Can you use the result or method for some other problem?
//	- Can you imporove the performance of you sulution?
//	- Can you think of other ways to refactor?
//	- How have other people solved this problem?
//
//
// Note: In any step, asking any question is upto you, you don't have to
//	each and every quetion to the interviewre...
//
// Lets try to refactor the code
//
//function charCount(str){
//	// create a object that will contain the output
//	let res = {};
//	// traverse each character in the string
//	for(let char of str){
//		char = char.toLowerCase();
//		if(/[a-z0-9]/.test(char)){
//			// if the character is alphanumric and it is not available in the
//			//	object then insert that char into the object and assign count
//			//	to be 1
//			// else (if the character is there in the object already) then
//			//	increament its count inside resultant object
//			res[char] = ++res[char] || 1;
//		}
//	}
//	// return the output object
//	return res;
//}
//
//
//console.log(charCount("vVikash"));
//
// Now while doing the refactor, we find out that using regex is quite expensive
// se we are going to use ascii, for more performance we are going to use
// ascii value not char
function charCount(str){
	// create a object that will contain the output
	let res = {};
	// traverse each character in the string
	for(let char of str){
		char = char.toLowerCase();
		code = char.charCodeAt(0);
		if((code < 58 && code > 47) ||
		code < 123 && code > 96) {
			// if the character is alphanumric and it is not available in the
			//	object then insert that char into the object and assign count
			//	to be 1
			// else (if the character is there in the object already) then
			//	increament its count inside resultant object
			res[char] = ++res[char] || 1;
		}
	}
	// return the output object
	return res;
}


console.log(charCount("vVikash"));
