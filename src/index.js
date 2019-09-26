/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      
        let hoursWeek;
        for (let key in config) {
          if (key === focus) {
            hoursWeek = config[focus];
          }
        }

        const advancedKnowledge = 800;
        const basicKnowledge = 500;
        let amountHours;

        if (knowsProgramming === true) {
          amountHours = advancedKnowledge;
        }
        else {
          amountHours = basicKnowledge + advancedKnowledge;
        }

        return Math.ceil(amountHours/hoursWeek);

  };


  /*
  const speedConfig = {
    family: 4,
    friends: 10,
    normal_life: 20,
    profession: 30,
    carrier: 40,
    top_peformance: 60
   }

const knowsProgramming = true;

function getTimeForEducation(firstArgument, secondArgument, thirdArgument) {

  let hoursWeek;
  for (let key in thirdArgument) {
    if (key === firstArgument) {
      hoursWeek = thirdArgument[firstArgument];
    }
  }

  const basicKnowledge = 800;
  const advancedKnowledge = 500;
  let amountHours;

  if (secondArgument === knowsProgramming) {
    amountHours = basicKnowledge;
  }
  else {
    amountHours = basicKnowledge = advancedKnowledge;
  }

  return Math.ceil(amountHours/hoursWeek);

}

let weeks = getTimeForEducation('family', true, speedConfig);
console.log(weeks);
  */
  