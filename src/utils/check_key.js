
// const array = ["firstname", "lastname", ]

// const obj = {
//     firstname : "coulibaly",
//     email: "rosefatim"
// }

const checkKey = (arr, obj) => {

    let value = false

if (arr.length === 0) return true
   
    for(let i = 0; i < arr.length; i++) {
         //console.log(obj[arr[i]])
        if(obj[arr[i]] === null || obj[arr[i]] === undefined || JSON.stringify(obj[arr[i]]).length === 0 )  {
            console.log('this is our key issue: ' + arr[i] + " => " + obj[arr[i]] )
            value = true;
            break;
        }
    }
    console.log(value);
    return value
}


module.exports= {checkKey}

 //checkKey(array , obj)
