print("Hello World")
print(10)

name = "Steven"
age = 20
height = 1.75
is_student = True

name = input("Enter your name: ")
age = int(input("Enter your age: "))
print("Hello", name)
print("Age is:", age)

# operators in python
a + b    # Addition
a - b    # Subtraction
a * b    # Multiplication
a / b    # Division
a // b   # Floor division
a % b    # Remainder
a ** b   # Power

if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teenager")
else:
    print("Child")

    age = 20

if age >= 18 and age <= 25:
    print("Young adult")