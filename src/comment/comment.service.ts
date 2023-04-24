import { CommentWriteDTO } from "./comment.interface";
import CommentRepository from "./comment.repository";

class CommentService {
    constructor(private readonly commentRepository: CommentRepository){}

    write(data: CommentWriteDTO){
        // data
        // repository(data)
        // return repository(data)
        return result
    }
}

export default CommentService