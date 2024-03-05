
let testVar1 = "The quick brown fox jumps over the lazy dog." // 
let str2 = 'pOLitiCI2aN'
let str1 = '2416789'
let arrNums = [121, 142, 123, 124, 125, 120, 122, 132]
let arr1 = [2,2,'w','O']

// leg size 1-4 1 for "^ ^", 2 for "/\ /\", 3 for "/╲ ╱\", 4 for "╱╲ ╱╲"
// body size 1-3 1 for "( )", 2 for "(( ))", 3 for "((( )))"
// mouth w || W
// eye - symmetric 2 to power body size
// /\((OOwOO))/\

// /╲(((0000w0000)))╱\
// ^(oWo)^
//  ╱╲ ╱╲.
//  𝈻 ＼ ／᜴   ᜴  ᜵

//  ⧹╲⎝⧹༼◕oﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞ. ͜oﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞﱞ.g◕༽⧸⎠╱⟋╱
// (ȏ-ȏ)----|̉̉̉̉̉̉̉̉̉̉̉̉̉
// 

// const foods = [
//   {
//     name: '🍔',
//     price: 30.89,
//     group: 1,
//   },
//   {
//     name: '🍨',
//     price: 20.71,
//     group: 1,
//   },
//   {
//     name: '🍿',
//     price: 10.31,
//     group: 2,
//   },
//   {
//     name: '🍵',
//     price: 5.98,
//     group: 2,
//   },
// ]
// console.table(foods)

// create a spider 
//  /╲(((0000w0000)))╱\
function runFuc(arr){
    // get leg, body, mouth, eye
    // [0,1,2,3]
    let leg = '//\\', bodyLeft = '((', bodyRight = '))', mouth = 'w', eye = '0000'
    let spider = ''

    // add eyes to each side of mouth
    spider += leg+bodyLeft+eye+mouth+eye+bodyRight+leg
    // add body to each side of eyes

    // add legs to each side of eyes

    return spider
}

//const runFuc = str => str.reduce((a,b)=>a+'★zyxwvutsrqponmlkjihgfedcba!? '[b],'')
const result = runFuc([0,1,2,3])
console.log(result) 
document.querySelector('H2').innerText = result


// strHtml
// cycle through '<div>' change the next '<div>' => '</div>'

// function runFuc(strHTML){   
//     // split by '<div
//     // loop through and find every other '<div>'
//     let chopDownStr = ''
//     // for(let i = 0;strHTML.indexOf('<div') != -1;i++){
//     //     if(i % 2 === 0) chopDownStr += strHTML.slice()
//     //     else strHTML += arrDivsHtml[i].replace('<div>', '</div>')
//     // }
//     chopDownStr = strHTML.slice(0, strHTML.indexOf('<div')+4)  // chop
//     chopDownStr = chopDownStr + strHTML.slice(strHTML.indexOf('<div')+4).replace('<div>', '</div>')
//     return chopDownStr
// }

// int humanYears
// ret arr of [humandYears, catYears, dogYears]
// humanYears >= 1 
// 15 cat years first, 9 cat years second, +4 each after
// same but +5 after second
// 4 humanYears => 15 + 9 + 4 + 4 === cat
// 4 humanYears => 15 + 9 + 5 + 5 === dog
// loop through cases for numHumanYears 1 and 2, times remaining years by animal type

// function runFuc(num){   
//     let totCat = 24
//     if(num === 1) return [num, 15, 15]
//     if(num === 2) return [num, 24, 24]
//     totCat += 4 * (num-2)    
//     return [num, totCat, totCat+(num-2)]
// }

// arr ints as strings and nums
// sum of all values as if they nums
// ['5', 5]  => 10
// loop through converting every element to num and sum

// function runFuc(arr8){   
//     return arr8.reduce((agg, item) => +item + agg, 0)
// }

// string
// remove first and last char and return
// ignore < 2 length

// function runFuc(arr8){   
//     return arr8.slice(1, -1)
// }
// number
// return a negative number or zero
// -0.05 => -0.05
// 5 => -5
//check if num < 0 ? do nothing
// check if num > 0 ? 

