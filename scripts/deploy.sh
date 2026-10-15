#!/usr/bin/env bash
# Build the static site and publish it to the GitHub Pages repo (goggxi.github.io).
# Usage: pnpm run deploy   (SITE_REPO defaults to ../goggxi.github.io)
set -euo pipefail

SITE_REPO="${SITE_REPO:-../goggxi.github.io}"

pnpm build
bash scripts/build-cv-pdf.sh
rsync -a --delete --exclude .git --exclude .gitignore out/ "$SITE_REPO"/
printf '.DS_Store\n' > "$SITE_REPO/.gitignore"

cd "$SITE_REPO"
git add -A
git commit -m "Deploy portfolio $(date +%Y-%m-%d)"
git push
