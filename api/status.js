export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    engine: "Nova",
    mode: "deploy-only",
    time: new Date().toISOString(),
  });
}
