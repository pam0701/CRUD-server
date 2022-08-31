/** @format */

//@ts-check

const posts = [
  { id: 1, title: 'first post', content: 'love' },
  {
    id: 2,
    title: 'seconde post',
    content: 'sorry',
  },
  {
    id: 3,
    title: 'third post',
    content: 'thanks',
  },
  {
    id: 4,
    title: 'fourth',
    content: 'wait',
  },
];
const http = require('http');
const PORT = 4000;
const server = http.createServer((req, res) => {
  //들어온 url을 슬래시를 기준으로 자르기 : id확인때문..
  const urlArr = req.url ? req.url.split('/') : [];
  let id = -1;

  //id가 있는지 확인
  if (urlArr.length > 2) {
    id = parseInt(urlArr[2], 10);
  }

  //COMMON(no request id) :req.url과 req.method를 이용해서 분기 생성
  //request id: id!==-1 일때를 사용해서 분기 생성
  if (req.method == 'GET' && req.url === '/posts') {
    /* 전체 목록 읽기 */
    console.log('블로그 전체 글 불러오기 API');

    //핵심
    const result = {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
        content: post.content,
      })),
      totalCount: posts.length,
    };

    res.setHeader('Content-Type', 'application/json; charset=utf8');
    res.statusCode = 200;
    res.end(JSON.stringify(result));
  } else if (req.method == 'GET' && id !== -1) {
    /* 특정 id의 글 읽기 */
    const result = posts.find((post) => post.id === id); //!!! find 메소드 이용한 코드
    res.setHeader('Content-Type', 'application/json; charset-utf8');

    if (result) {
      // 여기 부분이 핵심 코드!
      /* result가 true일 때! */
      res.statusCode = 200;
      res.end(JSON.stringify(result));
    } else {
      /* result가 false, 즉 undefined */
      res.statusCode = 404;
      res.end(console.error());
    }
  } else if (req.method == 'POST' && req.url === '/posts') {
    /* 글 생성(id는 중복x 새로운 id 생성해서) */
  } else if (req.method === 'PUT' && id !== -1) {
    /* 특정 id의 글 수정 */
  } else if (req.method === 'DELETE' && id !== -1) {
    /* 특정 id의 글 삭제 */
  } else {
    /*  위의 어떤 분기에도 해당하지 않을 때 잘못된 url이라고 404 전송*/
  }
});

server.listen(PORT, () => {
  console.log(`${PORT}번에서 실행 중입니다.`);
});
