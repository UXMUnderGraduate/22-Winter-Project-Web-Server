# 2021 Winter Project - Web Server

## 개발 주제
음원 소비 플랫폼의 웹 백엔드 서버 구현

## 기술스택
Nodejs v12.0.0 이상

Nest Js

## 서버 실행하기
```bash
git pull // 최신 파일로 업데이트하기
npm i // package 다운 받기(1번만 받으면 된다. node_modules 폴더 존재 해야함.)
npm run start:dev // 서버 실행하기
```

## API 주소
1. Sign Up
- api : http://localhost:8000/api/v1/user/signup
- req.body : 
```json
// json / formdata
{
    "email" : "test1@domain.com",
    "password" : "test1",
    "nickname" : "test1",
    "metamaskId" : "test1"
}
```
- res.body :
```json
{
    "id": "621340c45a422ca4f5e0dc02",
    "email": "test2@domain.com",
    "nickname": "test2",
    "metamaskId": "test2"
}
```


