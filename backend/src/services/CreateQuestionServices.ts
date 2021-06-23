import { getCustomRepository } from "typeorm";
import { QuestionRepository } from "../repositories/CreateQuestionsRepository";

interface IQuestionRequest {
  title: string;
  description?: string;
}

class QuestionService {
  async execute({ title, description }: IQuestionRequest) {

    const questionRepository = getCustomRepository(QuestionRepository)

    if (!title) {
      throw new Error("Write a question.")
    }

    if (!description) {
      description = "";
    }

    const question = questionRepository.create({
      title,
      description
    })

    await questionRepository.save(question);

    return question;

  }
}

export { QuestionService }