1. 3 Becuase, when the for loop stop, i=prices.length(), which is 3.
2. 150, because the last element in list is 300. 300*0.5=150.
3. 150, because final price is the rounded discounted price.
4. [50,100,150]. Because we assign the input list to variable discounted, in the for loop, the function updeate the discounted value of each element to the list.
5. error.Because let declare variable in block scope, so we cannot access i
outside the forloop.
6. error.Because let declare variable in block scope, so we cannot access discountedPrice outside the forloop.
7. 150, because we can access the vairable in the same scope as it decalared.
8. [50,100,150]. Since we use let declared discountedoutside the for loop inside the function, so we can still be accessed it in the function scope.
9.  error.Because let declare variable in block scope, so we cannot access i
outside the forloop.
10. 3, becuase the first time assigned value to const variable length is 3.
11. [50,100,150]. Even though it is const variable, call push function is allowed.
12. 1. student.name
    2. student["Grade Year"]
    3.  student.greeting()
    4.  student["Favorite Teacher"].name
    5.  student.courseLoad[0]
13. 
    1. '32', since string+2 will turn 2 into '2'
    2. 1, since string-number will turn '3' to 3
    3. 3, since turn null into 0
    4. '3null', turn null into"null"
    5. 4, turn true into 1 so 3+1=4
    6. 0, because false and null both turn to 0
    7. '3undefined', since turn undefined to string'undefined'
    8. NaN, because of operator '3' turn to 3 and undefined turn to NaN. 3-Nan=NaN.
14. 
    1.  True, '2'to 2
    2.  False, because when compares stirng, it come to  first letter of each string first. '2' is greater than '1' so '12'<'2'
    3.  true, '2' to 2; 2=2
    4.  False, because === also compare type, the type is different.
    5.  false, because true turn to 1
    6.  true, because Boolean(2) means check if 2 is not 0, Boolean(2) returns true
15. == compares without considering type differece and compare with type conversion, but === check the type and compare without type conversion
16. ...
17. [2, 4, 6], in the for loop, this function callback the dosomething function on each element and the push it in newArr. In dosomething function, it double each parameter. Thus,[2, 4, 6].
18. 1 4 3 2