// array methods 

// let arr = ['a','b','c','d','e','f']

// arr.reverse();
// console.log(arr);

// arr.sort();
// console.log(arr);
// console.log(arr.length);

// slice 
// let arr = ['a','b','c','d','e','f']
// console.log(arr.slice(2,5))
// console.log(arr);

// splice(Idx,count)
// let arr = ['a','b','c','d','e','f','g']

// let result = arr.splice(2,5)
// console.log(result);
// console.log(arr);

// delete at any index
// let arr = ['a','b','c','d','e','f','g']
// let result = arr.splice(3,1)
// console.log(result);
// console.log(arr);

// insert using splice 

// let arr = ['a','b','c','d']

// let result = arr.splice(2,0,'z','y')
// console.log(result);
// console.log(arr);

// console.log(arr.includes('C'))
// console.log(arr.indexOf('z'))


// split and join

// split 
// let url="c/user/jitendra/songs/brown rang.mp3"

// let res=url.split("/")
// console.log(res);
// console.log(res[res.length-1]);

// let names = "vikas->jatin->himanshu->jai"
// let res=names.split("->")
// console.log(res);

// let names = ["jaipur","delhi","bengaluru","kochi"]
// let res=names.join("::")
// console.log(res);

// function square(num)
// {
//     return num*num;
// }

// function iseven(num)
// {
//     if(num%2==0) return true;
//     else return false;
// }
// console.log(square(2));
// console.log(square(5));
// console.log(iseven(4));
// console.log(iseven(5));




// map and filter
// function square(num)
// {
//     return num*num;
// }
// function iseven(num)
// {
//     if(num%2==0) return true;
//     else return false;
// }
// let arr=[1,2,3,4,5,6];

// let arr2=[];
// for(let i =0;i<arr.length;i++)
// arr2.push(square(arr[i]));

// let arr2=arr.map(square);

// console.log(arr2);

// let arr3=arr.map(Math.sqrt)
// console.log(arr3);

function iseven(num)
{
    if(num%2==0) return true;
    else return false;
}
function isbig3(num)
{
   if(num>3) return true;
   else return false;
}
let arr=[1,2,3,4,5,6];

let res = arr.filter(iseven);
console.log(res);

let res2 = arr.filter(isbig3)
console.log(res2);

// map iseven, filter square 
let arrr = [0,1,2,3,4];