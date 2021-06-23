import { Request, Response } from 'express'
import { ListQuestionService } from '../services/SingleQuestionService'

class ListQuestionController {
  async handle(req: Request, res: Response) {

    const { question_id } = req.params;

    const questionService = new ListQuestionService;

    const question = await questionService.execute(question_id)

    return res.json(question);

  }
}

export { ListQuestionController }