include namespace std;

/*
	Write a program that will continuously ask the user for positive integers (until the
		user enters a negative integer at which the program will be terminated). Every
		time the user inputs a positive integer the program will print out this integer in
		reverse. Your program should have a function that accepts an integer and returns
		an integer in reverse. To convert the integer to its reverse, your program will call
		this function.
		
	Ex: 46821 => 12864
*/

void main() {
	int userInput=-1;
	while(!(userInput>=0)) {
		cout << "Enter a positive integer to reverse:";
		cin >> userInput;
		if(userInput<0) {
			cout << "INVALID INPUT. TRY AGAIN."
		} else {
			cout << (userInput + " => " + reverseInt(userInput));
		}
	}
}

int reverseInt(int input) {
	int reversedInt;
	while(input>0) {
		reversedInt += input%10;
		reversedInt *= 10;
		input/10;
	}
	return reversedInt;
}