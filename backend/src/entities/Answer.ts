import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

import { Question } from "./Question";

@Entity("answers")
class Answer {

  @PrimaryColumn()
  readonly id: String;

  @Column()
  question_id: String;

  @ManyToOne(() => Question)
  @JoinColumn({ name: "question_id" })
  question: Question;

  @Column()
  answer: String;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }

}


export { Answer }