// function runFuc(arr8){   
//     return arr8 > 0 ? arr8 *= -1 : arr8
// }

// function runFuc(arr){        
//     return arr.reduce((a, b) => Math.max(a, b), -Infinity)  //
// }

// function runFuc(arr){        
//     return arr.concat(arr2, arr3)  //
// }

// function runFuc(arr){        
//     return arr.join(' and ')  //
// }
 
// function runFuc(arr){        
//     return arr.toString()  // true
// }

// function runFuc(arr){        
//     return arr.includes(121)  // true
// }

// function runFuc(arr){        
//     return arr.every(i => i.price < 101)  // is every item in the arrary under 101?   true
// }

// function runFuc(arr){        
//     return arr.some(i => i.price < 101)  // is there one in the arrary?  true
// }

// function runFuc(arr){        
//     return arr.find(i => i.name === 'TV')  // first single object
// }

// function runFuc(arr){        
//     return arr.reduce((agr, i) => { return i.age + agr }, 0)
// }

// function runFuc(arr){        
//     return arr.filter(i => i.age < 24)
// }

// function runFuc(['1', '2', '5']){    
//     return arr.reduce((a,b)=>+b+a,0)  // yeilds 8 not '125'
// }

// arrNums.sort((a,b) => a-b)
// alert(arrNums)
// function runFuc(arr){    
//     arr.sort((a,b) => {
//         alert(`${a} <> ${b}`)
//         return a - b
//     })
//     return arr
// }
// function runFuc(arr){
//     arr.sort((a,b) => a - b)
//     return arr  // returns same array
// }

// function runFuc(arr){
//     arr = arr.map(item => item.length)
//     return arr  // returns new array
// }

// function runFuc(arr){
//     arr.splice(2,0,'complex', 'language')
//     return arr  // returns new array
// }

// function runFuc(arr){
//     delete arr[2]
//     return arr  // returns new array
// }

// num,
// log all nums FROM 1 to that num
// BUT if div by 3 log 'fizz'
// BUT if div by 5 log 'buzz'
// BUT if div by 3 & 5 log 'fizzbuzz'

// function runFuc(arr){
//     for(let i = 1; i <= arr; i++){
//         if(i % 3 === 0 && i % 5 === 0) console.log('fizzbuzz')
//         else if( i % 3 === 0 ) console.log('fizz')
//         else if( i % 5 === 0 ) console.log('buzz')
//         else console.log(i)
//     }
//     return "done"  // returns new array
// }

// function runFuc(arr){    
//     return arr.concat("1","beast")  // returns new array
// }

// function runFuc(arr){
//     arr.splice(-1,0,3,4)  // alters the array, no return unless a remove
//     return arr
// }

// function runFuc(arr){
//     return arr.slice(0,1) // does not alter the array, returns a new array
// }
// git rm --cashed index.html

// an array of string scores in format ['x:y']
// x is our score, y other team
// ret number of points our team x got by these rules:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// points are between 0 and 4
// always 10 games

//["3:1", "2:2", "0:1", ...]

// function runFuc(arr){
//     // cycle through the array

//     // see if x > y + 3points
//     // x<y = 0
//     // x===y 1
//     //return score
//     let score = 0
//     arr.map(x => {  //["3:1", "2:2", "0:1", ...]
//         if(x[0] > x[2]) score += 3 // skips the colon : so just first and third char
//         if(x[0] === x[2]) score += 1
//     })
//     return score
// }

// str, adjust for cases
// str 

// Input	    Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"

// function runFuc(str){
//     // adjust case
//     str = str.toLowerCase()
//     // set up switch case return 
//     switch(str){
//         case "jabroni": return "Patron Tequila"
//         case "school counselor": return "Anything with Alcohol"
//         case "programmer":	return "Hipster Craft Beer"
//         case "bike gang member": return	"Moonshine"
//         case "politician": return	"Your tax dollars"
//         case "rapper": return	"Cristal"        
//     }
//     return	"Beer"
// }

// function runFuc(str){
//     // replace errors and return 
//     return str.slice(0, 5)
// }

