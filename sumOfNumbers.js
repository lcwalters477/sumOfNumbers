function getSum( a, b ){
    if(a < b){
        let times = (b - a) + 1;
        let totArr = [];
            for(let i = 0; i < times; i ++){//push all the numbers into an array
                totArr.push(a + i); 
                console.log(totArr);
                //Now, add all of the numbers in the array 
                var sum = totArr.reduce((accumulator, value) => {
                return accumulator + value;
                }, 0);
            }//end for loop
console.log(sum);
    } else if(a > b){
        let times = (a - b) + 1;
        let totArr = [];
            for(let i = 0; i < times; i ++){//push all the numbers into an array
                totArr.push(b + i); 
                console.log(totArr);
                //Now, add all of the numbers in the array 
                var sum = totArr.reduce((accumulator, value) => {
                return accumulator + value;
                }, 0);
            }//end for loop
console.log(sum);

    } else {
    console.log(a);
    }//end if else
}//end function

getSum(0, -1);

//------------------------------------------------------------------------------------------------------------

