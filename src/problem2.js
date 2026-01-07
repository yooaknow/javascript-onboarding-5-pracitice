function checkRepeat(cryptogram) {
  let copy_cryptogram = cryptogram;
  // 원본 값은 그대로 두고, 작업은 복사본에서 
  let isRepeated = false;
  // 이번 검사에서 중복이 있었는 지 표기하는 깃발



  for (let i = 0; i < copy_cryptogram.length - 1; i++) {
    if (copy_cryptogram[i] === copy_cryptogram[i + 1]) {
      copy_cryptogram = copy_cryptogram.slice(0, i) + copy_cryptogram.slice(i + 2);
      //i의 앞 쪽까지 자르기 + i의 뒷쪽 잇기 
      isRepeated = true;
    }
  }

  // 

  return {
    copy_cryptogram,
    isRepeated,
  };
}

function problem2(cryptogram) {
  let _cryptogram = cryptogram;
  // 원래 값은 건들지 않고 입력한 걸 저장
  let changed = true;

  while (changed) {
    const { isRepeated, copy_cryptogram } = checkRepeat(_cryptogram);
    _cryptogram = copy_cryptogram;
    changed = isRepeated; // 계속 true인 지 확인 
  }


  //true가 나올 때까지 반복하여 작업
  

  return _cryptogram;
}

// console.log(problem2("browoanoommnaon"));
// console.log(problem2("zyelleyz"));

module.exports = problem2;
