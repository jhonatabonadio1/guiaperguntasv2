import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Questions1624386387566 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "questions",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        length: "255",
                        isPrimary: true,
                        generationStrategy: "uuid"
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "description",
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
        await queryRunner.dropTable("questions")
    }

}
