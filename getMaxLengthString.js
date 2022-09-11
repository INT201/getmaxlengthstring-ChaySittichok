const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  //code here
  if(arrayOfString == null || arrayOfString == undefined){
    return undefined;
  }else{
    let text = []
    let arrayOfStringlong = arrayOfString[0].length
    for (let i = 0; i < arrayOfString.length; i++){
       if(arrayOfString[i].length > arrayOfStringlong){
        arrayOfStringlong = arrayOfString[i].length
       }
    }
    for(let i = 0; i < arrayOfString.length; i++){
      if(arrayOfString[i].length == arrayOfStringlong){
        text.push(arrayOfString[i])
      }
    }
    return text


  }
}
module.exports = getMaxLengthString
