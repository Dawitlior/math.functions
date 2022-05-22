// function printTheRandomNumber0(){
// var rndNum = Math.floor(Math.random()*10);
// console.log(rndNum)

// }
// printTheRandomNumber0()




// function printTheRandomNumber1(){
// var rndNumber = Math.floor(math.random()*10)
// }
// printTheRandomNumber1();




// צרו פונקציה שמקבלת מספר כארגומנט ומחזירה מספר רנדומלי
// function printTheRandomNumber2(number){
// number = Math.floor(math.random()*number)
// }
// printTheRandomNumber2(5);





// צרו פונקציה שנאכלת מערך של 10 איברים במספרים רנדומליים בין 0-100

// function popRandomArray(){
// var rndArray = [];
// for(var i = 0 ;i<10 ;i++){
//     rndArray.push(Math.floor(Math.random()*101) )
// }
// console.log(rndArray)
// }
// popRandomArray();


// צור פונקציה המקבלת מספר מהמשתמש ומייצרת מספר רנדומלי בין 0-10 
// אם המספר זהה מדפיסה הודעת הצלחה אחרת הודעת כישלון

// function getRandomNumFromUser() {
//   var numUser=+prompt("enter random num")
//   var make=Math.floor(Math.random()*10);
//   console.log(make)
//   if(numUser==make){
//     console.log("success")
//   }
//   else{
//     console.log("fail")
//   }
// }
// getRandomNumFromUser()



// צור פונקציה המקבלת מהמשתמש מספר ומייצרת מספר רנדומלי
// בין 0 ל10 והפונקציה מחזירה את הגדול מבניהם
// function printTheBiggestNumber(){
// var userNumber = +prompt("type a random number");
// var tempRnd = Math.floor(Math.random(Math.max)*10);
// return userNumber,tempRnd
// }
// printTheBiggestNumber();


// צרו פונקציה המקבלת מהמשתמש 5 מספרים ומדפיסה את הנמוך מבניהם
// NOT FINISH
// function printTheLowNumber(){
// var userNumber = +prompt("type a number");
// var tempArray = [];
//     for(var i = 0 ; i<5 ; i++){
//        tempArray = prompt(Math.min(userNumber));
//     }
    
// }

// printTheLowNumber();

// צרו פונקציה המקבלת מהמשתמש מספר ומייצרת מספר רנדומלי בין 0 ל100
// אם המספר זוגי היא מחזירה את המספר הנמוך מבניהם אחרת את המספר הגבוה
// NOT FINISH
// function printTheMinNumberWithModolo(){
// var userNumber = +prompt("type a number")
// var rnd = [Math.random(Math.floor()*100)]
// if(userNumber%2==0){
//     Math.min()
// }
// else{
// Math.max()
// }
// }
// printTheMinNumberWithModolo();

// צרו פונקציה שמייצרת מערך עם גודל רנדומלי בין 0 ל364 וערכים רנדומליים
// בין 0ל 873
// function makeRundomNubmers(){
//     var tempArray = []
//     for(var i = 0 ; i<Math.floor(Math.random()*365);i++){
//         var rand = Math.floor(Math.random()*874)
//         tempArray.push(rand)
//     }
// return tempArray ; 

// }
// console.log(makeRundomNubmers());




// צרו פונקציה המקלת מערך ומייצרת אינדקס רנדומלי 
// הפונקציה מדפיסה איבר מהמערך על פי האינדקס הרנדומלי
// function getTheRandomNumber(array){
//     var index = Math.floor(Math.random()*array.length)
//     console.log(array[index])

// }
// getTheRandomNumber([4,3,6,5,4,6,7,8,9,7,5,43]);



// צרו פונקציה המקבלת מהמשתמש שם מייצרת אינדקס רנדומלי
// ומחליפה תו בשם לאות גדולה על פי האינדקס הרנדומלי

function getIndexFromUser(){
var user = prompt("type your number")
var userIndex = Math.floor(Math.random()*user.length)
userIndex.toUpperCase([i])

}
getIndexFromUser();


// צרו פונקציה המקבלת מהמשתמש 2 שמות ו2 גילאים מייצרת מספר רנדומלי
// אם השמות מתחילים באותה אות היא מדפיסה את המספר הרנדומלי
// אם השמות מתחילים באותה אות היא מדפיסה הודעה עם האות
// אחרת היא מדפיסה את הגילים







