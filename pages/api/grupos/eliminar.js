import connectMongo from "lib/connectMongo";
import modelPost from 'models/modelPost'

const handler = async (req, res) => {
try {
  await connectMongo();
  const {_id} = req.body;

  const data = await modelPost.deleteOne({_id});
  res.status(200).json(data)

} catch (error) {
  console.log(error)
  res.status(500).json({error})
}

}
export default handler;