// string of text, only has numbers by mistake
// return corrected text
// 5 => S
// 0 => O
// 1 => I

// function runFuc(str){
//     // replace errors and return
//     return str.replaceAll('5','S').replaceAll('0','O').replaceAll('1','I')
// }

// arr names of people that liked an item
// ret display text as shown in examples:
// like count >= 4 the number in 'and 2 others' increases

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Peter", "Alex"]                 -->  "Peter and Alex like this"
// ["Peter", "Alex", "Mark"]         -->  "Peter, Alex and Mark like this"
// ["Peter", "Alex", "Mark", "Max"]  -->  "Peter, Alex and 2 others like this"

// function runFuc(arr){//     
//     if(arr.length === 0) return 'no one likes this' // check for no one display 
//     let display = '', name1, name2, name3, cnt=0    
//     for(;cnt < arr.length;cnt++){ // loop through names 
//         if(cnt === 0) name1 = arr[cnt] // 'Peter ' 
//         else if(cnt === 1) name2 = arr[cnt] // 'Peter and Alex ' 
//         else if(cnt === 2) name3 = arr[cnt] // 'Peter, Alex and Mark ' 
//         console.log(arr[cnt])
//     }
//     if(cnt === 1) display = `${name1} ` // when 4 >= only show 2 names and a count of cnt + ' others'
//     else if(cnt === 2) display = `${name1} and ${name2} ` 
//     else if(cnt === 3) display = `${name1}, ${name2} and ${name3} `
//     else display = `${name1}, ${name2} and ${cnt-2} others `
//     return display + (arr.length === 1 ? 'likes this' : 'like this')  //return display adding common text
// }

// array of nums
//ret str made up of four parts:
//4 char 'word' < made of first and last two chars in array, order as read left to right
// same after sorting arrr in ascend
// same after sort arr in descending
// same after conv arr into ascii and sort alphabetical
// ret four parts joined by '-'

// ex: 1110 1115
// [111, 112, 113, 114, 115, 113, 114, 110]  -->  "oprn-nors-sron-nors"
// [66, 101, 55, 111, 113]                   -->  "Beoq-7Boq-qoB7-7Boq"
// [99, 98, 97, 96, 81, 82, 82]              -->  "cbRR-QRbc-cbRQ-QRbc"
//'yzz-xy}-}yx-xy}'
// function runFuc(arr){
//     function codeFP(arr){
//         return String.fromCodePoint(arr[0]) 
//         + String.fromCodePoint(arr[1]) 
//         + String.fromCodePoint(arr[arr.length-2]) 
//         + String.fromCodePoint(arr[arr.length-1])+'-'
//     }    
//     let result = codeFP(arr) // join first and last two numbers converted to ascii
//     result += codeFP(arr.sort((a,b) => a-b)) // sort asc do same as above
//     result += codeFP(arr.sort((a,b) => b-a)) // sort desc do same as above
//     arr = arr.map(x=>String.fromCodePoint(x)).sort() // conv arr into ascii and sort alphabetical
//     return result += arr[0]+arr[1]+arr[arr.length-2]+arr[arr.length-1]  // return parts joined by '-'
// }

// str digits
// replace dig's below 5 with '0' and 5 and above '1'
// ret the resulting str

// '1387' => '0011'

// function runFuc(seqArr){
//     // split str into arr
//     // eval < 5 = replace '0' else '1'
//     // join arr
//     return seqArr.split('').map(x => +x<5?'0':'1').join('')
// }

// array of nums in string 
// nums corespond to letters of alpha in reverse  ex: a=26, z=1, 
// also account for: '!'==27,'?'==28,' '==29
// ret str

// ex: ['26','22','27'] ==> 'ae!'

// const runFuc = str => str.reduce((a,b)=>a+'★zyxwvutsrqponmlkjihgfedcba!? '[b],'')
// const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
// const runFuc = str => str.map(x => alpha[x]).join('')

