export default function handler(req,res){
  res.status(200).json({
    ok:true,
    logs:["Nova Engine online","Awaiting commands"]
  });
}
