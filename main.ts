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

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
