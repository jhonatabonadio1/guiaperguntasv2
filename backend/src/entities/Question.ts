import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("questions")
class Question {
  map(arg0: (question: any) => any) {
    throw new Error('Method not implemented.');
  }

  @PrimaryColumn()
  readonly id: String;

  @Column()
  title: String;

  @Column()
  description: String;

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


export { Question }
