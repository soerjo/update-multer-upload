require("dotenv").config();
const fs = require("fs");
const responseHandler = require("../../common/handler/response.handler");
const { execQuery } = require("../../configs/mysql.config");

const uploadPhoto = async (req, res) => {
  const { userindex } = req.body;

  try {
    let resQuerySelect = await execQuery("SELECT	tableuserphotourl,	tableuserphotopath FROM	xxxtableuser WHERE	tableuserindex  = ?;", [userindex]);
    resQuerySelect = resQuerySelect[0];

    if (resQuerySelect.tableuserphotopath) fs.unlinkSync(resQuerySelect.tableuserphotopath);

    let filepath = req.file.path;
    let fileurl = `${process.env.UPLOADED_IMAGE_ADDRESS}/${req.file.filename}`;
    await execQuery("UPDATE	xxxtableuser SET	tableuserphotourl = ?,	tableuserphotopath = ? WHERE	tableuserindex = ?;", [fileurl, filepath, userindex]);

    return responseHandler(res, {}, { imageUrl: fileurl });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { uploadPhoto };
