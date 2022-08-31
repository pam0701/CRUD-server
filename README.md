# CRUD-server

# 사용법

1. 새로운 게시글 보기
http GET localhost:4000/posts 

2. 새로운 게시글 올리기 
http POST localhost:4000/posts title=원하는 내용 입력 content=원하는 내용 입력

3. 게시글 수정
http PUT localhost:4000/posts/1 title=modified content=modified

4. 게시글 삭제
http DELETE localhost:4000/posts/1
