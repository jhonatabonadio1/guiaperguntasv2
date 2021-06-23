import { Request, Response } from 'express'
import { GetQuestionService } from '../services/GetQuestionsService'

class GetQuestionController {
  async handle(req: Request, res: Response) {


    const questionService = new GetQuestionService;

    const questions = await questionService.execute()

    return res.json(questions);

  }
}

export { GetQuestionController }