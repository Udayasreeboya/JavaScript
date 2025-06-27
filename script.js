// data types in JS
// 1.primitive datatypes
// --Number(Int, float)
// --String
// --Boolean
// --null
// --undefined

// 2.non primitive datatypes
// --Array
// --object

let num=123 //integer
let float=123.54 //float
let neg=-9
console.log(typeof(num))
console.log(typeof(float))
console.log(typeof(neg))

// string
let name="udayasree"
let surname="boya"
console.log(name)
console.log(typeof(name))
console.log(typeof(surname),surname)


// boolean
console.log(isNaN(123)) // false because 123 is a number
console.log("udayasree".length > "boya".length) //true
console.log(isNaN("abc"))

// null
// Think of null as an intentional empty value. "This variable intentionally has no value.
let behaviour=null
console.log(behaviour)

// undefined
let strength
console.log(typeof(strength))


//non primitive
//array
let list=[1,2,34,"sree","true","null","undefined"]
console.log(typeof(list))

//object
let object={name:"udayasree",place:"anantapur",qualification:"btech"}
console.log(typeof(object))