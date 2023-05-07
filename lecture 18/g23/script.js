// let arr = ['a','b','c','d','e','f'];

// console.log(arr.indexOf('z'))

// console.log(arr.includes('z'))

// arr.reverse();
// console.log(arr);

// arr.sort();
// console.log(arr);

// slice(startingIdx,lastIdx)
// let arr=[2,3,4,5,6,7,8]
// console.log(arr.slice(2,4));
// console.log(arr);

// splice(startingIdx,count)
// extract using splice
// let arr = [6,7,8,5,3,9,2,5];
// console.log(arr.splice(2,4));
// console.log(arr);

// delete using splice
// let arr = [6,7,8,5,3,9,2,5];
// arr.splice(3,1)
// console.log(arr);

// insert using splice
// let arr=['a','b','c','d','e']
// arr.splice(2,0,'z','x','i')
// console.log(arr);


// split and join
// split 
// let url = "c/user/jitendra/my files/songs/brown rang.mp3"

// let res = url.split("/")
// console.log(res[res.length-1])

// let names="vikas,rajesh,kunal,kamal"

// let namesarr=names.split(",")
// console.log(namesarr);

// let arr=["delhi","jaipur","kanpur","bikaner"]

// let res = arr.join(".")
// console.log(res)

// function in js


// console.log(square(3));
// console.log(square(8));
// console.log(iseven(3));
// console.log(iseven(4));

// map 
function square(num)
{
    return num*num;
}

function iseven(num)
{
    if(num%2==0) return true;
    else return false;
}
// let arr=[1,2,3,4,5,6,7,8,9,10];

// let arr2=[];
// for(let i=0;i<arr.length;i++)
// arr2.push(square(arr[i]))
// let arr2 = arr.map(square)
// let arrroot = arr.map(Math.sqrt)
// console.log(arr2);
// console.log(arrroot);

// filter
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let res = arr.filter(iseven)
// console.log(res);

// let res2 = arr.filter(function larger(num)
// {
//    if(num>5) return true;
//    else return false;
// })

// console.log(res2);

// let arr=[1,2,3,4,5,6,7,8,9,10];

// console.log(arr.filter(square))

// console.log(arr.map(iseven));

// let menu=[
//     {
//         "name":"pav bhaji",
//         "type":"veg"
//     },
//     {
//         "name":"chicken",
//         "type":"non veg"
//     },
//     {
//         "name":"samosa",
//         "type":"veg"
//     },
//     {
//         "name":"mutton",
//         "type":"non veg"
//     }
// ]

// function vegfilter(item)
// {
//     return item.type=="veg"
// }
// let vegmenu=menu.filter(vegfilter)

// console.log(vegmenu)