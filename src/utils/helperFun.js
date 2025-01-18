import { v4 as uuidv4 } from "uuid";
import { ZodError } from "zod";
import fs from "fs";
import ejs from "ejs";
import { fileURLToPath } from "url";
import * as path from "path";
import moment from "moment";

export const formatError = (error) => {
  let errors = {};
  error.errors?.map((issue) => {
    errors[issue.path?.[0]] = issue.message;
  });

  return errors;
};

export const generateRandomNumber = () => {
  return uuidv4();
};

export const renderEmailEjs = async (fileName, payload) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const parentDir = path.basename(path.dirname(__dirname));
  console.log("Parent Directory:", parentDir);
  const html = await ejs.renderFile(
    path.join(__dirname, "../views/emails", `${fileName}.ejs`),
    payload
  );

  return html;
};
