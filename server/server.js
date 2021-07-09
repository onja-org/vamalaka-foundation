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
    console.log("connected to mo1223m");
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

app.get("/uploads/:file", function (req, res) {
  let filepath = path.resolve(USER_UPLOADED_DIR, req.params.file);

  const r = fs.createReadStream(filepath);
  const ps = new stream.PassThrough();
  stream.pipeline(r, ps, (error) => {
    if (error) {
      console.log("stream Error", error);
      return res.sendStatus(400);
    }
  });
  ps.pipe(res);
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
