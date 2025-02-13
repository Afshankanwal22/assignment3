//                                                
//                                                   CHAPTER 9 to 11


// Qno:1 Write a program to take “city” name as input from user. If  user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

// let cityName = prompt("Enter Your City Name");
// if (cityName=="karachi"){

//         document.write("Welcome to the city of lights!")

// }
// else{
    
//         document.write("Welcome to" + " city")
// }
// Qno:2 . Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.
// let gender1 = prompt("Enter Your Gender ")
// let gender2 = prompt("Enter Your Gender ")
// if(gender1=="male"){
//     document.write("Good Morning Sir."+"<br />")
// }
// if(gender2=="female"){
//     document.write("Good Morning Ma’am.")
// }
// else{
//     document.write("Good Morning!")
// }
// Qno:3 Write a program to take input color of road traffic signal  from the user & show the message according to this table:
// let signalColor1 = prompt("Enter the color of the traffic signal")
// let signalColor2 = prompt("Enter the color of the traffic signal")
// let signalColor3 = prompt("Enter the color of the traffic signal")
// if(signalColor1=="red")
// if(signalColor2=="yellow")
// if(signalColor3=="green"){

//     document.write("<table>")
//     document.write("<tr>")
//     document.write("<th>Signal color</th>")
//     document.write("<th>Message</th>")
//     document.write("</tr>")

//     document.write("<tr>")
//     document.write("<td>Red</td>")
//     document.write("<td>Must Stop</td>")
//     document.write("</tr>")

//     document.write("<tr>")
//     document.write("<td>Yellow</td>")
//     document.write("<td>Ready to move</td>")
//     document.write("</tr>")

//     document.write("<tr>")
//     document.write("<td>Green</td>")
//     document.write("<td>Move Now</td>")
//     document.write("</tr>")
//     document.write("</table>")
// }

// Qno:4 Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,show the message?
//  “Please refill the fuel in your car”
// let fuelInCar = +prompt("Enter the  Your remaining  fuel in the car")
// if(fuelInCar<=0.25){
//     document.write("“Please refill the fuel in your car”")
// }
// else{
//     document.write("You have enough fuel for now")
// }

// Qno:5 Run this script, & check whether alert message would be displayed or not. Record the outputs.

// let a = 4;

// if(++a===5){
//     console.log(a)
//     alert("given condition for variable a is true")
// }

// let b =82;
// if(b++===83){
//     console.log(b)
//     alert("given condition for variable a is true")
// }
// let c = 12
// if(c++===13){
//     console.log(c)
//     alert("condition 1 is false")
// }
// if(c===13){
//     console.log(c)
//     alert("condition 2 is true")
// }
// if(++c <=14){
//     console.log(c)
//     alert("condition 3 is false")
// }
// if(c===14){
//     console.log(c)
//     alert("condition 4 is true")
// }

//  let materialCost = 20000;
//  let laborCost = 2000;
//  let totalCost= materialCost + laborCost
//  console.log(totalCost)
//  if(totalCost===materialCost+laborCost){
//     alert("The cost equal")
//  }
    //  if (true){
    // alert("True");
    // }
    // if (false){
    // alert("False");
    // }
// let car= "r"
// console.log(car.charCodeAt(0))
// let cat= "t"
// console.log(cat.charCodeAt(0))
// if(car<=cat){
//     alert("car is a smaller than cat")
// }

// Qno:6Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute
// grade as per following table?
 
// let sub1=+prompt("ENTER YOUR SUBJECT NUMBER")
// let sub2=+prompt("ENTER YOUR SUBJECT NUMBER")
// let sub3=+prompt("ENTER YOUR SUBJECT NUMBER")
// let obtainedMarks = sub1+sub2+sub3
// console.log(obtainedMarks);
 
// let totalMarks = 300
// let percentage=obtainedMarks/totalMarks*100
// console.log(percentage);
// let grade;
// let remarkes;

// if(percentage>=80){
//     remarkes="EXCELLENT"
//     grade="A ONE"
// }
// else if(percentage>=70){
//     remarkes="GOOD"
//     grade="A"

