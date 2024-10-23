import Database from "better-sqlite3";

let dbName = "development.sqlite";

if (process.env.DB_TYPE === "test") {
  dbName = "test.sqlite";
}

const zubiDB = new Database(dbName);

export default zubiDB;
