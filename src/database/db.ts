import Database from "better-sqlite3";
import { join } from "node:path";
import { readFileSync } from "node:fs";

const zubiDB = new Database("development.sqlite");
console.log(zubiDB);

const schemaPath = join("src", "database", "schema.sql");
const schema = readFileSync(schemaPath, "utf-8");
zubiDB.exec(schema);

const data = zubiDB.prepare("SELECT * FROM tutors").all();
// console.log(data);
export default zubiDB;
