// Unsent: The Micro-Confession Sprint — one micro-confession.
// Writes one fixed, deterministic text to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR). No network, no randomness, no input.
// The confession: a childhood lie about the family dog, carried ever since
// as a nightly ritual. The fault is admitted outright, the lie is named,
// and the reason it stayed unsent is felt in the ritual alone — never
// stated, never explained. Entry text unchanged by this edit.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "To: my little sister\nI told you Biscuit ran away, but I left the gate open the summer I turned nine, and I've checked the lock twice every night since I was nine.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf-8");
