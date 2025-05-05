import Prism from "prismjs";
import "prismjs/components/prism-typescript";
import { fullCode } from "./fullCode";

export const highlightedCode = Prism.highlight(
  fullCode,
  Prism.languages.typescript,
  "typescript",
);
