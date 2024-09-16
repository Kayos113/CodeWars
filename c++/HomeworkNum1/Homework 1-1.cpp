using namespace std;

int main() {
	/*
		Question #1
	Write a program that asks the user for a positive number,
	then print all prime numbers from 1 to the input number.
	*/
	
	int inputNumber=0;
	while(inputNumber<=0) {
		cout << "Enter a positive integer:";
		cin >> inputNumber;
		if(inputNumber!>0) {
			cout << "INVALID INPUT. TRY AGAIN."
		} else {
			for(int i=0; i<=inputNumber; i++) {
			/* Check if each number is prime, and if it is then print it */
				if(isPrime(i)) {
					cout << i;
				}
			}
		}
	}
	
}

bool isPrime(int num) {
	double remainder;
	double divisor;
	do {
		remainder = num / divisor++;
		if(isWholeNumber(remainder)) {
			/* if this is true, then the number has more divisors than one and itself and is not prime */
			return false;
		}
	} while (remainder>=2)
	/* If the code reaches this point, there were no other divisors than this number and one, therefore it is prime */
	return true;
}

bool isWholeNumber(double num) {
	if(int(num) != num) {
	/* There are non-zero decimal places */
		return false;
	} else {
		return true;
	}
}