// function runFuc(seqArr){
//     let newStr = ''
//         for(i in seqArr){       // loop through arr
//             switch(seqArr[i]){  // set up a switch stmt with all cases 1-29
//                 case '29': 
//                     newStr += ' '
//                     break;
//                 case '28': 
//                     newStr += '?'
//                     break;                    
//                 case '27': 
//                     newStr += '!'
//                     break;
//                 case '26': 
//                     newStr += 'a'
//                     break;
//                 case '25': 
//                     newStr += 'b'
//                     break;
//                 case '24': 
//                     newStr += 'c'
//                     break;
//                 case '23': 
//                     newStr += 'd'
//                     break;
//                 case '22': 
//                     newStr += 'e'
//                     break;
//                 case '21': 
//                     newStr += 'f'
//                     break;
//                 case '20': 
//                     newStr += 'g'
//                     break;
//                 case '19': 
//                     newStr += 'h'
//                     break;
//                 case '18': 
//                     newStr += 'i'
//                     break;
//                 case '17': 
//                     newStr += 'j'
//                     break;
//                 case '16': 
//                     newStr += 'k'
//                     break;
//                 case '15': 
//                     newStr += 'l'
//                     break;
//                 case '14': 
//                     newStr += 'm'
//                     break;
//                 case '13': 
//                     newStr += 'n'
//                     break;
//                 case '12': 
//                     newStr += 'o'
//                     break;
//                 case '11': 
//                     newStr += 'p'
//                     break;
//                 case '10': 
//                     newStr += 'q'
//                     break;
//                 case '9': 
//                     newStr += 'r'
//                     break;
//                 case '8': 
//                     newStr += 's'
//                     break;
//                 case '7': 
//                     newStr += 't'
//                     break;
//                 case '6': 
//                     newStr += 'u'
//                     break;
//                 case '5': 
//                     newStr += 'v'
//                     break;
//                 case '4': 
//                     newStr += 'w'
//                     break;
//                 case '3': 
//                     newStr += 'x'
//                     break;
//                 case '2': 
//                     newStr += 'y'
//                     break;
//                 case '1': 
//                     newStr += 'z'
//                     break;
//             }
//         } 
//     return newStr
// }

// string
// are all chars unique?
// bool

// const runFuc = str => new Set(str).size === str.length
// function runFuc(seq){
    // split and sort chars
    //return new Set(seq).size === seq.length
    //.sort((a,b)=>a-b)
    // loop through and see if any match
    // for(let i=0;i<seq.length-1;i++){
    //     if(seq[i] === seq[i+1]) return false
    // }
    //return seq
// }
// string
// are all chars unique?
// bool

// function runFuc(seq){
//     // split and sort chars
//     seq = seq.split('').sort((a,b)=>a-b)
//     // loop through and see if any match
//     // for(let i=0;i<seq.length-1;i++){
//     //     if(seq[i] === seq[i+1]) return false
//     // }
//     return seq
// }
//const runFuc = arrNums => arrNums.map(el => -el)

// sequenced string of numbers
// 0 < length string < 140
// 0 < smallest number < 1 000 000 000
// return smallest possible first num in the sequence

//let sequence = "123" 
// "123" -> [1, 2, 3] -> 1
// "91011" -> [9, 10, 11] -> 9
// "17181920" -> [17, 18, 19, 20] -> 17
// "9899100" -> [98, 99, 100] -> 98
// "121122123" -> [121, 122, 123] -> 121
// "1235" -> [1235] -> 1235
// "101" -> [101] -> 101

// function runFuc(seq){
//     // split the string into singles
//     let singleSplit = seq.split('')
//     // is there a first reocorance of the first digit
//     let smallestSingle = parseInt(singleSplit[0])
//     for(let i = 1;i<singleSplit.length;i++){
//         let nextDig = parseInt(singleSplit[i])
//         console.log(nextDig<)

//     }
//     // if the next number is less than the previous
//     return smallestSingle
// }

// let h = -1, bounce = 0.66, window3 = 1.5;
// height num>0, bouce num (0< num <1), window num < height
// if any conditions fail return -1
// ball seen if greater than window height
// return how many times ball is seen bouncing up and down

// - h = 3, bounce = 0.66, window = 1.5, result is 3
// - h = 3, bounce = 1, window = 1.5, result is -1 

