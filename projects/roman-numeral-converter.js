function numberBreak(num) {
    let temp = num.toString().split('');
    return temp.map((el, index) => {
        return parseInt(el + '0'.repeat(temp.length - index - 1))
    }).filter(el => el !== 0)
}
function convertToRoman(num) {
    const romanMap = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        20: 'XX',
        30: 'XXX',
        40: 'XL',
        50: 'L',
        60: 'LX',
        70: 'LXX',
        80: 'LXXX',
        90: 'XC',
        100: 'C',
        200: 'CC',
        300: 'CCC',
        400: 'CD',
        500: 'D',
        600: 'DC',
        700: 'DCC',
        800: 'DCCC',
        900: 'CM',
        1000: 'M'
    }
    return numberBreak(num).map(el => {
        if(el > 1000){
            return "M".repeat(Math.floor(el/1000));
        } 
        return romanMap[el]
    }).join('')
}
console.log(numberBreak(3999))
console.log(convertToRoman(433999));