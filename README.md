## BarrackLifeX 서버

BarrackLifeX의 node.js 서버입니다. 다음과 같은 데이터를 관리합니다:

* 메모 보고
* 일정
* 사용자 정보


## 서버 오브젝트 정리

### 유저 정보
#### blx_users
| 컬럼명 | 데이터 타입 | 설명 |
| ----- | --------- | --- |
| user_id | string | 사용자 로그인 아이디 |
| user_pw | string | 사용자 로그인 비밀번호 (SHA256 암호화) |
| user_name | string | 사용자 성명 |
| user_phone_no | string | 사용자 전화번호 |
| user_rank | int | 사용자 계급 (references: blx_ranks) |
| user_rank | int | 사용자 계급 (references: blx_ranks) |