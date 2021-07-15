const sharp = require("sharp");

module.exports.resize = (format, width, height) => {
  try {
    let transform = sharp();
    if (format) {
      transform = transform.toFormat(format);
    }

    if (width || height) {
      transform = transform.resize(width, height);
    }

    return transform;
  } catch (err) {
    console.log("Error in resize", err);
    throw new Error("Problems reading the file");
  }
};
