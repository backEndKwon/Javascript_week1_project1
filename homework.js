//중요 point
//readline으로 입력 된 값은 모두 문자열(string)형태로 반환(숫자도 무조건 문자열로 반환)
//parselnt()함수는 정수로 전환시켜주는 기능
//indexOf()와 includes() 둘다 문자열이나 배열안에 특정요소가 있는지 검사하는 메소드
//차이점은? indexOf() = 검색된 요소가 있으면 해당 요소 반환, 요소가 없을 시 -1 반환
//          includes() = 검색된 요소가 있으면 true 반환, 요소가 없을 시 false 반환
//그래서 특정요소가 배열 안에 있는지 없는 지 검색할때는 includes()메소드를 더 많이 사용하고 간결함 
let numbers1 = [];
let num =0;
console.log(`어서와 게임을 시작하지~`)
// let b = number.push(a) number라는 배열에 a라는 요소를 넣고 그 명칭을 b라고 한다.
while (numbers1.length < 3) {
  let randomnum = Math.floor(Math.random() * 10)
  if (!numbers1.includes(randomnum)) {// !를 사용해서 true일경우 false를, false일경우 true를 반환
    // randomnum가 numbers배열에 없으면 false를 반환하는데 !때문에 true로 되니까 그값을 넣어주면 끝
    numbers1.push(randomnum)
  }
}
console.log(`test용 정답: ` + numbers1)
console.log("GAME START!")

//let numbers = parseInt(numbers1) 사용 못하는 이유!!!!
//위 처럼 하면 numbers1이라는 배열 자체가 정수형으로 변환되는게 아니라, 
//numbers1이라는 배열을 문자열로 변환한 후에 정수형으로 변환되기 때문에, 원하는 결과를 얻을 수 없다.
//따라서, let numbers = [...numbers1]처럼 배열 복사를 이용해 새로운 배열을 만들거나, 직접 변수에 parseInt붙여야 함
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(answer) {
	let ball = 0;
  let strike =0;
  
    for (let i = 0; i < 3; i++) {
       if (numbers1[i] === parseInt(answer[i])) {
          strike += 1;
        }
        else if (numbers1.includes(parseInt(answer[i]))){
          ball +=1;
        }
      }
    
      if (strike === 3){
       console.log(`${num+1}번째 시도만에 정답입니다 게임 종료합니다.`);  
        process.exit();
        }
   
  num += 1;
  console.log(`${num}번째 시도 : ${answer}`);
  console.log(`${strike}S${ball}B`);
});

rl.on("close", ()=>{
	process.exit();
});






// for (let i = 0; i < numbers.length; i++) {
    
//   if (numbers[i] === input[i]) {
//     strike += 1;
     
//   } else if (input.indexOf(numbers[i]) >= 0) {
//     //indexof실행시켰을때 요소 없으면 -1 있으면 0;
//     ball += 1;
//   } 
  
// }

//   let strike = 0;
//   let ball = 0;
//   let num = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === input[i]) {
//       strike += 1;
//     } else if (input.indexOf(numbers[i]) >= 0) {
//       //indexof실행시켰을때 요소 없으면 -1 있으면 0;
//       ball += 1;
//       num += 1;
//     }

// }
// count +=1;


// const equals = (sortnum, sortin) => JSON.stringify(sortin) === JSON.stringify(sortnum); // 밑에 sort한거 비교하기(equal)
// const readline = require("readline");

// const rl = readline.createInterface({
//   // 모듈을 이용해 입출력을 위한 인터페이스 객체 생성
//   input: process.stdin,
// });
// // 생성한 rl 변수를 사용하는 법
// rl.on("line", (line) => {
//   // 한 줄씩 입력받은 후 실행할 코드
//   // 입력된 값은 line에 저장된다.
//   console.log(line);
//    rl.close(); // close가 없으면 입력을 무한히 받는다.
// });
// rl.on('close', () => {
//  console.log("끝났습니다")
//  // 입력이 끝난 후 실행할 코드
// })
// --------------------------------------------------------------------///

// / 1.랜덤 번호뽑기 생성(서로다른 숫자를 가진 3자릿수 => hint 123이 아닌 [1,2,3])
// const number =[];
// let a =  Math.floor(Math.random()*10)

// / 2. strike, ball 판단여부
// // input 값을 받는다 하면
// let input = [1, 2, 3];
// // const newArr = Array.from(input);

