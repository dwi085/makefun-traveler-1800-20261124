// One Sentence for a Traveler from 1800
// Writes exactly one sentence (at most 200 characters) explaining the modern
// internet to a time traveler from 1800, to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR when set). Deterministic, no network, exit 0.
// The sentence is 167 characters long: one image, built only from things
// a person from 1800 already knows — post offices, libraries, markets,
// wires, letters, voices, books — and the ink drying before a letter arrives.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "Imagine every post office, library, and market in the world joined by wires, so a letter, a voice, or a whole book travels from London to Boston before the ink is dry.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
