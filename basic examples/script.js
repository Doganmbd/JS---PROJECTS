// how many vowels

const text = prompt('Please enter a string : ').toLowerCase();
const constants = 'bcçdfgğhjklmnpqrsştwxyz'.split('');
const vowels = 'aeıioöuü'.split('');
let constantCount = 0;
let vowelCount = 0;

for (char of text)
  if (vowels.includes(char)) vowelCount += 1;
  else if (constants.includes(char)) constantCount += 1;

console.log(`Your text has ${vowelCount} vowels and ${constantCount} constants`);

// 2.yol

let text = "Welcome to Full-Stack path"
const vovels = "aeiou"
let [vovelsInText, constantsInText] = [0, 0]

for (let letter of text.toLowerCase()){
    if (letter.match(/[a-z]/)) {
        
        vovels.includes(letter) ? vovelsInText++ : constantsInText++
    }
}

console.log(`Vovels: ${vovelsInText}
Constants: ${constantsInText}`)