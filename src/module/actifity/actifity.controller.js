const responseHandler = require("../../common/handler/response.handler");
const LogsModel = require("../../model/logs.model");

const listsController = async (req, res) => {
  res.actions = "/actifity/lists";
  const { limit, page } = req.next;

  try {
    const responseDetailData = await LogsModel.find()
      .skip((page || 0) * limit)
      .limit(limit || 0)
      .sort({ timestamp: "desc" });

    return responseHandler({ res, data: responseDetailData });
  } catch (error) {
    throw new Error(error);
  }
};

const listSearchController = async (req, res) => {
  res.actions = "/actifity/lists";
  const { limit, page } = req.next;

  try {
    let responseDetailData = await LogsModel.aggregate([{ $match: { ...req.body } }, { $skip: page * limit }, { $limit: 10 }, { $sort: { timestamp: -1 } }], (err, result) => {});
    responseDetailData = responseDetailData.map((res) => {
      const { APIresponse, request, response, ...resobj } = res;
      return resobj;
    });
    // .skip((page || 0) * limit)
    // .limit(limit || 0)
    // .sort({ timestamp: "desc" });

    return responseHandler({ res, data: responseDetailData });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { listsController, listSearchController };
