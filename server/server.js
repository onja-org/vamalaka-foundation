const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const multer = require("multer");
const fs = require("fs");
const stream = require("stream");
const path = require("path");
const { mergeSchemas } = require("@graphql-tools/merge");

const adSchema = require("./graphql/AdSchema").AdSchema;
const userSchema = require("./graphql/UserSchema").UserSchema;
const categorySchema = require("./graphql/CategorySchema").CategorySchema;

const sharp = require("sharp");

const { resize, dummySVG } = require("./utils/image-manipulation");

const mergedSchema = mergeSchemas({
  schemas: [categorySchema, adSchema, userSchema],
});

const cors = require("cors");

const USER_UPLOAD_DIR = `.${process.env.USER_UPLOAD_DIR}`;
const USER_UPLOADED_DIR = process.env.USER_UPLOADED_DIR;

console.log("process.env.USER_UPLOAD_DIR", USER_UPLOAD_DIR);
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, USER_UPLOAD_DIR);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    const justName = path.basename(file.originalname, extension);
    const fileNameGiven =
      file.fieldname + "-" + justName + "-" + uniqueSuffix + extension;
    cb(null, fileNameGiven);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: function fileFilter(req, file, cb) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;

    // Check ext
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Images Only!");
    }
  },
  limits: { fileSize: 1 * 1024 * 1024 }, //1MB
});

app.use(cors());
app.options("*", cors());

mongoose.connect(
  "mongodb://mongo/myappdb",
  { useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    console.log("connected to Auuuuuummmooooooo");
  }
);

app.set("port", process.env.port || 4000);
app.listen(app.get("port"), () => {
  console.log("Node app is running at localhost:" + app.get("port"));
});

const AVATAR = "avatar";
const OFFER = "offer";

app.post(
  "/upload",
  upload.fields([
    { name: AVATAR, maxCount: 1 },
    { name: OFFER, maxCount: 1 },
  ]),
  function (req, res) {
    if (!req.files) {
      console.log("No files received");
    } else {
      const avatarFile = req.files[AVATAR];
      const offerFile = req.files[OFFER];

      const filenames = [
        ...(avatarFile ? [avatarFile[0].filename] : []),
        ...(offerFile ? [offerFile[0].filename] : []),
      ];
      console.log("Got a files to process:", req.files);
      return res.json({ success: true, filenames });
    }
  }
);

// TODO:

// cleanup dummy img

const generatePlaceholderImageWithText = async (width, height, message) => {
  console.log(width, "width");
  console.log(height, "height");
  const overlay = `<svg width="${width}" height="${height}">
  <polyline points="0,40 ${width * 0.1},${height * 0.2} ${width * 0.2},${
    height * 0.3
  } ${width * 0.3},${height * 0.4} ${width * 0.4},${height * 0.6} ${
    width * 0.6
  },${height * 0.6} ${width},${height}"
  style="fill:white;stroke:red;stroke-width:4" />  
  <path d="M150 0 L75 ${width} L225 ${height} Z" />
    <path d="M150 -80 L75 ${width * 0.8} L225 ${
    height * 0.8
  } Z" fill="orange" />
    <text x="50%" y="50%" fill="red" dominant-baseline="middle" text-anchor="middle">${message}</text>    
  </svg>`;

  return await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 230, g: 230, b: 230, alpha: 1 },
    },
  })
    .composite([
      {
        input: Buffer.from(overlay),
        gravity: "center",
      },
    ])
    .jpeg()
    .toFile("/app/images/noise.jpg");
};

app.get("/uploads/:file", async function (req, res) {
  let filepath = path.resolve(USER_UPLOADED_DIR, req.params.file);
  const widthString = req.query.width;
  const heightString = req.query.height;
  const format = req.query.format;
  const message = req.query.message;
  console.log("WiDTH", widthString);
  console.log("filepathfilepath:", filepath);
  console.log("message:", message);

  let width, height;
  if (widthString) {
    width = parseInt(widthString);
  }
  if (heightString) {
    height = parseInt(heightString);
  }
  if (filepath === "/app/images/dummy.jpg") {
    const dumImgBuffer = await generatePlaceholderImageWithText(
      width || 222,
      height || 222,
      message || "DUMMY IMAGE"
    );
    const readStream = fs.createReadStream("/app/images/noise.jpg");
    readStream.on("error", (err) => {
      console.log("Read stream Error " + err);
      res.status(500).send(err);
    });
    const transform = resize(format, width, height);

    readStream.pipe(transform).pipe(res);
    // readStream.pipe(res);

    // res.send(dumImgBuffer);
    // return;
  } else {
    try {
      const readStream = fs.createReadStream(filepath);
      readStream.on("error", (err) => {
        console.log("Read stream Error " + err);
        res.status(500).send(err);
      });

      const transform = resize(format, width, height);

      readStream.pipe(transform).pipe(res);
    } catch (err) {
      res.status(500).send("Something broke!");
    }
  }
});

app.use(
  "/graphql",
  graphqlHTTP((req, res, graphQLParams) => {
    return {
      schema: mergedSchema,
      rootValue: global,
      graphiql: true,
      context: { req },
    };
  })
);

app.get("/", (req, res) => {
  res.send("hello wood ! ");
});

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: "Something failed!" });
  } else {
    next(err);
  }
}
function errorHandler(err, req, res, next) {
  res.status(500);
  res.render("error", { error: err });
}

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