// }
// else if(percentage>=60){
//     remarkes="YOU NEED TO IMPROVE"
//     grade="B"
// }
// else{
//     remarkes="SORRY"
//     grade="FAIL"
// }
// document.write("<h1>MARKS SHEET</h1>")
// document.write("Total Marks: "+totalMarks+"<br />")
// document.write("Obtained Marks: "+obtainedMarks+"<br />")
// document.write("Percentage: "+percentage+"<br />")
// document.write("Grade: "+grade+"<br />")
// document.write("Remarks: "+remarkes+"<br />")

// Qno:7Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// let guessedNumber = prompt("Enter the guess the secret number.(ranging from 1 to 10)")
// let secretNumber =7
// if(guessedNumber==secretNumber){
//     alert("Bingo! Correct  answer")
// }

// else if(guessedNumber+1==secretNumber){
//     alert("“Close enough to the correct answer”.")

// }
// else{
//     alert("Try again next time.")
// }


// Qno:8Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.
// let number = +prompt("Enter Your Number")
// if(number%3==0){
//     alert("Number is divisible by 3.")
// }
// else{
//     alert("Number is not divisible by 3")
// }
// Qno:9 Write a program that checks whether the given input is an even number or an odd number.
// let number= +prompt("Enter Your Number (Even and Odd)")
// if(number % 2==0){
//         alert("This number is a even number")

// }
// else{
//     alert("This is odd number")
// }
// Qno:10 Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// let temperature=+prompt("Enter the temperature in °C")
// if(temperature>=40){
//     alert("“It is too hot outside.”")
// }
// // b. T > 30 then “The Weather today is Normal.”
// else if(temperature>=30){
//     alert("“The Weather today is Normal.”")
// }
// // c. T > 20 then “Today’s Weather is cool.”
// else if(temperature>=20){
//     alert("“Today’s Weather is cool.”")
// }
// // T > 10 then “OMG! Today’s weather is so Cool.”
// else if(temperature>=10){
//     alert("“OMG! Today’s weather is so Cool.”")
// }
// else{
//     alert("It's freezing! Stay warm.")
// }
// Qno:11 Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
// let num1=prompt("Enter the first number")
// let num2 = prompt("Enter the second number")
// let Operation=prompt("Enter an operation (+,-,*, / & %)")
// let result;
// if(Operation== "+"){
//     result =num1,num2
//     console.log(result);
    
//     document.write("Result "+"="+result)
// }
// else if(Operation=="-"){
//     result=num1-num2
//     document.write("Result "+" ="+result)
// }
// else if(Operation=="*"){
//     result=num1*num2
//     document.write("Result "+" ="+result)
// }
// else if(Operation=="/"){
//     result=num1/num2
//     document.write("Result "+"= "+result)
// }
// else if(Operation=="%"){
//     result=num1%num2
//     document.write("Result "+"= "+result)
// }
// else{
//     document.write("Invalid operation! Please enter +, -, *, /, or %")
// }


//                                                       CHAPTER 12 TO 13

// Qno:1 Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// let character=prompt("Please enter your character to checks whether the given input is a number, uppercase letter or lower case letter")
// let value = character.charCodeAt(0);

// checking of a number
// if(value >= 48 && value<=57){
//     alert(character+" is number")
// }
// checking uppercase
// else if(value>=65 && value<=90){
//     alert(character+" is uppercase number")
// }
// else if(value>=97 && value<=122){
//     alert(character+" is lower case number")
// }
// else{
//     alert("please enter the number or letter")
// }

//Qno:2 Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal. 
// let num1=+prompt("Enter your number")
// let num2=+prompt("Enter your number ")
// if(num1>num2){
//     document.write("The larger number is: "+num1)
// }
// else if(num2>num1){
//     document.write("The larger number is: "+num2)
// }
// else{
//     document.write("Both numbers are equal")
// }
// Qno:3 Write a program that takes input a number from user & state whether the number is positive, negative or zero.
// let inputNumber =prompt("Enter Your first Number ")
// let inputNumber1=prompt("Enter Your second Number ")
// if(inputNumber>inputNumber1){
//     console.log(inputNumber);
    
