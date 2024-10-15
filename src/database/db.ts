import { Database } from "better-sqlite3";
import {join} from 'node:path'
import { readFileSync } from "node:fs";

const zubiDB = new Database();
console.log(zubiDB);
