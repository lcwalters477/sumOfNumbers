// function getSum( a, b ){
//     if(a < b){
//         let times = (b - a) + 1;
//         let totArr = [];
//             for(let i = 0; i < times; i ++){//push all the numbers into an array
//                 totArr.push(a + i); 
//                 console.log(totArr);
//                 //Now, add all of the numbers in the array 
//                 var sum = totArr.reduce((accumulator, value) => {
//                 return accumulator + value;
//                 }, 0);
//             }//end for loop
// console.log(sum);
//     } else if(a > b){
//         let times = (a - b) + 1;
//         let totArr = [];
//             for(let i = 0; i < times; i ++){//push all the numbers into an array
//                 totArr.push(b + i); 
//                 console.log(totArr);
//                 //Now, add all of the numbers in the array 
//                 var sum = totArr.reduce((accumulator, value) => {
//                 return accumulator + value;
//                 }, 0);
//             }//end for loop
// console.log(sum);

//     } else {
//     console.log(a);
//     }//end if else
// }//end function

// getSum(0, -1);

//------------------------------------------------------------------------------------------------------------

// function findShort(s){
//     let arr = s.split(" ");
//     let shortest = (arr.reduce(function(a, b) {
//         return a.length <= b.length ? a : b;
//       })); 
//       console.log(shortest.length);
//     }




// findShort("Hello to you wonderful person blueeeee!");
  
function disemvowel(str) {
//     var strArr = str.split(" ");
//     for(let i = 0; i < strArr.length; i ++){
//         if(strArr[i] == "A" || strArr[i] =="a" || strArr[i] =="E" || strArr[i] =="e" || strArr[i] =="I" || strArr[i] =="i" || strArr[i] =="U" || strArr[i] =="u"){
//             StrArr[i] = " "; 

//             strArr.replace(/[aeiou]/gi, '');
//         }
    

// console.log(strArr);

const disemvoweled= str.replace(/[aeiou]/gi, '');

console.log(disemvoweled); // 
}


disemvowel("Please do not touch my precious hat.");