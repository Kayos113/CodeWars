include namespace std;

/*
	Question 3:
		Def: A year is a century year if it is divisible by 100. (Ex. 100, 200, 300,...)
		
		Def: A year is non-century year if it is not a century year. (Ex. 1, 2, 3, 4, ...)
		
		Def: A year is a leap year if it is a non-century year that is divisible by 4, or a 
		century year that is divisible by 400. Nothing else is a leap year. 
		
		Write a program that is going to ask the user for the range of years and print out 
		all leap years in that range 5 to a line. It is better if you write a separate function 
		to check if the given year is a leap year or not.
*/

int main() {
	int lowerBound;
	int upperBound;
	inputNumber(lowerBound);
	inputNumber(upperBound);
	printLeapYearsInRange(lowerBound, upperBound);
}

void inputNumber(int &inputNumber) {
	int userInput=-1;
	while(!(userInput>=0)) {
		cout << "Enter a positive year:";
		cin >> userInput;
		if(userInput<0) {
			cout << "INVALID INPUT. TRY AGAIN."
		} else {
			inputNumber=userInput;
		}
	}
}

void printLeapYearsInRange(int lowerBound, int upperBound) {
/*
	This function prints out 5 years to a line, making sure to only print out leap years between the bounds.
*/
	int arrIndex=0;
	int[] yearArr = new int[5];
	for(int currYear=lowerBound; currYear<=upperBound; currYear++;) {
		if(isLeapYear(currYear)) {
			yearArr[arrIndex++] = currYear;
			if(arrIndex==5) {
				for(int i=0; i<5; i++) {
					cout << yearArr[i]+" ";
				}
				arrIndex=0;
				continue;
			}
		}
		else {
			
		}
	}
	if(arrIndex!=0) {
		for(int i=0; i<arrIndex; i++) {
			cout << yearArr[i]+" ";
		}
	}
}

bool isCenturyYear(int year) {
	return year%100==0;
}

bool isLeapYear(int year) {
	if(!isCenturyYear(year)) {
		if(year%4==0) {
			return true;
		}
	}
	else {
		if(year%400==0) {
			return true;
		}
		else {
			return false;
		}
	}
}