function problem5(money) {
  const changes = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const result = [];

  changes.map((change) => {
    result.push(Math.floor(money / change)); //돈 단위를 몇 개 쓸 수 있는가
    money %= change; // 남은 돈으로 업데이트 
  });

  return result;
}

// console.log(problem5(50237));
// console.log(problem5(15000));

module.exports = problem5;
