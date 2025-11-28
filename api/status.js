export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    status: "Waiting for command…",
    timestamp: Date.now()
  });
}
