import { getCustomRepository } from "typeorm";

import { QuestionRepository } from "../repositories/CreateQuestionsRepository";

class GetQuestionService {
  async execute() {

    const questionRepository = getCustomRepository(QuestionRepository)

    const questionCheck = await questionRepository.find()


    if (!questionCheck) {
      throw new Error("No available questions.")
    }


    return questionCheck;

  }
}

export { GetQuestionService }