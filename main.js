const btn = document.getElementById("runNova");
const logEl = document.getElementById("logConsole");
const statusEl = document.getElementById("deployStatus");
const clearLog = document.getElementById("clearLogBtn");

function log(line){
  const t=new Date().toTimeString().slice(0,8);
  logEl.textContent += `\n[${t}] ${line}`;
  logEl.scrollTop = logEl.scrollHeight;
}

btn.addEventListener("click", async () => {
  btn.disabled = true;
  btn.textContent = "Launching Nova…";
  statusEl.textContent = "Nova Engine running…";
  log("[NOVA] Deploy command received.");
  alert("🚀 Nova Engine started deploy!");

  try {
    const res = await fetch("/api/deploy");
    const json = await res.json();
    log("[NOVA] Response: " + JSON.stringify(json));
  } catch(err){
    log("[ERROR] " + err.message);
  }

  setTimeout(()=>{
    btn.disabled=false;
    btn.textContent="🚀 Launch & Deploy";
    statusEl.textContent="Idle • Ready";
  },2000);
});

clearLog.addEventListener("click", ()=>{
  logEl.textContent="[00:00:00] [SYSTEM] READY SuperNova Command Deck online.";
});
