function countClaps(i) {
  const target = "369";
  const claps = [...String(i)].filter(num => target.includes(num)).length 

  return claps;
}

// i는 박수를 몇번 쳤는 지 확인 
// target은 3,6,9
// i가 들어오면 문자열로 바꿔서 -> 하나하나 분리 
//  target에 포함되어있는 지 확인 

function problem3(number) {
  let cnt = 0;

  for (let i = 1; i <= number; i++) {
    cnt += countClaps(i)
  }

  return cnt;
}

// console.log(problem3(13))
// console.log(problem3(33))

module.exports = problem3;
