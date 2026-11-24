// One-Line Roast entry: writes one roast of an everyday gadget to
// /output/entry.txt. The roast targets the charging cable: a concrete,
// specific daily gripe — a cable that only charges when bent at one
// exact angle, so keeping the phone alive becomes a balancing act.
// A fresh visual comparison carries the joke in one read.
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "My charger only charges if the cable leans left at one exact angle, like it is doing yoga to keep my phone alive.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast, "utf8");
