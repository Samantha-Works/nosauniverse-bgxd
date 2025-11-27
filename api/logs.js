export default async function handler(req, res) {
  // Simple placeholder for now so you have a logs endpoint.
  return res.status(200).json({
    ok: true,
    entries: [],
    message: "Nova logs placeholder (wired, but not logging yet)."
  });
}
