import { writeFileSync, mkdirSync } from "node:fs";

// Two-line entry: line 1 warns the past self about one specific moment
// (the printer jamming on demo morning); line 2 traces what that moment
// changed (print the backup the night before, never unprepared again).
const line1 = "Do not trust the printer on the morning of the demo — it will jam on page one, in front of everyone, while the client is watching.";
const line2 = "That jam taught me to print the backup the night before, and I have never walked into a demo unprepared since.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, `${line1}\n${line2}`);
