function solution(answers) {
  let stu_1 = [1, 2, 3, 4, 5];
  let stu_2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let stu_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let col_1 = 0
  let col_2 = 0
  let col_3 = 0; 

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === stu_1[i%5]) {      
      col_1++;     
    }
    if (answers[i] === stu_2[i%8]) {
      col_2++;
    }
    if (answers[i] === stu_3[i%10]) {
      col_3++;
    }
  }

  answers = val_return(col_1, col_2, col_3);

  return answers;
}

function val_return(a, b, c) {
  let val = [];

  if (a > b && a > c) val = [1];
  if (a > b && a === c) val = [1, 3];
  if (a > b && a < c) val = [3];

  if (a === b && a > c) val = [1, 2];
  if (a === b && a === c) val = [1, 2, 3];
  if (a === b && a < c) val = [3];

  if (a < b && b < c) val = [3];
  if (a < b && b === c) val = [2, 3];
  if (a < b && b > c) val = [2];

  if(a===0&&b===0&&c===0)  val =[];

  return val;
}