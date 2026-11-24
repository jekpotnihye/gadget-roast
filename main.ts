// One-Line Roast entry: writes one roast of an everyday gadget to
// /output/entry.txt. The roast targets the phone battery: a concrete,
// specific daily gripe — a phone that claims all-day battery, but only
// if the day is cut short and the phone is barely used. Kept short and
// plain so the joke lands on a first read.
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "My phone lasts all day, as long as my day ends at 2 p.m. and I never actually use it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
