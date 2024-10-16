import { join } from "path";
import zubiDB from "./db";
import { readFileSync } from "fs";

const schemaPath = join("src", "database", "schema.sql");
const schema = readFileSync(schemaPath, "utf-8");
zubiDB.exec(schema);