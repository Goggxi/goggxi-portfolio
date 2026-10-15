#!/usr/bin/env bash
# Print the static /cv page to out/Moh-Rifkan-CV.pdf (DATA.cvPdfUrl) with headless Chrome.
# Run after `pnpm build`. Override the browser path with CHROME=/path/to/chrome.
set -euo pipefail

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
PDF="out/Moh-Rifkan-CV.pdf"
PORT="${CV_PORT:-4599}"

python3 -m http.server "$PORT" -d out >/dev/null 2>&1 &
SERVER_PID=$!
PROFILE_DIR="$(mktemp -d)"
trap 'kill "$SERVER_PID" 2>/dev/null; rm -rf "$PROFILE_DIR"' EXIT
sleep 1

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --user-data-dir="$PROFILE_DIR" --virtual-time-budget=5000 \
  --print-to-pdf="$PWD/$PDF" "http://localhost:$PORT/cv.html"

echo "CV written to $PDF"