//     document.write("The number is positive")
// }
// else if(inputNumber<inputNumber1){
//     document.write("The number is negative")
// }
// else{
//     document.write("The number is zero")
// }
// Qno:4 Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
// let character=prompt("Enter character to check vowel or not")
// if(character==="a"||character==="A"||character==="e"||charcter==="E"||character==="i"||character==="I"||character==="o"||character==="O"||character==="u"||character==="U" ){
//     alert(character+" vowel")
// }
// else{
//     document.write("Invalid input! Please enter a single character.")
// }
// Qno:5 Write a program that
// a. Store correct password in a JS variable.

// const correctPassword="mysecret123"

// b. Asks user to enter his/her password

// let userPassword = prompt("Enter Your Password")

// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”

// if(userPassword){
    // alert("Please enter your password")
// }

// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// if(userPassword===correctPassword){
    // alert("“Correct! The password you entered matches the original password”")
// }
// else{
    // alert("“Incorrect password”")
// }
// Qno:6. This if/else statement does not work. Try to fix it:

// let number=prompt("Enter your number")
// let hour = 13;
// let greeting;
// if(hour<number){
//      greeting="GOOD DAY"
//      alert(greeting)
// }
// else{
//     greeting="GOOD EVENING"
//     alert(greeting)
// }


// Qno:7 Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements?
// let time =+prompt("Enter time in 24-hour \n clock format like: 1900 = 7pm.")
// if(time<1200){
//     document.write("GOOD MORNING")
// }
// else if(time<1700){
//     document.write("GOOD AFTERNOON")
// }
// else if(time<2100){
//     document.write("GOOD EVENING")
// }
// else if(time<2400){
//     document.write("GOOD NIGHT")
// }
// else{
// document.write("Invalid time format. Please enter a valid 24-hour time")
// }

//                                                         CHAPTER 14 TO 15


// Qno:1 Declare an empty array using JS literal notation to store student names in future.
// let studentName =[ '${} and ${}'];

// Qno:2 Declare an empty array using JS object notation to store student names in future.
// let studentName1 =  [];

// Qno:3  Declare and initialize a strings array.
// let countryName;
// countryName = ["pakistan","united kingdom","united arab emirates"];
// console.log("<b>Strings array</b>: "+countryName);

// Qno:4 Declare and initialize a numbers array.
// let studentsAge;
// studentsAge = [20,21,22];
// console.log("<b>Numbers array </b>: "+studentsAge);

// Qno:5 Declare and initialize a boolean array.
// let arr_bool;
// arr_bool=[true,false,true,false]
// document.write("<b>Boolean array </b>"+arr_bool+"<br />"+"<br />") 

// Qno:6 Declare and initialize a mixed array.
// let mixed_arr;
// mixed_arr =["afshan",123,true];
// console.log("<b>Mixed array</b>"mixed_arr);

// Qno:7 Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,BS, BCOM, MS, M. Phil., PhD). Show the listed
    // qualifications in your browser like:
// let qualifications;
// qualifications=["SSC","HSC","BCS","BS","BCOM","MS","M. Phil","PhD"]
// console.log(qualifications);

// document.write("<h1>Qualification</h1>")
// document.write("1)"+qualifications[0]+"<br />"+"2)"+ qualifications[1]+"<br />" +"3)"+ qualifications[2]+"<br />"+"4)"+qualifications[3]+"<br />"+"5)"+qualifications[4]+"<br />"+"6)"+qualifications[4]+"<br />"+"7)"+qualifications[5]+"<br />"+"8)"+qualifications[6]+"<br />"+"9)"+qualifications[7]+"<br />")

// Qno:8 Write a program to store 3 student names in an array.Take another array to store score of these three students.Assume that total marks are 500 for each student, display the scores & percentages of students like:
// let studentName =["Michael","John","Tony"]
// let studentScore =[320,230,480]
// let totalMarks = 500;
// for(let i=0;i<studentName.length;i++){
//     let percentage=studentScore[i]/totalMarks*100;
//     console.log(percentage)
//     console.log(`Score of ${studentName[i]} is ${studentScore[i]}. Percentage ${percentage.toFixed(2)}%`);
// }

