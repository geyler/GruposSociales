import connectMongo from "lib/connectMongo";
import modelPost from "models/modelPost";

const handler = async (req, res) => {
  try {
    await connectMongo();
    const { s, creador, q , r } = req.query;
    const pag = parseInt(req.query.pag) || 1;

    const data = await modelPost.paginate({
      titulo: {
        $regex: s || '',
        $options: "i",
      },
      creador: {
        $regex: creador || '',
        $options: "i",
      },
      categoria: {
        $regex: q || '',
        $options: "i",
      },
      red: {
        $regex: r || '',
        $options: "i",
      },
    }, {
      limit: 20,
      page: pag,
      sort: {
          createdAt: -1
      }
    });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
export default handler;
