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