// check for conditions met
// ball is dropped 3 meters +1 
// ball comes up to 3*0.66 = 1.98 bounce height
// bounce is greater than window height +1
// ball fails +1
// bounces up to bounce *0.66 = 1.98*0.66 = 1.3068 bounce height
// ball can no longer be seen
// return 3 times

// function runFuc(h1, bounce1, window1){
//     if(h1 < 0 || bounce1 >= 1 || bounce1 <= 0 || window1 > h1) return -1
//     let cnt = 1
//     while(true){
//         h1 *= bounce1
//         console.log(h1)
//         if(h1>window1) cnt += 2
//         else return cnt;
//     } 
// }
//const runFuc = arrNums => arrNums.map(el => -el)
// result = runFuc(h, bounce, window3)
// console.log(result)
// document.querySelector('H2').innerText = result

// string
// convert each char into it's ASCII num
// join them together to make one string call total1
// replace all 7's with 1's and put into a different string total2
// retrun difference of the sum of digits in total1 and sum of digits in total2
// 'ABC' => 'A'= 65, 'B' =66, 'C' = 67 ==> 656667
// total1 = 656667
//               ^
// total2 = 656661
//               ^
// (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

// function runFuc(str){
//     str = str.split('').map(elm => elm.codePointAt(0)).join()
//     let sum1 = 0
//     for(let i in str) {
//         if(str[i]==='7') sum1++
//     }
//     return sum1*6
// }
// //const runFuc = arrNums => arrNums.map(el => -el)
// result = runFuc(str2)
// console.log(result)
// document.querySelector('H2').innerText = result


// // arr of nums
// // additive inverse, positives become negative vs versa
// //[1,-2,3] => [-1,2,-3]
// // map each num to *-1

// // function runFuc(arrNums){
// //     return arrNums.map(elm => elm*-1)
// // }
// const runFuc = arrNums => arrNums.map(el => -el)
// result = runFuc(arrNums)
// console.log(result)
// document.querySelector('H2').innerText = result



// string of words
// array of words
// function runFuc(str){
//     return str.split(' ')
// }
// const runFuc = str => str.split(' ')

// [name, name, ...]  city, state
// ret  'Hello, name name ...! Welcome to city, state!
// space between names

// set base str = 'Hello, 
// loop through names
// add '! Welcom to ' + city + ' ' + state - use ticks

// result = welcome(['John', 'Smith'], 'Phoenix', 'Arizona')

// function welcome(nameArr, city, state){
//     return `Hello, ${nameArr.join(' ')}! Welcome to ${city}, ${state}!`
// }

// function welcome(nameArr, city, state){
//     let welcMess = 'Hello,'
//     for(let i=0;i<nameArr.length;i++){
//         welcMess += ' ' + nameArr[i]
//     }
//     welcMess += `! Welcome to ${city}, ${state}!`
//     return welcMess
// }

// num  positive > 0 
// ret sum 

// ex 2 => 3  (1+2)

// take in num and start count a 1
// increment and sum until num reached
// return sum total

// function sum(num){
//     let sum = 0
//     for(let i=1;i<=num;i++){
//         sum += i
//     }
//     return sum
// }

//console.log(sum(8))

// take in two numbers representing UTF-16 letters
// console log all letters from num1 to num2

// function displayChars(num1, num2){
//     let str = ''
//     for(let i = num1;i<num2;i++){
//         str += String.fromCodePoint(num1++)

//     }
//     console.log(str)
// }
// displayChars(0,65)


// str of currency (cost)
// extract numeric value
// return
//  '$120.34' => 120.34

// function extractCurrencyValue(str){
//     return +str.substring(1)
// }
// console.log(extractCurrencyValue('$134.53'))
// remove '$' sign
// convert to number
//return number



// str, maxlength
// checks length of str, if it exceeds maxlength -
// replaces the end of str with ellipsis char '…'
// make str.length === maxlength
// 

// function truncate(str, maxNum){
//     if(str.length<maxNum) return str
//     return str.slice(0,maxNum-1)+'…'
// }
// console.log(truncate('make tacos tuesday', 10))
// console.log(truncate('make tacos tuesday', 10).length)
// check string length exceeds maxlength
// if less return str
// if move truncate one less than max length and add '…' to end
// return new str



