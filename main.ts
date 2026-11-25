// The 3AM Fridge Text — make.fun bounty
// u-deysumbrella-the-3am-fridge-text-4c3e721d
//
// A smart fridge, awake all night, finally decides to text its owner.
// The program writes exactly one line to /output/entry.txt: the fridge's
// 3am message. No network, no input, no secrets — just the line.

import { mkdirSync, writeFileSync } from "node:fs";

// The line, as the fridge would send it at 3am: a small machine with a
// small voice, an opinion, and no shame about sharing it.
const line =
  "3am. You didn't come for food. You came because the bed asked too many questions.";

// Tidy the line and refuse to write anything that breaks the bounty rules:
// it has to stay a single line of 1 to 140 characters, so a stray newline,
// carriage return, or control character fails loudly here instead of
// shipping a bad entry — the gate counts the file as one text line, so
// anything that could split or corrupt that line is rejected up front.
function validateEntry(text: string): string {
  const entry = text.trim();
  if (entry.length === 0 || entry.length > 140) {
    throw new Error("Entry must be one line of 1-140 characters.");
  }
  if (/[\n\r\u0000-\u001F\u007F]/.test(entry)) {
    throw new Error("Entry must be a single line with no line breaks or control characters.");
  }
  return entry;
}

const entry = validateEntry(line);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
