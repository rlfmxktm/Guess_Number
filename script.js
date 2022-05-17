let secretNumber = 20;
let score = 20;
let highestRecord = 0;
let guess_num = [];
//첫화면일때
document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('.score').textContent = '🎯남은 횟수 : ' + score;
  document.querySelector('.message').textContent = '숫자를 맞춰 보세요!';
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.record').textContent = '💎최고 기록 : ' + 0;
  document.querySelector('.wrong').textContent = '❌틀린 숫자 : ' + guess_num;
  console.log(secretNumber);
});

// 체크버튼을 눌렀을때
document.querySelector('.check-btn').addEventListener('click', function () {
  let inputNumber = document.querySelector('.guess-number').value;
  console.log(inputNumber === secretNumber); // inputNumber true
  console.log(secretNumber);
  if (inputNumber == secretNumber) { // 입력 숫자와 정답이 같다면
    document.querySelector('.message').textContent = '정답입니다!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#43BFDE';
    if (score > highestRecord) {
      document.querySelector('.record').textContent = '💎최고 기록: ' + score;
    }
    return;
  } 
  
  else if (inputNumber < secretNumber) { //맞춰야 하는 숫자가 입력값보다 클때
    document.querySelector('.message').textContent = '숫자가 너무 작습니다!';
    score--;
    if(score<0) score = 0;

    if(!guess_num.includes(inputNumber)) guess_num.push(inputNumber);

  } else {
    document.querySelector('.message').textContent = '숫자가 너무 큽니다!';
    score--;
    if(score<0) score = 0; // 스코어가 0보다 작으면 0
  
    if(!guess_num.includes(inputNumber)) guess_num.push(inputNumber);
 //게스넘이 인풋넘을 포함하고 있지 않으면 인풋넘을 게스넘에 추가한다.

 /*guess_num.push(inputNumber);*/
  }

  document.querySelector('.score').textContent = '🎯남은 횟수: ' + score;
  document.querySelector('.wrong').textContent = '❌틀린 숫자 : ' + guess_num ;
});


// 다시하기를 눌렀을때
document.querySelector('.again-btn').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = '🎯남은 횟수: ' + score;
  document.querySelector('.message').textContent = '숫자를 맞춰 보세요!';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 130, 0.9)';
  
  guess_num = [];

  document.querySelector('.wrong').textContent = '❌틀린 숫자 : ' + guess_num ;
});

/*
Math.floor() : 소수값이 있을때 소수점 이하를 버린다.(내린다)

Math.floor(Math.random( )) ---> random method가 뱉은 긴 소수들의 소수값들이 잘린다.

Math.floor(Math.random( )*5) --->  0이상 1미만의 긴 소수들에 5를 곱하고 소수값들을 버리면 0 이상 5 미만의 정수들이 나온다.

Math.floor(Math.random( )*5 + 1) --->  1이상 6미만의 정수들이 나온다. 
*/