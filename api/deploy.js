export default async function handler(req, res) {
  try {
    const hook = process.env.VERCEL_DEPLOY_HOOK;

    if (!hook) {
      return res.status(500).json({
        ok: false,
        error: "Missing VERCEL_DEPLOY_HOOK"
      });
    }

    const vercelRes = await fetch(VERCEL_DEPLOY_HOOK, { method: "POST" });

    return res.status(200).json({
      ok: true,
      message: "Nova: deploy triggered",
      status: vercelRes.status
    });
  } catch (err) {
    console.error("Nova deploy error:", err);
    return res.status(500).json({
      ok: false,
      error: err.message
    });
  }
}
