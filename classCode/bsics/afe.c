#include <stdio.h>
 int main ()
 {
    int ar[5];
     int count = 1;
     int j = 0;


  for(int i = 0; i <= 4; i++) 
  {
    printf("Enter element\n",i+1);
    scanf("%d", &ar[i]);
  }
  printf("element is given below\n");
  for(int j = 0; j <=4; j++);
  {
  printf("%d", ar[j]);
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

     
