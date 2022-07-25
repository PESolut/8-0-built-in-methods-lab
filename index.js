/**
 * Returns all of the "categories" from the assignments object.
 * @param {object} assignments - An object with assignments organized by category.
 * @returns {string[]} An array of strings, which represent all of the keys in the object.
 */
function getAssignmentTypes(assignments) {
  let ArrCategories = []
  ArrCategories = Object.keys(assignments)
  return ArrCategories
}

/**
 * Returns an integer that represents the score as a percentage.
 * @param {object} score - An object representing the score of an assignment.
 * @param {number} score.received - The value received on the assignment.
 * @param {number} score.max - The maximum amount of points that could be received on the assignment.
 * @returns {number} A rounded integer, representing a percentage.
 */
function getPercentageScore(score) {
  let arrScore = []
  let lowestScore = 0
  let maxScore = 0
  let percentage = 0
  arrScore = Object.entries(score)
  maxScore = arrScore[1][1]
  lowestScore = arrScore[0][1]
  percentage = Math.round(lowestScore / maxScore * 100)

  
  return percentage
}

/**
 * Given two score objects, returns an integer that represents the highest percentage received.
 * @param {object} score1 - An object representing the score of an assignment.
 * @param {number} score1.received - The value received on the assignment.
 * @param {number} score1.max - The maximum amount of points that could be received on the assignment.
 * @param {object} score2 - An object representing another score of an assignment. Has the same shape as `score1`.
 * @returns {number} A rounded integer, representing the highest percentage scored among the two given scores.
 */
function getHighestOfTwoScores(score1, score2) {
  let lowestScore1 = 0
  let maxScore1 = 0
  let percentage1 = 0
  let lowestScore2 = 0
  let maxScore2 = 0
  let percentage2 = 0
  let scoreArr1 = []
  let scoreArr2 = []

  scoreArr1 = Object.entries(score1)
  lowestScore1 = scoreArr1[0][1]
  maxScore1 = scoreArr1[1][1]
  percentage1 = Math.round(lowestScore1 / maxScore1 * 100)

  scoreArr2 = Object.entries(score2)
  lowestScore2 = scoreArr2[0][1]
  maxScore2 = scoreArr2[1][1]
  percentage2 = Math.round(lowestScore2 / maxScore2 * 100)

  if (percentage1 > percentage2){
    return percentage1
  } else {
    return percentage2
  }

  // Declare 6 variables, (lowestScore1, maxScore1, percentage1, lowestScore2, maxScore2, percentage2)
  // declare 2 empty arrays (scoreArr1, scoreArr2)
  // Turn our score1 object into an array using the Object.entries method
    // Store the data representing recievedscore inside of our new array into variable lowestScore1
    // Store the data representing maxscore inside of our new array into variable maxScore1
    // divide lowestScore1 by maxScore1 , multiply this number by 100 and store it inside of variable percentage1
  // Turn our score2 object into an array using the Object.entries method
    // Store the data representing  recievedscore the second layer of our array into variable lowestScore2
    // Store the data represneting maxscore inside of our new array into variable maxScore2
    // divide lowestScore2 by maxScore2 , multiply this number by 100 and store it inside of variable percentage2
  // compare percentage1 to percentage 2, if percentage1 is higher, return percentage1 else, return percentage2
}
// Don't change anything below this line.
module.exports = {
  getAssignmentTypes,
  getPercentageScore,
  getHighestOfTwoScores,
};
