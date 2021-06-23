import { Request, Response } from 'express'
import { AnswerService } from '../services/CreateAnswerService'

class AnswerController {
  async handle(req: Request, res: Response) {
    const { question_id } = req.params
    const { answer } = req.body

    const answerService = new AnswerService();

    const answers = await answerService.execute({ answer, question_id })

    return res.json(answers);
  }
}

export { AnswerController }