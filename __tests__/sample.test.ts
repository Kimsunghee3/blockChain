import { BoardRepository, boardWriteDTO } from "@board/board.interfaces"
import BoardService from "@board/board.service"

describe("board service", () => {
    let boardService: BoardService;
    let boardRepository: BoardRepository;

    beforeEach(() => {
        boardRepository = {
        getUserById: jest.fn().mockResolvedValue({ username: "web7722", email: "asdf", subject: "subject" }),
        };
        boardService = new BoardService(boardRepository);
});

it("postWrite", async () => {
    const dto: boardWriteDTO = {
    email: "asdf",
    subject: "asdf",
    content: "asdf",
    hashtag: "asdf",
    category: "asdf",
    images: "asdf",
    thumbnail: "asdf",
    };
    const { username } = await boardService.postWrite(dto)
        expect(boardRepository.getUserById).toBeCalledWith(dto.email)
        expect(boardRepository.getUserById).toBeCalledTimes(1)
    });
});
