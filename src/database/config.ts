import { Sequelize } from "sequelize";
import { databaseConfig } from "@/config";

export const sequelize = new Sequelize(
  databaseConfig.database,
  databaseConfig.user,
  databaseConfig.password,
  {
    host: databaseConfig.server,
    dialect: "mssql",
    dialectOptions: {
      options: {
        encrypt: databaseConfig.options.encrypt,
        enableArithAbort: databaseConfig.options.enableArithAbort,
      },
    },
  }
);
