document.getElementById("novaButton").onclick = async () => {
  const res = await fetch('/api/deploy', { method: 'POST' });
  const data = await res.json();
  alert(JSON.stringify(data));
};
