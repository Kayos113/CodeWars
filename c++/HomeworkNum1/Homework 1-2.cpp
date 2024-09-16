include namespace std;

/*
	Question 2:
	Find if an input number is a "perfect" number, a.k.a. if its divisors add up to itself.
	E.G. 6 => 1+2+3
*/

int main() {
	int inputNumber=0;
	while(inputNumber<=0) {
		cout << "Enter a positive integer:";
		cin >> inputNumber;
		if(inputNumber!>0) {
			cout << "INVALID INPUT. TRY AGAIN."
		} else {
			int outputNumber = sumOfDivisors(inputNumber);
			cout << outputNumber;
		}
	}
}

int sumOfDivisors(double targetNum) {
	return 1 + sumOfDivisors(targetNum, 2);
}

int sumOfDivisors(double targetNum, int index) {
	if(index >= targetNum/2){
		return 0;
	}
	else {
		if(isWholeNumber(targetNum/index))
		{
			return (sumOfDivisors(targetNum, index+1) + (index + (targetNum/index)));
		}
		else {
			return sumOfDivisors(targetNum, index+1) + 0;
		}
	}
}

bool isWholeNumber(double num) {
	if(int(num) != num) {
	/* There are non-zero decimal places */
		return false;
	} else {
		return true;
	}
}