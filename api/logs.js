export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    message: "Nova logs endpoint online.",
    time: new Date().toISOString(),
  });
}
