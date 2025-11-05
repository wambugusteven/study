#include <stdio.h>

int main() {
    int Aage = 18;
    int age;
    int count;
    int myNumber[7];
    int length = sizeof(myNumber) / sizeof(myNumber[0]);
    int MyNum[] = {10, 20, 30, 40, 50, 60, 90, 100};
    int i;
    int LENGTH = sizeof(MyNum) / sizeof(MyNum[0]);
    int lowestNumber = MyNum[0];

    printf("Enter your age: ");
    scanf("%d", &age); 

    printf("Enter count: ");
    scanf("%d", &count);

    // Age check
    if (age >= Aage) {
        printf("Old enough to vote!\n");
    } else {
        printf("Still have a long way to go.\n");
    }

   
    while (count <= 6) {
        if (count < 6) {
            printf("Dice number less than 6?!\n");
        } else {
            printf("Dice number is 6.\n");
        }
        count++;
    }

   
    switch (age >= Aage) {
        case 1:
            printf("You're an adult.\n");
            break;
        case 0:
            printf("You're a child!\n");
            break;
    }

    
    int values[] = {2, 3, -4, 5, 6, 0, 9};
    for (int j = 0; j < length; j++) {
        myNumber[j] = values[j];
    }

   
    printf("\nmyNumber values:\n");
    for (int j = 0; j < length; j++) {
        if (myNumber[j] == 0) {
            break;
        }
        printf("%d\n", myNumber[j]);
    }

    
    printf("\nMyNum values:\n");
    for (i = 0; i < LENGTH; i++) {
        printf("%d\n", MyNum[i]);
        if (lowestNumber > MyNum[i]) {
            lowestNumber = MyNum[i];
        }
    }

    printf("And the lowest Number is: %d\n", lowestNumber);

    return 0;
}
