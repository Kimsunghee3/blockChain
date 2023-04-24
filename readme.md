### 한 교시마다 커밋하기

### Bitcoin
블록체인 생태계

백서
비트코인을 구현

### 비트코인
순수한 개인 대 개인 금융기간을 거치지 않고, a, b에게 온라인 결제를 실현
> 전자서명
> 이중지불막음

거래 <-- 흐름을

### transaction

### 암호화

byte bit
16진수
2진수


### Typescript 설정
```sh
$ npm init -y
$ npm install -D typescript tsc-alias ts-node tsconfig-paths nodemon
```

### jest 설정
```sh
$ npm install -D jest @types/jest
$ npm install ts-jest

# 옵션에 typescript를 넣어서 jest를 실행하겠다.
$ npx jest --preset ts-jest
```

### jest 실행
```sh
$ npx ts-jest
```

### jest 실행기
describe함수를 실행할 수 있는 것은 jest라이브러리가 있기에 사용이 가능하다.


### TDD
TDD는 Test-Driven Development(테스트 주도 개발)의 약어로, 소프트웨어 개발 방법론 중 하나입니다. TDD는 테스트를 먼저 작성하고, 그 다음에 코드를 작성하는 방법입니다. TDD를 적용하면 개발자는 테스트 코드를 먼저 작성하여 코드를 작성하기 전에 예상되는 결과를 명확히 이해할 수 있습니다. 이를 통해 코드 품질이 향상되고, 버그를 사전에 발견하고 수정할 수 있습니다.

TDD를 적용하는 방법은 다음과 같습니다.

1. 테스트 코드 작성: 먼저, 테스트 코드를 작성합니다. 이때 테스트 코드는 개발하려는 기능을 정확하게 검증할 수 있어야 합니다.

2. 테스트 실행: 작성한 테스트 코드를 실행합니다. 이때는 해당 테스트가 실패할 것으로 예상됩니다.

3. 코드 작성: 이제 실제 코드를 작성합니다. 이때는 테스트 코드를 통과할 수 있도록 코드를 작성해야 합니다.

4. 테스트 실행: 작성한 코드를 테스트합니다. 이때는 해당 테스트가 성공할 것으로 예상됩니다.

5. 리팩토링: 코드를 개선하고, 중복 코드를 제거하고, 가독성을 높이는 등의 작업을 수행합니다.

위의 과정을 반복하면서 개발을 진행합니다. 이렇게 하면 개발자는 테스트 코드를 작성함으로써 개발하려는 기능을 명확하게 이해하고, 해당 기능을 검증할 수 있습니다. 또한, 테스트를 먼저 작성하므로 코드 품질이 향상되고, 버그를 사전에 발견하고 수정할 수 있습니다. 이러한 이점들로 인해 TDD는 소프트웨어 개발에서 매우 유용한 방법론 중 하나로 인정받고 있습니다.

### 인터페이스의 앞글자는 대문자로 표기해줄 것

### 단위테스트
```ts
// // npm run jest를 할 경우 아래의 함수를 시행시켜주며 내부의 콜백함수도 실행시켜준다.
// // npm run jest를 실행할 경우 

// class Block {
//     private readonly height: number = 10
//     constructor(){}

//     create(){
//         return 15
//     }
// }

// describe("block class", () => {
//     it("block height 속성 존재여부 확인",() => {

//     })
//     it("block create 메서드 존재 여부 확인", ()=> {

//     })
// })
// describe("block test", () => {
//     console.log("hello world")
// })

// // 첫번쨰 인자 값으로 스트링을 많이 사용함 

// user.controller
class userController{
    public num: number = 0
    constructor(){}
    create(){}
}

interface BoardRepository {
    getUserById: () => void
}

interface boardWriteDTO {
    email : string
    subject : string
    content : string
    hashtag : string
    category : string
    images : string
    thumbnail : string
}

class BoardService{
    constructor(private readonly boardRepository: BoardRepository){}
    public postWrite(data: boardWriteDTO){

    }
}

class BoardController {
    constructor(private readonly boardService: BoardService){}
    public write(){
        const data: boardWriteDTO = {
            email: "",
            subject: "",
            content: "",
            hashtag: "",
            category: "",
            images: "",
            thumbnail:"",
        }
        this.boardService.postWrite(data)
    } 
}

describe("user controller 검증", () => {
    let result:{name: string} = {name: ""}
    let user: userController

    afterAll(() => {})
    afterEach(() => {})

    beforeAll(() => {
        result = {name: 'hello world'}
    })
    beforeEach(() => {
        user = new userController()
        console.log("beforeEach")
    })
    it("create()함수가 잘 실행하는가", () => {
        // req.body
        // service 메서드가 잘 작동하는지
        // res.send res.json 내가 원하는 객체가 잘 들어가는지
        // expect, matcher + .을 했을 때 자동으로 뜨는 항목들을 lecture함수라고 한다.
        // 주로 toBe를 많이 사용한다.
        // 1과 1이 같은 가
        // const user = new userController()
        user.num = 10
        expect(1).toBe(user.num)
    })
    it("create() 메서드 예외처리가 잘되는가", () => {
        // req.body 강제로 다른 값으로 바꾼다음에
        // service 메서드 호출을 강제로 에터트림
        // catch문으로 잘 빠지는지
        // next 함수가 잘 작동하는지
        // const user = new userController()
        expect(0).toBe(user.num)
    })
})

describe("board service", () => {
    let boardService: BoardService
})

```

### board service를 테스트
- board service를 테스트하기 위해서 인스턴스를 생성해줬다.


```json
"jest": {
    "preset": "ts-jest",
    "testEnvironment": "node",
    "moduleMapper": {
      // 정규표현식 외우셈
      "^@(board | core)/(.+) $":"<rootDir>/src/$1/$2"
      // @board/asdf
      // @core/asdf
    }

```

### TDD