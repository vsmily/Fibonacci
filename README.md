
/*
Fibonacci Rest API
Scenario: There is a need for a Rest (or Rest-like) API that can receive an index "n" and returns the Fibonacci value that corresponds to the given index, and you have been tasked with implementing the first version of this API.

Examples: the first values of the Fibonacci sequence are 0, 1, 1, 2, 3, 5, 8, 13, ..., so, if we were to give the API the index n=3, we should get the response value "2", and if we request n=6, we should get "8" as the response, and so on.

Please deliver to us your API as a link to a repo (Gitlab, Github, etc...) with your code and a README file (plaintext or markdown).

The code project can be developed in the programming language of your choice.

The README file is for you to describe your thought process. You can document: technical decisions that you made, what optimizations you could add in the future to improve upon your initial solution, and anything else you would like to add for us to get a better understanding of your engineering thinking.
*/

-------------------- Rest API Fibonacci -------------------- 

1. Validate the parameter given is a valid number

a. Validate it 's a number by trying to parse as a number.
b. Validate it 's not a negative number
c. Validate it 's an Integer number

2. Create Algorithm to get number

a. Create an array with the 3 numbers of Fibonacci series
b. Create a loop starting with number 2 to the given sequence less 1
c. For every loop's iteration add a new number to the array that is going to be the sum of the last two actual values of the array
d. Return the index value of the array for the sequence given fibo[seq]

Note: b and c are going to be executed when the given sequence will be greater than 2.

