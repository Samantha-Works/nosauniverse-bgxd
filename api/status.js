export default function handler(req,res){
  res.status(200).json({
    ok:true,
    status:"Running",
    timestamp:Date.now()
  });
}
