import { Request, Response } from 'express'
import { QuestionService } from '../services/CreateQuestionServices'

class QuestionController {
  async handle(req: Request, res: Response) {

    const { title, description } = req.body;

    const questionService = new QuestionService();

    const question = await questionService.execute({ title, description })

    return res.json(question)
  }
}

export { QuestionController }