// console.log(newArr)
// console.log(`${num}번째 시도 : ${strike}S${ball}B 입니다.`)


// n볼n스트라이크 표시
// for (let i = 0; i < numbers.length; i++) {
//   if(numbers[i] === input[i]){
//     strike += 1;
//   }else if(input.indexOf(numbers[i]) >= 0){
//    //indexof실행시켰을때 요소 없으면 -1 있으면 0;
//     ball += 1;
//   }
//   num+=1;
// }
// console.log(`결과는!! ${strike}S${ball}B 입니다.`)
//  1스트라이크 경우의수
//   if (input[i] === numbers[i]) {
//     console.log(`결과 : 1S 입니다.`)
//   }else if(input[i+1]===(numbers[i]||numbers[i+2])){
//     console.log(`결과 : 1S 1B입니다.`)
//   }else if(input[i+2]===(numbers[i+1]||numbers[i])){
//     console.log(`결과 : 1S 2B입니다.`)
//   }
//   //2스트라이크 경우의수
//   if ((input[i] === numbers[i]&&input[i+1] === numbers[i+1])||(input[i+1] === numbers[i+1]&&input[i+2] === numbers[i+2])||(input[i+1] === numbers[i+1]&&input[i+2] === numbers[i+2])) {
//     console.log(`결과 : 2S 입니다.`)
//   }
//   //3스트라이크 경우의수
//   if ((input[i]===numbers[i])&&(input[i+1]===numbers[i+1])&&(input[i+2]===numbers[i+2])){
//     console.log(`축하합니다!! 3S 입니다.`)
//   }
//   //볼의 경우 1b, 2b, 3b
//   if ((input[i] === (numbers[i+1] || numbers[i+2]))) {
//     console.log(`결과 : 3B 입니다.`)
//   }else if((input[i+1] !== numbers)){
//     console.log(`결과 : 2B 입니다.`)
//   }else if((input[i+1]&&input[i+2] !== numbers)){
//     console.log(`결과 : 1B 입니다.`)
//   }
// }
//   if ((input[i] === numbers[i]) && (input[i+1] !== (numbers[i+1] && numbers[i+1]))) {
//     console.log(`결과 : 1S 입니다.`)
//   }
//   if ((input[i] === numbers[i]) && (input[i+1] === (numbers[i+1] || numbers[i+1]))) {
//       console.log(`결과 : 1S1B 입니다.`)
//     }
//   if ((input[i] === numbers[i]) && (input[i+1] === (numbers[i+1] && numbers[i+1]))) {
//     console.log(`결과 : 1S2B 입니다.`)
//   }
//   if ((input[i] === numbers[i] && input[i] === numbers[i+1]) || (input[i+2] === numbers[i] && input[i+1] === numbers[i+2])) {
//     console.log(`결과 : 2S 입니다.`)
//   }
//   if ((input[i]&&input[i+1]&&input[i+2]) === (numbers[i]&&numbers[i+1]&&numbers[i+2])) {
//     console.log(`축하합니다!! 3S 입니다.`)
//   }
//   if (input[i] !== (numbers[i+1] || numbers[i+2]) && equals(sortnum, sortin)) {
//     console.log(` 3B 입니다.`)
//   }
//   if (input[i] != (numbers[i] && numbers[i] && numbers[i+2])) {
//     console.log(` OUT 입니다.`)
//   }
//   if ((input[i]&&input[i+1]&&input[i+2]) !== (numbers[i]&&numbers[i+1]&&numbers[i+2])) {
//   } else if (input[i] === (number[i+1] || numbers[i+2])) {
//     console.log(` 1B 입니다.`)
//   } else if (input[i] === (number[i+1] || numbers[i+2]) && input[i + 1] === (number[i] || numbers[i+2])) {
//     console.log(` 2B 입니다.`)
//   }
// }
//   if (input[i][i + 1][i + 2] === numbers[i][i + 1][i + 2]) {
//     console.log(`축하합니다!! 3S입니다.`)
//   } else if((input[i]===numbers[i]&&input[i]===numbers[i+1])||(input[i+2]===numbers[i]&&input[i+1]===numbers[i+2])){
//     console.log(`2S입니다.`)
//   } else if(input[i]!==(numbers[i+1]||numbers[i+2]) && equals(sortnum, sortin)){
//     console.log(`3B입니다.`)
//   } else if(input[i]===numbers[i])



