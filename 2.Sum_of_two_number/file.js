//******************************************************************************
//* Write a function which takes two number and returns their sum.             *
//******************************************************************************
//
// Step1:  Understand the problem:
//	   1. Can I restate the problem in my own words?
//		   So we need to implement a function which takes two inputs and then it
//		   will perform the addition of these two number and will return the
//		   sum.
//
//	   2. What are the inputs that go into the problem?
//		   - int?
//		   - float?
//		   - string? this is for larger number that can not be supported by the
//				premitive data types
//
//		   - Lets consider we are dealing with int numbers only
//
//		   What if we have more than two number?
//		   what if we have only one number in the input?
//		   Ans: the function will be called by another function and it will
//		   always call it with two numbers.
//
//	   3. What are the outputs that should come out from the solution to the
//			problme?
//		   - int?
//		   - float?
//		   - string? this is to represent the output that can not be fit in the
//				premitive data types.
//
//		   - Lets consider the outputs are withing the range of int data type
//
//	   4. Do I have enough information to solve the problem?
//		   Yes
//		   We are not considering single input numbers
//		   We are not considering more than two input numbers
//
//	   5. How should I label the important piece of data that are part of the
//			problem?
//			function signature if not given
//				two inputs will be arguments of name num1 and num2
//				function name will be find_sum
//			output will be variable sum
