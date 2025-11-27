document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("novaButton");
  const status = document.getElementById("status");

  if (!btn) return;

  btn.addEventListener("click", async () => {
    status.textContent = "Nova: sending deploy signal...";
    btn.disabled = true;

    try {
      const res = await fetch("/api/deploy", { method: "POST" });
      const data = await res.json();

      if (data.ok) {
        status.textContent = "Nova: deploy triggered successfully via Vercel.";
        alert(JSON.stringify(data));
      } else {
        status.textContent = "Nova: deploy failed — check logs.";
        alert("Deploy error: " + (data.error || "unknown"));
      }
    } catch (err) {
      console.error(err);
      status.textContent = "Nova: something went wrong talking to the API.";
      alert("Request failed: " + err.message);
    } finally {
      btn.disabled = false;
    }
  });
});
