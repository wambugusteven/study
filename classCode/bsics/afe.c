#include <stdio.h>
 int main ()
 {
   int Aage = 18;
    int age;
    int count;

    printf("Enter your age: ");
    scanf("%d", &age); 
    printf("Enter count: \n");
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
  
  return 0;
   }