var str='It is a cup of tEa in The saUcer'
var rt=str.toLowerCase().split(" ")
    for(i=0 ; i<rt.length ; i++){

        rt[i]=rt[i].charAt(0).toUpperCase() +rt[i].slice(1)
    }
   var str1=rt.join(' ')

console.log(str1)