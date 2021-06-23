import { getCustomRepository } from "typeorm";

import { AnswersRepository } from "../repositories/CreateAnswersRepository";
import { QuestionRepository } from "../repositories/CreateQuestionsRepository";

interface IAnswerRequest {
  answer: String;
  question_id: String;
}

class AnswerService {
  async execute({ answer, question_id }: IAnswerRequest) {

    const answersRepository = getCustomRepository(AnswersRepository)
    const questionRepository = getCustomRepository(QuestionRepository)

    if (!answer) {
      throw new Error("Write a answer.")
    }

    const questionCheck = await questionRepository.findOne({
      where: {
        id: question_id
      }
    })

    if (!questionCheck) {
      throw new Error("Invalid Question ID.")
    }

    const answers = answersRepository.create({
      answer,
      question_id
    })

    await answersRepository.save(answers)

    return answers;

  }
}

export { AnswerService }