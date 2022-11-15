const { v4: uuidv4 } = require("uuid");
const { execQuery } = require("../../configs/mysql.config");
const responseHandler = require("../../common/handler/response.handler");
const ResObjectResult = require("../../common/objClass/ResObject.class");

const namespace = "BANNER_CONTROLLER";

const uploadBanner = async (req, res) => {
  res.isnotification = true;
  res.actions = "/banner/upload";
  const objResponse = new ResObjectResult();
  const { banner_desktop, banner_mobile } = { ...req.files };
  const { publish_date, end_date, description } = { ...req.next };

  try {
    if (!banner_desktop) {
      objResponse.resultstatus = 0;
      objResponse.resultcode = "xxx999999010";
      objResponse.resulterrormessage = "xxx999999010 please provide banner desktop";

      return responseHandler({ res, objResponse });
    }
    if (!banner_mobile) {
      objResponse.resultstatus = 0;
      objResponse.resultcode = "xxx999999010";
      objResponse.resulterrormessage = "xxx999999010 please provide banner mobile";

      return responseHandler({ res, objResponse });
    }

    const tablebannerindex = uuidv4();
    const tablebannerdesktopurl = `${process.env.UPLOADED_IMAGE_ADDRESS}/${banner_desktop[0].filename}`;
    const tablebannerdesktoppath = `${banner_desktop[0].path}`;
    const tablebannermobileurl = `${process.env.UPLOADED_IMAGE_ADDRESS}/${banner_mobile[0].filename}`;
    const tablebannermobilepath = `${banner_mobile[0].path}`;

    await execQuery(
      `
    INSERT INTO
      xxxtablebanner
    (
      tablebannerindex,
      tablebannerdesktopurl,
      tablebannerdesktoppath,
      tablebannermobileurl,      
      tablebannermobilepath,
      tablebannerpublishdate,
      tablebannerenddate,
      tablebannerdescription,
      tablebannerisactive
    )
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);
    `,
      [tablebannerindex, tablebannerdesktopurl, tablebannerdesktoppath, tablebannermobileurl, tablebannermobilepath, new Date(publish_date), new Date(end_date), description, 1]
    );

    return responseHandler({ res });
  } catch (error) {
    throw new Error(error.message);
  }
};

const listBanner = async (req, res) => {
  res.isnotification = false;
  res.actions = "/banner/list";

  try {
    const resultselectbanner = await execQuery(
      `
    SELECT
      tablebannerindex,
      tablebannerdesktopurl,
      tablebannermobileurl,
      tablebannerpublishdate,
      tablebannerenddate,
      tablebannerdescription
    FROM
      xxxuserlocal.xxxtablebanner
    WHERE
      tablebannerpublishdate < NOW() AND
      tablebannerenddate > NOW() AND
      tablebannerisactive = 1;
    `,
      []
    );

    return responseHandler({ res, data: resultselectbanner });
  } catch (error) {
    throw new Error(error.message);
  }
};

const changeBanner = async (req, res) => {
  res.isnotification = true;
  res.actions = "/banner/change";
  const objResponse = new ResObjectResult();
  const { banner_desktop, banner_mobile } = { ...req.files };
  const { publish_date, end_date, description, tablebannerindex } = { ...req.next };

  try {
    // ---------------------------
    // VALIDATE BANNER
    if (!banner_desktop) {
      objResponse.resultstatus = 0;
      objResponse.resultcode = "xxx999999010";
      objResponse.resulterrormessage = "xxx999999010 please provide banner desktop";

      return responseHandler({ res, objResponse });
    }
    if (!banner_mobile) {
      objResponse.resultstatus = 0;
      objResponse.resultcode = "xxx999999010";
      objResponse.resulterrormessage = "xxx999999010 please provide banner mobile";

      return responseHandler({ res, objResponse });
    }

    // ---------------------------
    // CHECK BANNER BY INDEX
    let resultselectbanner = await execQuery(
      `
    SELECT
      tablebannerindex,
      tablebannerdesktopurl,
      tablebannerdesktoppath,
      tablebannermobileurl,
      tablebannermobilepath,
      tablebannerpublishdate,
      tablebannerenddate,
      tablebannerdescription
    FROM
      xxxuserlocal.xxxtablebanner
    WHERE
      tablebannerindex = ?;
    `,
      [tablebannerindex]
    );
    resultselectbanner = resultselectbanner[0];

    if (!resultselectbanner) {
      objResponse.resultstatus = 0;
      objResponse.resultcode = "xxx999999010";
      objResponse.resulterrormessage = "xxx999999010 banner is not found!";

      return responseHandler({ res, objResponse });
    }

    // ---------------------------
    // UPDATE BANNER BY INDEX
    const tablebannerdesktopurl = `${process.env.UPLOADED_IMAGE_ADDRESS}/${banner_desktop[0].filename}`;
    const tablebannerdesktoppath = `${banner_desktop[0].path}`;
    const tablebannermobileurl = `${process.env.UPLOADED_IMAGE_ADDRESS}/${banner_mobile[0].filename}`;
    const tablebannermobilepath = `${banner_mobile[0].path}`;

    await execQuery(
      `
    UPDATE
      xxxuserlocal.xxxtablebanner
    SET
      tablebannerdesktopurl = ?,
      tablebannerdesktoppath = ?,
      tablebannermobileurl = ?,
      tablebannermobilepath = ?,
      tablebannerpublishdate = ?,
      tablebannerenddate = ?,
      tablebannerdescription = ?
    WHERE
      tablebannerindex = ?;
    `,
      [tablebannerdesktopurl, tablebannerdesktoppath, tablebannermobileurl, tablebannermobilepath, new Date(publish_date), new Date(end_date), description, tablebannerindex]
    );

    return responseHandler({ res });
  } catch (error) {
    throw new Error(error.message);
  }
};

const inactiveBanner = async (req, res) => {
  res.isnotification = true;
  res.actions = "/banner/inactive";
  const objResponse = new ResObjectResult();
  const { tablebannerindex } = { ...req.next };

  try {
    // ---------------------------
    // CHECK BANNER BY INDEX
    let resultselectbanner = await execQuery(
      `
    SELECT
      tablebannerisactive
    FROM
      xxxuserlocal.xxxtablebanner
    WHERE
      tablebannerindex = ?;
    `,
      [tablebannerindex]
    );
    resultselectbanner = resultselectbanner[0];

    if (!resultselectbanner) {
      objResponse.resultstatus = 0;
      objResponse.resultcode = "xxx999999010";
      objResponse.resulterrormessage = "xxx999999010 banner is not found!";

      return responseHandler({ res, objResponse });
    }

    // ---------------------------
    // UPDATE BANNER BY INDEX
    await execQuery(
      `
    UPDATE
      xxxuserlocal.xxxtablebanner
    SET
      tablebannerisactive = ?
    WHERE
      tablebannerindex = ?;
    `,
      [!resultselectbanner.tablebannerisactive, tablebannerindex]
    );

    return responseHandler({ res });
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = {
  uploadBanner,
  listBanner,
  changeBanner,
  inactiveBanner,
};
