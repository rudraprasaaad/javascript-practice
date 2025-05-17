// Celsius to Farhenheit

// function celsiusToFarhenheit(celsius) {
//   let farhenheit = celsius * (9 / 5) + 32;
//   return farhenheit;
// }

// let ans = celsiusToFarhenheit(23);
// console.log(ans.toFixed(2));

// check vowels count

// let vowels = ["a", "e", "i", "o", "u"];

// function checkVowels(string) {
//   let count = 0;
//   vowels.map((vowel) => {
//     if (string.includes(vowel)) {
//       count++;
//     }
//   });
//   return count;
// }

// let ans = checkVowels("rudra");
// console.log(ans);

function capitalizeFirstLetterSentence(sentence) {
  const convertFirstLetter = sentence.split(" ");
  console.log(convertFirstLetter);

  let res;
  for (let i = 0; i < convertFirstLetter.length; i++) {
    let res = convertFirstLetter[i][0].toUpperCase();
  }

  return res;
}

let ans = capitalizeFirstLetterSentence("rudraprasad gouda");
console.log(ans);
