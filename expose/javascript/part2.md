# **Answers to PART 2**

***

**1.** ``` 3 ``` is printed because the ``` prices ``` list inputted has a length of 3 and the loop runs until ``` (prices.length) ``` .

**2.**  ``` 150 ``` is printed at _line 13_. The value of ``` discountedPrice ``` changes every time the loop is run. The loop here is run uptill the 2nd index of the list. The second index of the list inputted has the value 300. Therefore, by calculation ``` discountedPrice ``` stores the value 150. 

**3.** ``` 150 ``` is printed at _line 14_. The value of ``` finalPrice ``` changes every time the loop is run. The loop here is run uptill the 2nd index of the list. The second index of the list inputted has the value 300. Therefore, by calculation ``` finalPrice ``` stores the value 150. 

**4.** This function will return ``` [50, 100, 300] ``` because the item prices are halved and then pushed into the array. 

**5.** At _line 12_, an ``` ReferenceError: i is not defined ``` is returned because ``` i``` has a ``` let ``` declaration, which has a block scope and cannot be accessed at line 12. 

**6.** At _line 13_, an ``` ReferenceError: discountedPrice is not defined ``` is returned because ``` discountedPrice``` has a ``` let ``` declaration, which has a block scope and cannot be accessed at line 13. 

**7.** ``` 150 ``` is returned at _line 14_  because ``` finalPrice``` has a ``` let ``` declaration, which has the same block scope as the statement in line 14. 

**8.** This function will return ``` [50, 100, 300] ``` because the item prices are halved and then pushed into the array. 

**9.** At _line 11_, an ``` ReferenceError: i is not defined ``` is returned because ``` i``` has a ``` let ``` declaration, which has a block scope and cannot be accessed at line 11. 

**10.** ``` 3 ``` is printed at _line 12_ because ``` length ``` is within the scope of the ``` const ``` declaration. ``` length ``` holds the length of the list. 

**11.** This function will return ``` [50, 100, 300] ``` because the item prices are halved and then pushed into the array. 

**12.**
    
    A. ``` student.name ``` 
    B. ``` student["Grad Year"] ```
    C. ``` student.greeting(); ```
    D. ``` student["Favorite Teacher"].name ```
    E. ``` student.courseLoad[0] ``` 

**13.** 

        A. The output will be `` `'32' ``` because 2 will be converted to a string and then concatenated with 3 

        B. The output will be ``` 1 ``` because of the subtraction operation 3 will be changed to an integer and will be subtracted by 2

        C. The output will be ``` 3 ``` because of the addition operation ``` null ``` will be changed to a 0 and added to 3 which is a integer 

        D. The output will be ``` 3null``` because of the addition operation ``` null ``` will be concatenated with 3 which is a string

        E. The output will be ``` 4 ``` because ``` true ``` is converted to 1 

        F. The output will be ``` 0 ``` because both ``` false ``` and ``` null ``` will be added after gettiing converted to 0 

        G. The output will be ``` '3undefined' ``` because of the addition operation ``` undefined ``` will be concatenated with 3 which is a string

        H. The output will be ``` NaN ``` because ``` undefined ``` is NaN and 3 is converted to a integer

**14.** 

    A. The output is ``` true ``` because 2 gets converted a integer 

    B. The output is ``` false ``` because it is string comparision and 1 comes before 2 

    C. The output is ``` true ``` because the string 2 gets converted to an integer and then it is compared 

    D. The output is ``` false ```  because it compares strict equality and both the values have different types, one is a integer and the other is a string. 

    E. The output is ``` false ``` because ``` true ``` is changed to its default value of ``` 1 ``` 

    F. The output is ``` true ``` because the second part gets conerted to ``` true ``` and then is compared 

**15.** ``` == ``` compares the two values after converting the data types and ``` === ``` compares the two values before type conversion and checks for strict identity. 

**16.** _In the code file_ 

**17.** The result is ``` [2,4,6] ``` because each element in the inputted array in ``` modifiedArray ``` will be passed on to the ``` callback ``` function. Here, ``` doSomething ``` behaves as a callback function. In the function passed on to the all the elements get doubled and this is pushed to the new array which is then returned. 

**18.** _In the code file_ 

**19.** 
```
1
4
3
2
```