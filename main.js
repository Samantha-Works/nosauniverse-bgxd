const btn = document.getElementById("novaButton");
const statusBox = document.getElementById("status");

btn.addEventListener("click", async () => {

  statusBox.innerText = "Nova Engine: Sending command…";

  try {
    const res = await fetch("/api/deploy", { method: "POST" });
    const data = await res.json();

    if (data.ok) {
      statusBox.innerText = "✅ Nova triggered your Vercel deployment.";
    } else {
      statusBox.innerText = "❌ Nova error: " + data.error;
    }
  } catch (err) {
    statusBox.innerText = "❌ Network error.";
  }
});
