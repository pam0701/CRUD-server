// @ts-check

const fs = require('fs').promises;

async function main() {
  let data = await fs.readFile('readme.txt', 'utf-8');
  console.log('1번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
  console.log('2번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
  console.log('3번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
  console.log('4번', data);
}
main();

/* -------------------Start Promise를 사용하여 콜백지옥 살려보기---------------- */
/* const fs = require('fs').promises;

//promises라는 객체로 바꿔서 readfile은 알아서 resolve를 해주어서 잘 수행되면 then을 수행, data가 console로 실행
fs.readFile('readme.txt', 'utf-8')
  .then((data) => {
    console.log('1번', data);
    return fs.readFile('readme.txt', 'utf-8');
  })
  .then((data) => {
    console.log('2번', data);
    return fs.readFile('readme.txt', 'utf-8');
  })
  .then(function (data) {
    console.log('3번', data);
    return fs.readFile('readme.txt', 'utf-8');
  })
  .then((data) => {
    console.log('4번', data);
    return fs.readFile('readme.txt', 'utf-8');
  })
  .catch((err) => {
    console.log('error');
    throw err;
  }); */
/* ----------------End Promise를 사용하여 콜백지옥 살려보기------------- */

/* -------------------Start Promise 사용해보기---------------- */
// 원하는 기능 달성 시 resolve를 수행시킴, 거절되면 reject가 수행되어 catch를 이용하여 error 처리를 해준다.
// resolve -> then, reject -> catch
/* const promise = new Promise((resolve, reject) => {
  const klaus = 'van';
  if (klaus === 'van') {
    setTimeout(function () {
      resolve('klaus is van');
    }, 3000);
  } else {
    reject('klaus is totally van');
  }
});

promise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (data) {
    console.log(data);
  }); */
/* -------------------End Promise 사용해보기---------------- */

/* File-system with Promise */
/* const fs = require('fs');

let data = fs.readFileSync('readme.txt', 'utf-8');
console.log('1번', data);
data = fs.readFileSync('readme.txt', 'utf-8');
console.log('2번', data);
data = fs.readFileSync('readme.txt', 'utf-8');
console.log('3번', data);
data = fs.readFileSync('readme.txt', 'utf-8');
console.log('4번', data); */

// 1번 일꾼이 실행되고 나서 2번 일꾼을 실행, 그리고 2번 일꾼 실행 후 3번, 그 다음 4번 실행
/* --------------Start 콜백 지옥---------------- */
/* fs.readFile('readme.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번 일꾼', data);

  fs.readFile('readme.txt', 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log('2번 일꾼', data);

    fs.readFile('readme.txt', 'utf-8', function (err, data) {
      if (err) {
        throw err;
      }
      console.log('3번 일꾼', data);

      fs.readFile('readme.txt', 'utf-8', (err, data) => {
        if (err) {
          throw err;
        }
        console.log('4번 일꾼', data);
      });
    });
  });
}); */
/* --------------End 콜백 지옥---------------- */

/* ------------Start File-system(txt 파일 만들거나 내용 덮어쓸 수 있는 기능)-------------*/
/* const fs = require('fs');
const str = '파일 쓰기가 정상적으로 수행되면 이 문구가 파일에 들어갑니다.';

fs.writeFile('readme.txt', str, 'utf-8', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('writefile succeed');
  }
}); */
/* ---------------End File-system(txt 파일 만들거나 내용 덮어쓸 수 있는 기능)------------- */

/* fs.readFile('readme.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
 */
