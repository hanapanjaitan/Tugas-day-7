// Decimal to hexadecimal
var angka = 100
var decimal = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
var sisa
var output = ''

function reverseString(str){
    return str.split('').reverse().join('')
}

for(i=angka;i>=1;i/=16){
    sisa = Math.floor(i)
    sisa %= 16
    for(j=0;j<decimal.length;j++){
        if(sisa == decimal[j]){
            output += hex[j]
            break
        }
    }

}
console.log(reverseString(output))
