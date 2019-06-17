// // console.log(w)
// // // var n ="abc" 
// // var b =[1,3,5,7,9]
// // var o=b.map(function(value){
// //     // console.log(value)
// //     // console.log(index)
// //     return value >2;
// //     // console.log(array)

// // })
// // console.log(o)
// var gadgets= ['laptop','Pc','cellPhone','laptop','cellPhone']


// var info=gadgets.reduce(function(prev,next){
//     if(next in prev)
//     prev[next]++;
//     else
//     prev[next]=1
//     return prev
// },{})
// console.log(info)
document.write("lakh di lanat")
function func(a) {
    return function (b) {
        return a/b;
        
    }
}
console.log(func(2)(4))