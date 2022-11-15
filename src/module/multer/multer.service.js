require("dotenv").config();
const { v4: uuidv4 } = require("uuid");
const path = require("path");
const Multer = require("fastify-multer");

var storageMulter = Multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + `/../../.${process.env.UPLOAD_FILE_DIR}`);
  },
  filename: (req, file, cb) => {
    switch (file.fieldname) {
      case `banner_desktop`: {
        cb(null, `banner_desktop-${uuidv4()}${path.extname(file.originalname)}`);
        break;
      }
      case `banner_mobile`: {
        cb(null, `banner_mobile-${uuidv4()}${path.extname(file.originalname)}`);
        break;
      }
      default: {
        cb(null, uuidv4() + path.extname(file.originalname));
      }
    }
  },
});

var fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

var uploadMulter = Multer({
  storage: storageMulter,
  // limits: { fileSize: 300000 }, // 500mb
  fileFilter: fileFilter,
});

let uploadItemArray = uploadMulter.array("image");
let uploadItemSingle = uploadMulter.single("image");

module.exports = { uploadItemArray, uploadItemSingle, uploadMulter };
