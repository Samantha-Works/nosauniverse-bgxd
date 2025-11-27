export default async function handler(req, res) {
  try {
    const hook = process.env.novadeploy; // ← this matches your key name

    if (!hook) {
      return res.status(500).json({
        ok: false,
        error: "Missing novadeploy environment variable"
      });
    }

    const vercelRes = await fetch(hook, {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });

    return res.status(200).json({
      ok: true,
      status: vercelRes.status,
      message: "Nova: deployment triggered."
    });

  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: err.message
    });
  }
}
