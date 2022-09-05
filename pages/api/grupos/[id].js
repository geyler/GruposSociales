import connectMongo from "lib/connectMongo";
import modelPost from "models/modelPost";

const handler = async (req, res) => {
  try {
    await connectMongo();
    const { id } = req.query;

    let data = await modelPost.findById(id);
    if(data){
      data = await modelPost.findOneAndUpdate({_id: id}, {vistas: data.vistas + 1}, {new:true})
    }

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
export default handler;