import { Router } from 'express'

import { QuestionController } from './controllers/CreateQuestionController'
import { AnswerController } from './controllers/CreateAnswerController';
import { GetQuestionController } from './controllers/GetQuestionsController';
import { ListQuestionController } from './controllers/SingleQuestionController';

const router = Router();

const questionController = new QuestionController();
const answerController = new AnswerController();
const getQuestionController = new GetQuestionController();
const listQuestionController = new ListQuestionController();

router.get("/", getQuestionController.handle)
router.get("/question/:question_id", listQuestionController.handle)
router.post("/ask", questionController.handle)
router.post("/answer/:question_id", answerController.handle)

export { router }