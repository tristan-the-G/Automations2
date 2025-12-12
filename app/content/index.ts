import { en } from "./en";
import { de } from "./de";

export const getTexts = (lang: "en" | "de") => lang === "de" ? de : en;
