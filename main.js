// main.js
const novaButton = document.getElementById("novaButton");
const statusEl = document.getElementById("deployStatus");
const logEl = document.getElementById("logConsole");
const simulateBtn = document.getElementById("simulateBtn");
const clearBtn = document.getElementById("clearLogBtn");

function log(line) {
  const now = new Date();
  const t = now.toTimeString().slice(0, 8);
  logEl.textContent += `\n[${t}] ${line}`;
  logEl.scrollTop = logEl.scrollHeight;
}

async function runNovaDeploy() {
  if (!novaButton) return;

  novaButton.disabled = true;
  novaButton.textContent = "Launching…";
  statusEl.textContent = "Nova running deploy sequence…";

  log("[NOVA] CMD Launch & Deploy pressed.");
  log("[SYSTEM] Nova contacting Vercel deploy hook…");

  try {
    const res = await fetch("/api/deploy", { method: "POST" });
    const data = await res.json();

    if (data.ok) {
      log("[NOVA] Deploy hook accepted by Vercel.");
      statusEl.textContent = "Deploy triggered • watching build logs.";
    } else {
      log(`[ERROR] Deploy failed: ${data.error || "Unknown error"}`);
      statusEl.textContent = "Error • check logs.";
    }
  } catch (err) {
    log(`[ERROR] Network problem: ${err.message}`);
    statusEl.textContent = "Error • network or API issue.";
  }

  setTimeout(() => {
    novaButton.disabled = false;
    novaButton.textContent = "🚀 Launch & Deploy";
  }, 2500);
}

if (novaButton) {
  novaButton.addEventListener("click", runNovaDeploy);
}

if (simulateBtn) {
  simulateBtn.addEventListener("click", () => {
    log("[QUEUE] Next obstacle: link Nosa safely.");
    log("[NOSA] Watching Nova outputs for policy breaks.");
  });
}

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    logEl.textContent =
      "[00:00:00] [SYSTEM] READY Samantha’s SuperNova Command Deck online.";
  });
}
