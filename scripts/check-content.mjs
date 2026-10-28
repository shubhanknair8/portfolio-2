// Guards the case-study rules before every build.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const errors = [];
const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));

for (const file of walk("src").filter((f) => /\.(tsx?|mdx?)$/.test(f))) {
  const src = readFileSync(file, "utf8");
  src.split("\n").forEach((line, i) => {
    // Spelling: always "Aadhaar"
    if (/aadhar(?!a)|adhaar|adhar/i.test(line) || /aadhaar/.test(line) && !/Aadhaar/.test(line))
      errors.push(`${file}:${i + 1} spell it "Aadhaar"`);
  });
}

for (const file of walk("src/content/projects").filter((f) => f.endsWith(".ts") && !f.endsWith("index.ts"))) {
  const src = readFileSync(file, "utf8");
  // Every outcome card must carry a source
  const cards = src.match(/\{\s*value:[^}]*\}/g) ?? [];
  for (const c of cards) if (!/source:\s*["'`][^"'`]+/.test(c)) errors.push(`${file}: outcome card without a source`);
}

if (errors.length) {
  console.error("Content check failed:\n" + errors.map((e) => "  - " + e).join("\n"));
  process.exit(1);
}
console.log("Content check passed.");
