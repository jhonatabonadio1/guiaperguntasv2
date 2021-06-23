import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Answer1624392585167 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "answers",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length: "255",
                        isPrimary: true,
                        generationStrategy: "uuid"
                    },
                    {
                        name: "questionId",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "answer",
                        type: "text",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ]
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("answers")
    }

}
