#include <stdio.h>

 int main () 
 {
  int num = 18, sum;
  float dec = 4.98;
  char big = 'S';
  int studentID = 15;
  float studentFee = 75.25;
char studentGrade = 'B';
 char name[] = "Steven";
 float div = (float) studentFee / dec;
 
 printf("This is my age: %d\n Average number: %.2f\n", num, dec);
 printf("%c\n", big);
 sum = num + dec;
 printf("the sum  is: %d\n", sum);
 printf("Student id: %d\n Student fee: %.3f\n Student grade: %c\n", studentID,  studentFee, studentGrade);
 printf("My name: %s\n", name);
 printf("%.3f\n", div);

  return 0;
 }

