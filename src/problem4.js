function getOppositeChar(word, idx) {
  let opposite;
  const charCode = word.charCodeAt(idx);
  // 문자를 숫자로 바꿈

  if (charCode >= 65 && charCode <= 90) {
    opposite = String.fromCharCode(155 - charCode);
    // 반대로 자신의 수를 계산
  } else if (charCode >= 97 && charCode <= 122) {
    opposite = String.fromCharCode(155 - word.toUpperCase().charCodeAt(idx)).toLowerCase();
    // 소문자인 경우 -> 먼저 대문자로 바꾸고, 위와 같은 공식 사용 -> 다시 소문자로 내림
  } else {
    opposite = word[idx];
    // 알파벳이 아니면 그대로 
  }

  return opposite;
}

function problem4(word) {
  return [...word].map((_char, idx) => getOppositeChar(word, idx)).join("");
} // 문자열을 배열로 쪼개고 다시 위의 함수에 넣기 

// console.log(problem4("I love you"));

module.exports = problem4;
