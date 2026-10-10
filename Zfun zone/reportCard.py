name = 'Denver'
print(name, type(name))
print("'in' operator:", 'den' in name)
print("Characters:", len(name))
print("Indexing: ", name[4])

is_student = True
print(is_student, type(is_student))

age = 20
print(age, type(age))

score = 80.5
print(score, isinstance(score, (int, float)), type(score))

details = name + ' ' + str(age) + ' ' + str(score)
print(details)

string = f"'''My name is {name}'''"
msg = 'it\'s a sunny day'
print(string, msg)

password = "Hey You fool"
print(password[0:7])
print(password[::])
print(password[:: -1])
print(password[:: 2])

password2 = password.lower()
password3 = password.upper()
password4 = password.strip()
print(password2)
print(password3)
print(password4)
