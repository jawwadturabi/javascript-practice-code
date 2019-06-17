var arrSub = new Array;
var arrNum = new Array;
var noOfStudent=parseInt(console.log('Enter the No of Student : '))
for (i=0;i<noOfStudent;i++){
    
    var noOfSubject=parseInt(console.log('Enter the No of Subject : '))
    for(j=0;j<noOfSubject;j++){
        arrSub[j]=console.log(`Enter the Name of Course ${i+1}`)
    }
    for(k=0;k<noOfSubject;k++){
        arrNum[k]=console.log(`Enter the Marks Obtained in ${arrSub[j]}`)
    }
    for(l=0;l<noOfSubject;l++){
        console.log(`In ${arrSub[j]} you got ${arrNum[k]}`)
    }

    
}