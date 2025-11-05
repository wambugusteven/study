#include <stdio.h>
 int main ()
 {
   int Aage = 18;
    int age;
    int count;
    int myNumber[7];
    int length = sizeof(myNumber) / sizeof(myNumber[0]);
    int MyNum[] = {10, 20, 30, 40, 50, 60, 90, 100};
    int i;
    int LENGTH = sizeof(MyNum) / sizeof(MyNum[0]);

    printf("Enter your age: ");
    scanf("%d", &age); 
    printf("Enter count: ");
    scanf("%d", &count);

    if (age >= Aage) {
        printf("Old enough to vote!\n");
    } else {
        printf("Still have a long way to go.\n");
    }
  
  while (count <= 6) {
    if(count <6) {
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
  }
  
  myNumber[0] = 2;
  myNumber[1] = 3;
  myNumber[2] = -4;
  myNumber[3] = 5;
  myNumber[4] = 6;
  myNumber[5] = 0;
  myNumber[6] = 9;

  for (int j = 0; j < length; j++) {
    if(myNumber[j] < length) {
      continue;
    }
    if(myNumber[j] == 0) {
      break;
    }
    printf("%d\n", myNumber[j]);
  }

  for (i = 0; i < LENGTH; i++) {
    printf("%d\n", MyNum[i]);
  }
  
  return 0;
   }