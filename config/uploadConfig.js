// const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});



const uploadFileConfig = async (filePath) => {
  console.log(filePath);
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "raw",
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { uploadFileConfig };
