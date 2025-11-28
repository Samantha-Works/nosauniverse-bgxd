async function runNova() {
  const output = document.getElementById("statusOutput");
  output.textContent = "Contacting Nova Engine…";

  try {
    const res = await fetch("/api/deploy", { method: "POST" });
    const data = await res.json().catch(() => ({}));

    if (res.ok && data.ok) {
      output.textContent =
        "✅ Deploy triggered.\n\n" +
        JSON.stringify(data, null, 2);
    } else {
      output.textContent =
        "⚠️ Deploy call returned an error.\n\n" +
        JSON.stringify(data, null, 2);
    }
  } catch (err) {
    output.textContent = "❌ Nova Engine error: " + err.message;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("novaButton");
  btn.addEventListener("click", runNova);
});
