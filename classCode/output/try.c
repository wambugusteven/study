#include <stdio.h>
#include <stdbool.h>

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
 int myAge = 25;
int votingAge = 18;
 short int small = -100;                    
unsigned int count = 25;                    
long int Big = 1234567890;                  
long long int veryBig = 9223372036854775807; 
unsigned long long int huge = 18446744073709551615U; 
long double precise = 3.141592653589793238L; 
double normalDouble = 3.14; 
int normalInt = 1000; 
 int myage = 20;
  int requiredAge = 18;
  int time = 22;

 
 printf("This is my age: %d\n Average number: %.2f\n", num, dec);
 printf("%c\n", big);
 sum = num + dec;
 printf("the sum  is: %d\n", sum);
 printf("Student id: %d\n Student fee: %.3f\n Student grade: %c\n", studentID,  studentFee, studentGrade);
 printf("My name: %s\n", name);
 printf("you know: %.3f\n", div);
 printf("my gae is: %d\n", myAge >= votingAge);
                       
printf("Normal int: %d\n", normalInt);
printf("Normal double: %lf\n", normalDouble);
printf("Small: %hd\n", small);
printf("Count: %u\n", count);
printf("Big: %ld\n", Big);
printf("Very Big: %lld\n", veryBig);
printf("Huge: %llu\n", huge);
printf("Precise: %Lf\n", precise);

if(myage >= requiredAge) {
   printf("Ready to vote!\n");
} else {
 printf("Not old enough?!\n");
 }

(myage <= requiredAge) ? printf("Ready to vote!\n") : printf("Not old enough?!\n");

if (time < 10) {
  printf("Good morning.");
} else if (time < 20) {
  printf("Good day.");
} else {
  printf("Good evening.");
}

  return 0;
 }

