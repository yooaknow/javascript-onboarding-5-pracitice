function checkSimiliarity(name1, name2) {
  let name1_flag = -1;
  let name2_flag = -1;
  // 아직 아무 글자도 안 맞았을 때 -> -1로 두기 
  let similiarity = false;


  // 이름 두 개가 비슷한지 판별
  for (let i = 0; i < name1.length; i++) { // name1의 모든 글자
    for (let j = 0; j < name2.length; j++) { // name2의 모든 글자 
      if (name1[i] === name2[j]) { // 글자가 같으면 
        if (
          name1_flag !== -1 && // 이전 글자가 같은 지 확인
          name2_flag !== -1 &&
          i - name1_flag === 1 && // 이후 글자가 같은 지 확인
          j - name2_flag === 1
        ) {
          similiarity = true; // 연속이면 true 반환
          break;
        }
        name1_flag = i; // 아니라면 그대로 업데이트 
        name2_flag = j;
      }
    }
  }

  return similiarity;
}

// 비슷한 이름 목록 만들기 
function checkDuplication(names) {
  const duplicates = []; // 비슷한 이름들을 담는 바구니 

  for (let i = 0; i < names.length - 1; i++) {
    for (let j = i + 1; j < names.length; j++) { 
      const isSimilar = checkSimiliarity(names[i], names[j]);
      //여기서 함수 호출 

      if (isSimilar) {
        if (!duplicates.includes(names[i])) {
          duplicates.push(names[i]);
        } //이미 있으면 넣어라 

        if (!duplicates.includes(names[j])) {
          duplicates.push(names[j]);
        }
      }
    }
  }

  return duplicates;
}

function problem6(forms) {
  const form_obj = {}; //이름을 key, 이메일을 value 로 저장
  const names = []; // 이름만 따로 모아 둠
 
  forms.map((form) => {
    const [email, name] = form;

    form_obj[name] = email;
    names.push(name);
  });

  const duplicates = checkDuplication(names);
  const sorted_duplicate_email = duplicates.map((duplicate) => form_obj[duplicate]).sort();

  return sorted_duplicate_email;
}

// console.log(problem6([
//   ["jm@email.com", "제이엠"],
//   ["jason@email.com", "제이슨"],
//   ["woniee@email.com", "워니"],
//   ["mj@email.com", "엠제이"],
//   ["nowm@email.com", "이제엠"],
// ]));

module.exports = problem6;
