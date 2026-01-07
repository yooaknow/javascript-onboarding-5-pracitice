function addDigit(num) {
  return [...String(num)].reduce((prev, next) => Number(prev) + Number(next));
}
// String(num) -> 숫자를 문자열로 바꿔줌, [..."97"] -> 문자열을 하나씩 쪼개서 배열로 만들어줌
// [...String(97)] // ["9", "7"]
// [...String(123)] // ["1", "2", "3"] 그리고 reduce 누적합


function multiplyDigit(num) {
  return [...String(num)].reduce((prev, next) => Number(prev) * Number(next));
}

function findMaxNum(pageArr) {
  const nums = [];
  pageArr.map((page) => {
    nums.push(addDigit(page));
    nums.push(multiplyDigit(page));
  });

// 97일 때:

// addDigit(97) → 16
// multiplyDigit(97) → 63
// → nums = [16, 63]

// 98일 때:

// addDigit(98) → 17
// multiplyDigit(98) → 72
// → nums = [16, 63, 17, 72]

  return Math.max(...nums);
  // 제일 큰 값 찾기 Math.max(16, 63, 17, 72) → 72
}

function calculateScore(pobi, crong) {
  if (pobi > crong) return 1;
  else if (pobi < crong) return 2;
  else if (pobi === crong) return 0;
}

function checkValidPage(pageArr) {
  const [prevPage, nextPage] = pageArr;
  // 구조 분해 할당 [97,98]이면, prevPage = 97, nextPage = 98

  // number인지 확인
  if (typeof prevPage !== "number" || typeof nextPage !== "number")
    return false;

  // nextPage가 prevPage보다 1 큰지 확인
  if (nextPage - prevPage !== 1) return false;

  return true;
}

//

function problem1(pobi, crong) {
  if (!checkValidPage(pobi) || !checkValidPage(crong)) return -1;

  const pobiNum = findMaxNum(pobi);
  const crongNum = findMaxNum(crong);
  const finalScore = calculateScore(pobiNum, crongNum);

  return finalScore;
}

// 포비 페이지, 크롱 페이지가 정상인지 검사 
// 포비 점수 계산
// 크롱 점수 계산
// 점수 비교해서 1, 2, 0 -1 중 하나 리턴 

// console.log(problem1([97, 98], [197, 198]));
// console.log(problem1([131, 132], [211, 212]));
// console.log(problem1([99, 102], [211, 212]));

module.exports = problem1;
