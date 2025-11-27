export default async function handler(req, res) {
  return res.status(200).json({
    ok: true,
    env: {
      hasHook: !!process.env.VERCEL_DEPLOY_HOOK
    },
    message: "Nova status endpoint OK."
  });
}