// Qno:9 Initialize an array with color names. Display the array elements in your browser.
// let colorName =["pink","white","black","blue","yellow"]
// console.log(colorName);
// document.write(colorName +"<br />" +"<br />");

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// let addColor=prompt("What color is want to add to the beginning")
// colorName.unshift(addColor);
// console.log(colorName);
// document.write("Update array: "+colorName +"<br />"+"<br />")

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// let endColor =prompt("What color is want to add to the end")
// colorName.push(endColor)
// console.log(colorName);
// document.write("Update array: "+colorName +"<br />"+"<br />");

// c. Add two more color to the beginning of the array.Display the updated array in your browser.
// let color1=prompt("Add first color to the begining of the array ");
// let color2=prompt("Add second color to the begining of the array");
// colorName.unshift(color1,color2)
// console.log(colorName);
// document.write("Update array: "+colorName+"<br />"+"<br />")

// d. Delete the first color in the array. Display the updated array in your browser.
// colorName.shift()
// console.log(colorName);
// document.write("Update array: "+colorName+"<br />"+"<br />");

// e. Delete the last color in the array. Display the updated array in your browser.
// colorName.pop()
// console.log(colorName);
// document.write("Update array: "+colorName+"<br />"+"<br />");

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
// let indexToAdd=+prompt("At which index no you want to add color?");
// let indexColor=prompt("At which color")
// colorName.splice(indexToAdd,0,indexColor)
// document.write("Update array: "+colorName+"<br />"+"<br />")

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// let indexToDel=+prompt("At which index no you want to delete color");
// let ColorDel=+prompt("At which color");
// colorName.splice(indexToDel,ColorDel,0);
// console.log(colorName)
// document.write("Update: "+colorName)

// Qno:10 Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
// let scoreOfStudent= [320,230,480,120]
// document.write("Score of student : "+scoreOfStudent+"<br />")
// document.write("Ordered score of student : "+scoreOfStudent.sort());
// Qno:11 Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// let citiesName=["lohare","karachi","islamabad","quetta","peshawar"]
//  let selectedCities=citiesName.slice(2,4)
// console.log(selectedCities);
// document.write("<b>Cities list:</b> "+citiesName+"<br />")
// document.write("<b>Selected cities list:</b> "+selectedCities+"<br />")

// Qno:12 Write a program to create a single string from the below mentioned array: 
 // var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
// let arr = ["This "," is"," my"," cat"];
// let string= arr.join("");
// console.log(string);
// document.write("<b>Array: </b>"+"<br />"+arr +"<br />")
// document.write("<b>Strings: </b>"+"<br />"+string)
// Qno:13 Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored.
//  (FIFO-First In First Out)
// let newArr=["keyboard", "mouse", "printer", "monitor"];
// document.write("<b>Devices :</b> "+newArr+"<br />")
// for(let i=0;i<newArr.length;i++){
//     document.write(`Out: <br />${newArr[i]} <br />`)
// }


/*Qno:14 Create a new array. Store values one by one in such a way that you can access the values in reverse order.
 (Last In-First Out)*/
//  let newArr=["keyboard", "mouse", "printer", "monitor"];
//  document.write("<b>Devices :</b> "+newArr+"<br />")
//  for(let i=newArr.length-1;i>=0;i--){
//     document.write(`Out: <br />${newArr[i]} <br />`)
//  }

// Qno:15 Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:


// let mobileMenu=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// let index=0
// document.write("<select>")
// document.write("<option>"+mobileMenu[index++]+"</option>")
// document.write("<option>"+mobileMenu[index++]+"</option>")
// document.write("<option>"+mobileMenu[index++]+"</option>")
// document.write("<option>"+mobileMenu[index++]+"</option>")
// document.write("<option>"+mobileMenu[index++]+"</option>")
// document.write("<option>"+mobileMenu[index++]+"</option>")

// document.write("<select>")











