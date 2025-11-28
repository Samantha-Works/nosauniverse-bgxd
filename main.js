document.getElementById("runNova").addEventListener("click", async () => {
  try {
    const res = await fetch("/api/deploy");
    const json = await res.json();

    alert(JSON.stringify(json, null, 2));
  } catch (err) {
    alert("Nova failed: " + err.message);
  }
});
