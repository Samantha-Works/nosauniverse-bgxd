// api/deploy.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "POST only" });
  }

  try {
    const hook = process.env.VERCEL_DEPLOY_HOOK;

    if (!hook) {
      return res
        .status(500)
        .json({ ok: false, error: "Missing VERCEL_DEPLOY_HOOK" });
    }

    const vercelRes = await fetch(hook, { method: "POST" });

    return res.status(200).json({
      ok: true,
      message: "Nova: deploy triggered",
      vercelStatus: vercelRes.status,
    });
  } catch (err) {
    console.error("Nova deploy error:", err);
    return res
      .status(500)
      .json({ ok: false, error: err.message || "Unknown error" });
  }
}
