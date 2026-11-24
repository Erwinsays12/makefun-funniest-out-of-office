// The Funniest Out-of-Office — make.fun entry
// Writes one original out-of-office auto-reply line to /output/entry.txt.
// Deterministic: the same line on every run, no input, no clock, no network.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm out of office. Your email will be answered strictly in the order it was ignored.";

const MAX_CHARS = 140;

function main(): void {
  const chars = [...LINE];
  if (chars.length < 1 || chars.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters, got ${chars.length}`,
    );
  }
  if (LINE.trim() !== LINE || LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be exactly one line with no surrounding whitespace");
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, LINE, "utf8");
  // Round-trip check: what was written must read back byte-identical.
  const written = readFileSync(outPath, "utf8");
  if (written !== LINE) {
    throw new Error("round-trip check failed: entry.txt does not match the line");
  }
  console.log(`wrote ${chars.length} characters to ${outPath}`);
}

main();
