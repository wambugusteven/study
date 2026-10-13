first_name = 'Fredrick'
last_name = 'Maina'
school = 'school of computing and information'
course = 'Computer science'
course_code = 'BCS'
student_age = 28
address = '20320 Nchiru'
address += ', Apartment 4B'
student_info = first_name + ' is ' + str(student_age) + ' of age.'
expirience_age = 3
expirience_info = last_name + ' has ' + str(expirience_age) + " years of expirience"
student_card = f' student: {first_name + " " + last_name}'


print(first_name, last_name)
print(school)
print(course + ", " + course_code)
print(first_name + "'s age:", student_age)
print(address)
print(student_info)
print(expirience_info)
print(student_card)