import { query } from "express";
import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class Answer1624394695049 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("answers", "questionId");

        await queryRunner.addColumn(
            'answers',
            new TableColumn({
                name: "question_id",
                type: "varchar",
                length: "255",
                isNullable: true,
            })
        );

        await queryRunner.createForeignKey(
            'answers',
            new TableForeignKey({
                name: "answerQuestion",
                columnNames: ['question_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'questions',
                onDelete: "CASCADE",
                onUpdate: "CASCADE"
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("answers", "answerQuestion");

        await queryRunner.dropColumn('answers', 'question_id');

        await queryRunner.addColumn(
            'answers',
            new TableColumn({
                name: "questionid",
                type: "varchar",
                length: "255"
            })
        )
    }

}
