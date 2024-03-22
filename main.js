// 1 Masala

// let arr = [2, 5, 8, 34, 13]
// total = 0
// total2 = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         total++
//     } else {
//         total2++
//     }
// }
// console.log(`${total} ta juft son bor`)
// console.log(`${total2} ta toq son bor`)

// 2 Masala 

// function juftToqFarq(numbers) {
//     let pairTotal = 0
//     let oddTotal = 0
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             pairTotal += numbers[i]
//         } else {
//             oddTotal += numbers[i]
//         }
//     }

//      return Math.abs(pairTotal - oddTotal)
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let difference = juftToqFarq(numbers)
// console.log("Juft va toq sonlar yig'indisi o'rtasidagi farq: " + difference)

// 3 Masala 

// function sumofnumbers() {
//     let summedup = 0

//     for (let i = 0; i < arguments.length; i++) {
//         summedup += arguments[i]
//     }

//     return summedup
// }

// let results = sumofnumbers(1, 2, 3, 4, 5)
// console.log("Sonlar yig'indisi: " + results)

// 4 Masala 

// function stringCopy(array, dataType) {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === dataType) {
//             newArray.push(array[i])
//         }
//     }
//     return newArray
// }
// let array = [1, "2", 3, "four", 5]
// let dataType = "string"
// let newArray = stringCopy(array, dataType)
// console.log("Natija: ", newArray)

// 5 Masala 

// function elementEyebrow(arr, num) {
//     if (arr.length === 0 || num > arr[0]) {
//         arr.unshift(num)
//     } else {
//         arr.push(num)
//     }
//     return arr
// }
// var array = [2, 4, 6, 8]
// var num1 = 10
// var num2 = 1
// console.log("Boshiga qo'shilgan natija: " + elementEyebrow(array.slice(), num1))
// console.log("Oxiriga qo'shilgan natija: " + elementEyebrow(array.slice(), num2))

// 6 Masala 

function separateevenNumbers(arr) {
    var pairArray = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            pairArray.push(arr[i])
            arr.splice(i, 1)
            i--
        }
    }
    return pairArray
}
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var pairArray = separateevenNumbers(array)
console.log("Juft sonlar: ", pairArray)
console.log("Asosiy arrayda qoldiq sonlar: ", array)
