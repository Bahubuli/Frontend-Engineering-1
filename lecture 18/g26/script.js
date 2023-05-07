// let arr=['a','b','c','d','e','f'];

// console.log(arr.length)
// reverse
// arr.reverse();
// console.log(arr);

// arr.reverse();
// indexOf inlcudes
// console.log(arr.indexOf('d'))
// console.log(arr.indexOf('z'))

// console.log(arr.includes('d'))
// console.log(arr.includes('z'))

// arr.unshift('z');
// console.log(arr);

// arr.sort();
// console.log(arr);

//  let arr=['a','b','c','d','e','f'];
// slice and splice 

// slice 
// let res = arr.slice(3,5)
// console.log(res);
// console.log(arr);

// splice(startIdx,count);
// let arr=['a','b','c','d','e','f'];

// let res = arr.splice(2,3)
// console.log(res);
// console.log(arr);

//delete using splice 
// let arr=['a','b','c','d','e','f'];

// let res = arr.splice(2,1)
// console.log(res);
// console.log(arr);

// insert using splice 
// let arr=['a','b','c','d','e','f'];
// let res = arr.splice(2,0,'z')
// let res2 =arr.splice(2,0,'k','l','m')
// console.log(res);
// console.log(arr);


// split and join

// const url="c/user/jitendra/songs/brown rang.mp3"

// let res = url.split("/")
// console.log(res);
// console.log(res[res.length-1])

// let names = "rajesh::kunal::kamal::jai"

// let res2 = names.split("::")
// console.log(res2);

// let trip = "delhi-->chandigarh-->goa-->bengaluru"

// let res3 = trip.split("-->")
// console.log(res3);

// join
// let arr =["delhi","chandigarh","goa","bengaluru"];
// let res = arr.join("-->");

// console.log(res);

// function square(num)
// {
//     return num*num;
// }

// function iseven(num)
// {
//    if(num%2==0) return true;
//    else return false;
// }

// console.log(square(3));
// console.log(square(5));

// console.log(iseven(3));
// console.log(iseven(4));



// function square(num)
// {
//     return num*num;
// }

// let arr = [1,2,3,4,5,6];

// let res=[];
// for(let i=0;i<arr.length;i++)
// res.push(square(arr[i]));

// let res=arr.map(square);

// Math.sqrt(5);
// let res2 = arr.map(Math.sqrt)

// console.log(res);
// console.log(res2);

// function iseven(num)
// {
//    if(num%2==0) return true;
//    else return false;
// }

// function ismultipleof3(num)
// {
//     if(num%3==0) return true;
//     else return false;
// }

// // filter
// let arr=[1,2,3,4,5,6,7,8,9];

// let res = arr.filter(iseven);
// console.log(res);

// let res2 = arr.filter(ismultipleof3)
// console.log(res2);

// function iseven(num)
// {
//    if(num%2==0) return true;
//    else return false;
// }

// function square(num)
// {
//     return num*num;
// }
// let arr=[0,1,2,3,4,5,6,7,8,9];
// console.log(arr.filter(square))

// console.log(arr.map(iseven))
// console.log(arr.filter(iseven))