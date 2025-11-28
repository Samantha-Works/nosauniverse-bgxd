export default async function handler(req, res) {
  try {
    const hook = process.env.VERCEL_DEPLOY_HOOK;

    if (!hook) {
      return res.status(200).json({ ok:false, error:"Missing VERCEL_DEPLOY_HOOK" });
    }

    await fetch(hook, { method: "POST" });

    return res.status(200).json({
      ok: true,
      message: "Nova: deploy triggered"
    });

  } catch (err) {
    return res.status(500).json({ ok:false, error:err.message });
  }
}
