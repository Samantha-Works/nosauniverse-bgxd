export default async function handler(req, res) {
  try {
    // Your Vercel env var – already set in the dashboard
    const hook = process.env.VERCEL_DEPLOY_HOOK;

    if (!hook) {
      return res.status(500).json({
        ok: false,
        error: "Missing VERCEL_DEPLOY_HOOK environment variable.",
      });
    }

    // Trigger the deploy
    const response = await fetch(hook, { method: "POST" });

    // We don’t need the full text, just a peek
    let bodyText = "";
    try {
      bodyText = await response.text();
    } catch {
      bodyText = "";
    }

    return res.status(200).json({
      ok: true,
      message: "Nova: deploy triggered.",
      vercelStatus: response.status,
      vercelPreview: bodyText.slice(0, 600),
    });
  } catch (err) {
    console.error("Nova deploy error:", err);
    return res.status(500).json({
      ok: false,
      error: err.message || "Unknown error",
    });
  }
}
