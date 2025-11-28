// api/status.js
export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    universe: "Samantha-SuperNova",
    environment: process.env.VERCEL_ENV || "production",
    timestamp: new Date().toISOString(),
  });
}
