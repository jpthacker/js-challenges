/* JS3 builds on the previous challenges and adds the use of Arrays, For Loops, Conditionals (If, else, switch)
 *  & calling your own functions.
 */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/**
 * Foundation Challenges
 */

/**
 * A function that creates a a Recipe string from a given array of Ingredients.
 * Each ingredient will be joined with a +.
 *
 * @param {string[]} ingredientsArr ["Bacon","Lettuce","Tomato"]
 * @return {string} "Bacon+Lettuce+Tomato"
 */

export const createRecipeString = (ingredientsArr) => {
  return ingredientsArr.join("+");
};

/**
 * A function that takes Array of Items and returns a NEW ARRAY with the first and last item in it.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Tony","Dave"]
 */

export const getFirstAndLastItems = (itemsArr) => {
  const firstAndLast = [itemsArr[0], itemsArr[itemsArr.length - 1]];
  return firstAndLast;
};

/**
 * A function that takes an array of scores and totals the scores by looping through the array.
 *
 * @param {number[]} scoreArr [1,2,3]
 * @return {number} 6
 */

export const totalScores = (scoreArr) => {
  let sumOfScores = 0;
  for (let i = 0; i < scoreArr.length; i++) {
    sumOfScores += scoreArr[i];
  }
  return sumOfScores;
};

/**
 * Intermediate Challenges
 */

/**
 * A function that takes an number and returns the total of the range of numbers between 0 and the given number.
 * e.g. 10 => 0+1+2+3+4+5+6+7+8+9+10 = 55.
 *
 * @param {number} rangeMax 10
 * @return {number} 55
 */

export const totalRange = (rangeMax) => {
  let sumOfNumbers = 0;
  let numberRange = [];
  for (let i = 0; i < rangeMax + 1; ++i) {
    numberRange.push(i);
  }
  for (let i = 0; i < numberRange.length; i++) {
    sumOfNumbers += numberRange[i];
  }
  return sumOfNumbers;
};

/**
 * A function that takes an array and returns a NEW ARRAY where the last item has been moved to the front of the array and removed from the back.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Dave","Tony","John"]
 */

export const moveFirstAndLastItems = (itemsArr) => {
  const result = [...itemsArr];
  const lastItem = result.pop();
  result.unshift(lastItem);
  return result;
};

/**
 * Read this article on how to clone an array.
 * https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
 *
 * From here on you should not be mutating the input array. Clone it first and then mutate / manipulate.
 */

/**
 * A function that takes an array of numbers and returns a NEW ARRAY with only the odd numbers from the given array. It should not mutate the input array.
 *
 * @param {number[]} numberArr [1,1,8,1,1,8]
 * @return {number[]} [1,1,1,1]
 */

export const removeEvenNumbers = (numberArr) => {
  const onlyOddNumbers = [];
  for (let i = 0; i < numberArr.length; i++) {
    let thisNumber = numberArr[i];
    if (numberArr[i] % 2 === 1) {
      onlyOddNumbers.push(thisNumber);
    }
  }
  return onlyOddNumbers;
};

/**
 * Advanced Challenges
 */

/**
 * A function that takes an array of numbers. It returns the average from the given array.
 * The result should rounded up to the nearest decimal place.
 *
 * @param {number[]} numberArr [1,2,3]
 * @return {number} 2
 */

export const generateAverage = (numberArr) => {
  let total = 0;
  for (let i = 0; i < numberArr.length; i++) {
    total += numberArr[i];
  }
  const avg = total / numberArr.length;
  const avgRounded = Math.ceil(avg) || 0;
  return avgRounded;
};

/**
 * A function that uses a loop to reverse the order of an Array. It should return a NEW ARRAY and not Mutate the orginal array.
 *
 * @param {number[]} toReverseArr [1,2,3]
 * @return {number} [3,2,1]
 */

export const reverseOrder = (toReverseArr) => {
  const origArray = [...toReverseArr];
  const reveredArray = origArray.reverse();
  return reveredArray;
};

/**
 * Expert Challenges
 */

/**
 * Given two arrays, The first being an array of players and the second being there corresponding score. Loop through them and generate a new array matching the format below.
 *
 * ["P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE"]
 *
 * P:INDEX will start from 1. e.g P:1 not P:0
 *
 * If the inputs are not the same size or empty return "invalid inputs"
 *
 * @param {string[]} playersArr ["Tony","John","Dave"]
 * @param {number[]} scoresArr [45,55,66]
 * @return {string[]} ["P:1 Tony scored 45","P:2 John scored 55","P:3 Dave scored 66"]
 */

export const generateHighscores = (playersArr, scoresArr) => {
  const highScores = [];
  for (let i = 0; i < playersArr.length; i++) {
    highScores.push(`P:${i + 1} ${playersArr[i]} scored ${scoresArr[i]}`);
  }
  if (
    playersArr.length != scoresArr.length ||
    playersArr.length === 0 ||
    scoresArr.length === 0
  ) {
    return "invalid inputs";
  } else {
    return highScores;
  }
};

/**
 * A function that takes a string and creates a simple encrypted message.
 *
 * The string will be broken into 3 lists.
 * The first three letters will go into their own list.
 * The next three letters will follow this pattern.
 * Joining the first three letters in each of their list.
 * The rest of the letter's will follow this pattern.
 * Each list will be joined together and returned as an encrypted message.
 *
 * The word "encrypted" would be broken into:
 *
 * e r t
 * n y e
 * c p d
 *
 * and joined together as ert + nye + cpd
 *
 * @param {string} toEncrypt "encrypted"
 * @return {string} "ertnyecpd"
 */

export const encryptString = (toEncrypt) => {
  // sorts the toEncrypt characters into 3 groups depending on order of appearance
  const charactersArray = [...toEncrypt];
  const charactersGroupOne = [];
  const charactersGroupTwo = [];
  const charactersGroupThree = [];
  for (let i = 0; i < charactersArray.length; i++) {
    if (i === 0 || i % 3 === 0) {
      charactersGroupOne.push(charactersArray[i]);
    } else if (i === 1 || i % 3 === 1) {
      charactersGroupTwo.push(charactersArray[i]);
    } else if (i === 2 || i % 3 === 2) {
      charactersGroupThree.push(charactersArray[i]);
    }
  }

  // Concatenates the characters from each group into a new encrypted message in correct order
  let messageArray = charactersGroupOne.concat(
    charactersGroupTwo,
    charactersGroupThree
  );

  //converts encrypted message array into a string
  const encryptedMessage = messageArray.join("");
  return encryptedMessage;
};
