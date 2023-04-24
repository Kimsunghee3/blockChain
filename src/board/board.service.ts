import { BoardModel, BoardRepository, boardWriteDTO } from "./board.interfaces"

class BoardService {
    constructor(private readonly boardRepository: BoardRepository) {}

    public async postWrite(data: boardWriteDTO): Promise<BoardModel> {
        const { email } = data; // asdf
        const { username } = await this.boardRepository.getUserById(email); // web7722
        return { username }
    }
}

export default BoardService