// str check for spam 'viagra' or 'XXX' => true else false
//take in string, check if contains
// 'buy ViAgRA now' => true
// 'free xxxxx' => true
// 'inocent rabbit' => false

// function checkSpam(str){
//     if(!str) return str
//     str = str.toLowerCase()
//     return str.indexOf('xxx') !== -1 || str.indexOf('viagra') !== -1
// }
// console.log(checkSpam('InoceViAgRAbbit'))

// uppder case first letter eg: 'john' => 'John'
// function ucFirst(str){
//     if(!str) return str
//     str = str[0].toUpperCase() + str.slice(1)
//     return str
// }

// ucFirst('john')


// string of words and whitespace
// eg: "red robin yellow jacket black 3 blue 4" etc
// return string of objects with name and id from the words: 
// "[{name : 'red', id : 'robin'}, {name : 'yellow', id : 'jacket'}...]"

// split string up into words by whitespace
// concate words into name and id object {name: '', id: ''}
// wrap in brakets
// return string of objects (JSON)
// function strToJSON(str){
//     let words = str.split(' ')
//     let JSON = '['
//     for(let i=0;i<words.length-1;i++){
//         JSON = JSON + `{name : '${words[i]}', id : '${words[++i]}'}, ` // create object with name and 
//     }
//     JSON = JSON.slice(0, -2) // chop last comma
//     return JSON+']'
// }
// console.log(strToJSON(testVar4))


// given string of ~ and _
// if more than 20% of the string has changes from ~ to _
// return "Throw Up" else "No Problem"

// function howWasSnorkeling(str){
//     let arr = str.split('')
//     let lastElm = arr[0]
//     let changedCnt = 0
//     arr.forEach(element => {
//         console.log(lastElm === element)
//         if(lastElm !== element) changedCnt++  // did change?
//         lastElm = element
//     })
//     console.log(`arr:  ${arr.length}`)
//     console.log(`str:  ${str.length}`)
//     console.log(`changedCnt:  ${changedCnt}`)
//     console.log(`percent:  ${changedCnt/arr.length}`)
//     console.log(`Bad?:  ${changedCnt/arr.length>0.2}`)
//     return changedCnt/arr.length > 0.2 ? "Throw Up" : "No Problem"
// }
// get the length of string
// count changes from ~ to _ or _ to ~ depending on start
// determine if > 20%
// return response

//console.log(howWasSnorkeling(testVar4))
// function howWasSnorkeling(str){
//     let changedCnt = 0
//     str.split('').reduce((first, second) => {
//         first !== second ? changedCnt++ : '' // did change?
//         return second
//     })
//     return changedCnt/str.length > 0.2 ? "Throw Up" : "No Problem"
// }
// console.log(howWasSnorkeling(testVar4))

//let newArry = names2.splice(1,1,...names3) 

//splice (startPlace,numToDelete,...arrToInsert)

// test = names2.splice(2,0,"complex","language")

// let newArry = names2.splice(1,1,...names3) 
// console.log(newArry)
// console.log(names2)
// // p0 = 1000 , int or float, positive
// // rate 2% needs to be converted/100
// // imigration 50 per year
// // at year-end population count, round down
// // return numers of years it would be projected to hit 1,200 residents?

// function nbYear(intPop, rate, imigr, desPop){
//     rate = rate/100
//     let cnt = 0
//     for(;intPop<=desPop;cnt++){        
//         intPop = Math.floor(intPop * (1+rate)) + imigr
//     }
//     return cnt
// }
// console.log(nbYear(intPop1, rate1, imigr1, desPop1))


// reverse only the words in place
// let testVar1 = "The quick brown fox jumps over the lazy dog."
// test = testVar1.split(' ').map(e=> e.split('').reverse().join('')).join(' ')
// console.log(test)

// console.log(testVar3.reduce((a,elm)=> a + elm, 0))
// console.log(arr)
// let arr = ["I", "study", "JavaScript"]
// console.log(arr.splice(1, 1, ...names2))
// console.log(arr)

