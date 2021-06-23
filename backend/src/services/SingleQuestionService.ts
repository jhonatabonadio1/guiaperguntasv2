import { getCustomRepository } from "typeorm";

import { QuestionRepository } from "../repositories/CreateQuestionsRepository";
import { AnswersRepository } from "../repositories/CreateAnswersRepository";

class ListQuestionService {
  async execute(question_id: string) {

    const answerRepository = getCustomRepository(AnswersRepository)
    const questionRepository = getCustomRepository(QuestionRepository)

    const questionCheck = await questionRepository.findOne({
      where: {
        id: question_id
      }
    })

    const answerQuestionCheck = await answerRepository.find({
      where: {
        question_id
      }
    })

    if (!questionCheck) {
      throw new Error("Question is not exists.")
    }



    const checkResult =
    {
      id: questionCheck.id,
      title: questionCheck.title,
      description: questionCheck.description,
      created_at: questionCheck.created_at,
      updated_at: questionCheck.updated_at,
      answers: answerQuestionCheck
    }

    return checkResult;

  }
}

export { ListQuestionService }