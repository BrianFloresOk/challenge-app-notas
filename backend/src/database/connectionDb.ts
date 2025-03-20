import { DataSource } from "typeorm";
import { Task } from "./entity/tasksModel";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/db.sqlite",
    entities: [Task],
    synchronize: true,
    logging: false
});