// number
// console.log all values from 1 to number
// div 3 'fizz' instead of that number, div 5 'buzz', div 3 & 5 'fizzbuzz'

// function loop(num){
//     for(let i=1;i<num;i++){
//         if(i%3===0 && i%5===0)console.log('fizzbuzz')
//         else if(i%3===0)console.log('fizz')
//         else if(i%5===0)console.log('buzz')
//         else console.log(i)
//     }
// }

// loop(31)


// int pop 1000
// growth rate (2.5% needs conversion ) positive or null float
// new inhabitants 50 per year int
// round down inhabitants each year
// desired population positive int
// return num years to reach desired population

// let intPop1 = 1000, rate1 = 2.5, imigr1 = 50, desPop1 = 1200

// function nbYear(intPop, rate, imigr, desPop){
//     intPop = Math.floor(intPop*(1+rate/100)) + imigr
//     if(intPop >= desPop) return 1
//     return nbYear(intPop, rate, imigr, desPop) + 1  
// }
// console.log(nbYear(intPop1, rate1, imigr1, desPop1))

//function nb_year(intPop, rate, imigr, desPop){
//     // convert rate
//     rate = rate / 100
//     let cnt = 0
//     // calc growth and imigration round down
//     for(;intPop <= desPop;cnt++){        
//         intPop += Math.floor(intPop * rate) + imigr
//     }
//     return cnt
// }
// console.log(nb_year(intPop1, rate1, imigr1, desPop1))


// integral perfect square, interger non-negative
// returns the next integral perfect square or -1 if number passed in is not one

// take in num
// find if IPS
// return next IPS if it is

// function findNextIntSquare(num){
//     num = Math.sqrt(num)
//     return num++ % 1 ? -1 : Math.pow(num, 2)
// }

// console.log(findNextIntSquare(121))


// arr scores, my score
// find average and compare your score
// return true or false if your better

// add your score to arr
// find average of all scores
// compare your score to avg
// function compareScore(arr, myScore){
//     arr.push(myScore)
//     let avg = arr.reduce((tot,elm) => tot += elm, 0)
//     console.log(avg)
//     console.log(avg/arr.length < myScore ? true : false)
//     return (avg/arr.length < myScore ? true : false)
// }


// const names2 = ['irish', 'daisy', 'anna'];
// let testVar1 = "The quick brown fox jumps over the lazy dog." // 
// let testVar2 = "This is not a pangram." // 
// let testVar3 = [82,71,61,90] //
// let score = 99
// compareScore(testVar3, score)


// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// let str = 'string of  words'

// function funky(str1){
//     str1 = str1.split(' ') // ['string','of','words']
//     console.log(str1)
//     str1 = str1.map(word => word.split('').reverse().join('')).join(' ')
//     console.log(str1)
// }

// funky(str)

// let str = 'string of words'
// function funky(str1){
//     let newStr = str1.split(' ').map(word => word.split('').reverse().join('')).join(' ')
//     console.log(newStr)
// }

// funky(str)

// Use console.table instead of console.log
// We often use console.log to print some information, but sometimes it's not so intuitive.

// const foods = [
//   {
//     name: '🍔',
//     price: 30.89,
//     group: 1,
//   },
//   {
//     name: '🍨',
//     price: 20.71,
//     group: 1,
//   },
//   {
//     name: '🍿',
//     price: 10.31,
//     group: 2,
//   },
//   {
//     name: '🍵',
//     price: 5.98,
//     group: 2,
//   },
// ]
// console.table(foods)
//console.log(foods.filter((value, i, foods) => console.log(value), 1)) //
//console.log(strRev('SessionStack'));
// console.log(diffNum(testVar3) == -1);
//document.querySelector('h2').innerText = leastNum(testVar2, 'value');

// Use reduce to calculate the sum
// Now a customer has bought a lot of things. I need to know how much he should pay.
// Maybe you’ll do it like this:
// const foods = [
//     {
//       name: '🍔',
//       price: 30,
//       amount: 10,
//     },
//     {
//       name: '🍨',
//       price: 20,
//       amount: 3,
//     },
//     {
//       name: '🍿',
//       price: 10,
//       amount: 5,
//     },
//     {
//       name: '🍵',
//       price: 5,
//       amount: 9,
//     },
//   ]
//   let sum = 0
//   foods.forEach((food) => {
//     sum += food.price * food.amount
//   })

