function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  function getGrade(score) {
   if (score === 100 )  {
     return  "A++"
   }
   if (score >= 90 )  {
     return  "A";
   }
   if (score >= 80 )  {
     return  "B";
   }
   if (score >=70 )  {
     return  "C";
   }
   if (score >=60 )  {
     return  "D";
   }
   else {
     return "F";
   }
  }
  
  function hasPassingGrade(score) {
    if (score >= 60) {
       return true
    }
    else {
      return false
    }
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));