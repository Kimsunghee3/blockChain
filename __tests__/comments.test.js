import CommentService from "comment/commentService"

describe("comment service", () => {
    let commentService: CommentService

    beforeEach(() => {
        commentService = new commentService()
    })

    it("commentservice 인스턴스 확인하기", () => {
        console.log(commentService)
        expect(typeof commentService).toBe("object")
        expect(commentService instanceof commentService).toBeTruthy()
    })
    //서비스 안에서 테스트할 함수
    describe('comment write', () => {
        it("write 메서드가 존하는지 확인", () => {
            expect(typeof commentService.write).toBe("function")
        })

        it("write 매개변수가 잘 작성되어 있는가?", () => {
            const data: CommentWriteDTO = {
                writer: "web7722",
                comment: "안녕하세요",
                boardid: 0,
            }

            const result = commentService.write(data)
            expect(result).toBe({id:0, writer: "chop", comment: 'hello', boardid: 0})
        })
    })
})