//   A better way
//   Writing like the above can achieve the purpose, but the amount of code is still too much, we have an easier way.
// let sum = foods.reduce((res,food) => res += food.amount*food.price, 0)
// console.log(sum) // 455

// Rounding Trick
// Wow, it’s Halloween, and to celebrate the holiday, all food is discounted and the decimals are all erased.
// We can use Math.floor, but is there an easier way? How about the ~~ operator?

// const foods = [
//     {
//       name: '🍔',
//       price: 30.89
//     },
//     {
//       name: '🍨',
//       price: 20.71
//     },
//     {
//       name: '🍿',
//       price: 10.31
//     },
//   ]
// const discountedFoods = foods.map((it) => {
//     return {
//         name: it.name,
//         price: ~~it.price
//     }
// })
// console.log(discountedFoods)

// Easy way to flatten an array
// There’s some mess of food, how can we put them in a basket? If [] is a basket.
//const foods = [ [ '🍔', [ '🍫' ] ], [ '🍨', [ '🍿', [ '🍵' ] ] ] ]

//The first way
// const flattenFoods = (foods) => {
//     return foods.reduce((res, food) => {
//       return res.concat(Array.isArray(food) ? flattenFoods(food) : food)
//     }, [])
// }
// console.log(flattenFoods(foods)) // ['🍔', '🍫', '🍨', '🍿', '🍵']

// The second way
// Do you have a shorter way to achieve this? Yes, we can use [].flat, a simpler and smarter way.
// Using Infinity means we don't care how many levels the food is nested.
//console.log(foods.flat(Infinity)) // ['🍔', '🍫', '🍨', '🍿', '🍵']


// const foodMap = {
//     '🍔': 30,
//     '🍨': 20,
//     '🍿': 10,
//     '🍫': 5
//   }
//   // pay attention here
//   Object.prototype['🌭'] = 40

//General way
// Use for in to iterate over foodMap, but '🌭' is also printed, which we don't want to see:
//for(key in foodMap) console.log(key, foodMap[key])


// A better way
// Use Object.entries has at least two benefits:
// 1.  Only properties on the object are printed, properties on the prototype are ignored.
// 2.  Get the value of the object directly instead of using obj[key] to read it.

// Object.entries(foodMap).forEach(([ key, value ]) => {
//     console.log(key, value) 
// })


// Swap two values using destructuring
// Now I have burgers and you have chocolate. We are good friends and want to exchange food. How do we usually do it?
// let myFood = '🍔'
// let yourFood = '🍫'
// let tempFoot = myFood
// myFood = yourFood
// yourFood = tempFoot
// console.log(myFood, yourFood) // 🍫 🍔


// let myFood = '🍔'
// let yourFood = '🍫'
// ;[ myFood, yourFood] = [yourFood,myFood]
// console.log(myFood, yourFood)    // 🍫 🍔


//Now, if you were asked to find the food that belongs to group 1, how would you find it?
//Here’s the data:

// IN: foods arr
// OUT: food in group 1

// const foods = [
//     {
//         name: '🍔',
//         group: 1,
//     },
//     {
//         name: '🍨',
//         group: 1,
//     },
//     {
//         name: '🍿',
//         group: 2,
//     },
//     {
//         name: '🍵',
//         group: 1,
//     },
// ]
// const names = foods
//     .filter(food => food.group === 1)
//     .map(food => food.name)
// console.log(names)


// two arguements 
// returns array of the first n multiples of x
// positive greater than 0
//countBy(1, 10) === [1,2,3,4,5,6,7,8,9,10]
//countBy(2, 5) === [2,4,6,8,10]

// function countBy(n, x){
//     let arr = []
//     let count = n
//     for(let i = 1;i <= x;i++){
//         arr.push(count*i)
//     }
//     return arr
// }
// console.log(countBy(2,5))


